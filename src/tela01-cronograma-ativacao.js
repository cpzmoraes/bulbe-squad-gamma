document.addEventListener("DOMContentLoaded", () => {
    // Elementos da barra de progresso
    const progressPercent = document.getElementById("progress-percent");
    const progressFill = document.getElementById("progress-fill");
    
    // Elementos dos valores financeiros
    const savingsTotalEl = document.getElementById("savings-total");
    const savingsMonthEl = document.getElementById("savings-month");

    // Constantes de Valores
    const MAX_BAR_WIDTH = 340; // Largura total máxima da barra no layout
    const TOTAL_SAVINGS = 127.40; // Meta de economia total em reais
    const MONTH_SAVINGS = 55.30; // Meta de economia mensal em reais

    // Definindo as etapas do fluxo de ativação
    const steps = [
        { pct: 0, activeStep: 1 },
        { pct: 25, activeStep: 2 },
        { pct: 50, activeStep: 3 },
        { pct: 75, activeStep: 4 },
        { pct: 100, activeStep: 5 }
    ];

    let currentStepIndex = 0;

    /**
     * Função responsável por processar e pular os estados da interface instantaneamente
     */
    function updateUI() {
        const currentData = steps[currentStepIndex];

        // 1. Atualiza a porcentagem (texto) e a barra de progresso (largura visual)
        progressPercent.innerText = currentData.pct + "%";
        progressFill.style.width = `${(currentData.pct / 100) * MAX_BAR_WIDTH}px`;

        // 2. Atualiza os valores financeiros instantaneamente, baseado na %
        const currentTotalValue = (currentData.pct / 100) * TOTAL_SAVINGS;
        const currentMonthValue = (currentData.pct / 100) * MONTH_SAVINGS;

        const formatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
        
        savingsTotalEl.innerText = formatter.format(currentTotalValue);
        savingsMonthEl.innerText = formatter.format(currentMonthValue);

        // 3. Atualiza a checklist inferior, alterando o status dos ícones, textos e linhas
        for (let i = 1; i <= 5; i++) {
            const icon = document.getElementById(`icon-step-${i}`);
            const title = document.getElementById(`title-step-${i}`);
            const desc = document.getElementById(`desc-step-${i}`);
            const line = document.getElementById(`line-${i}`);

            const elements = [icon, title, desc];
            
            // Zera todos os estados antes de reatribuir
            elements.forEach(el => {
                if (el) el.classList.remove("status-pending", "status-active", "status-completed");
            });
            if (line) line.classList.remove("line-pending", "line-completed");

            // Aplica as classes dinâmicas dependendo se está concluído, ativo ou pendente
            if (i < currentData.activeStep || currentData.pct === 100) {
                elements.forEach(el => { if (el) el.classList.add("status-completed"); });
                if (line) line.classList.add("line-completed");
            } else if (i === currentData.activeStep && currentData.pct !== 100) {
                elements.forEach(el => { if (el) el.classList.add("status-active"); });
                if (line) line.classList.add("line-pending");
            } else {
                elements.forEach(el => { if (el) el.classList.add("status-pending"); });
                if (line) line.classList.add("line-pending");
            }
        }

        // 4. Avança o contador para a próxima etapa ou encerra se finalizou (100%)
        if (currentStepIndex < steps.length - 1) {
            currentStepIndex++;
        } else {
            clearInterval(animationTimer); 
        }
    }

    // Executa a primeira vez para aplicar o estilo e os números de 0%
    updateUI();

    // Inicia o temporizador que rodará a função a cada 2000 milissegundos (2s)
    const animationTimer = setInterval(updateUI, 2000);
});

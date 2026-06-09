document.addEventListener("DOMContentLoaded", () => {
    // Elementos da barra de progresso horizontal superior
    const progressPercent = document.getElementById("progress-percent");
    const progressFill = document.getElementById("progress-fill");
    
    // Elementos dos valores financeiros
    const savingsTotalEl = document.getElementById("savings-total");
    const savingsMonthEl = document.getElementById("savings-month");

    // Elementos da Timeline (vertical)
    const timelineSteps = document.querySelectorAll(".timeline-step");
    const timelineProgress = document.getElementById("timeline-progress");

    // Constantes de Valores Financeiros (Metas finais em 100%)
    const TOTAL_SAVINGS = 187.35; // Regra de três: 127.40 / 0.68
    const MONTH_SAVINGS = 81.32;  // Regra de três: 55.30 / 0.68

    // Porcentagem alvo (aonde a barra vai parar)
    const TARGET_PERCENTAGE = 68;

    // Etapas da Timeline distribuídas igualmente no eixo vertical
    // A altura total da linha é dividida em 4 segmentos (0 a 100%)
    const steps = [
        { pct: 0 },   // Step 1
        { pct: 25 },  // Step 2
        { pct: 50 },  // Step 3
        { pct: 75 },  // Step 4
        { pct: 100 }  // Step 5
    ];

    let currentPct = 0;
    const speed = 0.5; // Velocidade da animação (incremento por frame, 60fps)

    function updateUI() {
        // Trava no limite
        if (currentPct > TARGET_PERCENTAGE) {
            currentPct = TARGET_PERCENTAGE;
        }

        // 1. Atualiza a porcentagem e barra de progresso do card superior
        if (progressPercent) progressPercent.innerText = Math.floor(currentPct) + "%";
        if (progressFill) progressFill.style.width = `${currentPct}%`;

        // 2. Atualiza a altura da linha verde da Timeline
        if (timelineProgress) timelineProgress.style.height = `${currentPct}%`;

        // 3. Atualiza os valores financeiros proporcionalmente
        const currentTotalValue = (currentPct / 100) * TOTAL_SAVINGS;
        const currentMonthValue = (currentPct / 100) * MONTH_SAVINGS;

        const formatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
        
        if (savingsTotalEl) savingsTotalEl.innerText = formatter.format(currentTotalValue);
        if (savingsMonthEl) savingsMonthEl.innerText = formatter.format(currentMonthValue);

        // 4. Atualiza os ícones e badges da timeline dinamicamente
        timelineSteps.forEach((step, index) => {
            const stepData = steps[index];
            const iconEl = step.querySelector('.timeline-icon i');
            const badgeEl = step.querySelector('.step-badge');
            
            // Removemos as classes antigas de estado
            step.classList.remove("completed", "current", "pending");
            if (iconEl) {
                iconEl.classList.remove("spin");
                iconEl.className = ""; 
            }

            // Regra 1: Se a linha chegou ou passou da etapa, vira certinho.
            // Para a etapa inicial (0%), garantimos que currentPct > 0 para virar check, 
            // a menos que seja 0 absoluto onde ficará loading.
            if (currentPct >= stepData.pct && (currentPct > 0 || stepData.pct > 0)) {
                step.classList.add("completed");
                if (iconEl) iconEl.setAttribute("data-lucide", "check-circle-2");
                if (badgeEl) badgeEl.style.display = "none";
                
            } else {
                // Regra 2: A linha ainda não atingiu esse step.
                // Verificamos se este é o step "Atual" (o próximo a ser atingido)
                let isNext = true;
                for (let i = 0; i < index; i++) {
                    if (steps[i].pct > currentPct) {
                        isNext = false; // Existe outro pendente antes deste
                        break;
                    }
                }
                
                if (isNext) {
                    // Este é o step atual carregando (ícone rodando)
                    step.classList.add("current");
                    if (iconEl) {
                        iconEl.setAttribute("data-lucide", "refresh-cw");
                        iconEl.classList.add("spin");
                    }
                    if (badgeEl) badgeEl.style.display = "none";
                } else {
                    // Estes são os steps mais distantes no futuro (ampulheta)
                    step.classList.add("pending");
                    if (iconEl) iconEl.setAttribute("data-lucide", "hourglass");
                    
                    // Mostra o badge 'Próximo passo' apenas para o logo após o loading
                    let isNextNext = true;
                    for (let i = 0; i < index; i++) {
                        if (steps[i].pct > currentPct && i !== index - 1) {
                            isNextNext = false;
                        }
                    }
                    
                    if (badgeEl) {
                        badgeEl.style.display = isNextNext ? "block" : "none";
                    }
                }
            }
        });

        // Recria os ícones Lucide recém alterados
        if (window.lucide) {
            window.lucide.createIcons();
        }

        // Continua a animação até o target
        if (currentPct < TARGET_PERCENTAGE) {
            currentPct += speed;
            requestAnimationFrame(updateUI);
        } else {
            // Garante que o último frame (68%) seja renderizado exatamente com o TARGET
            if (currentPct !== TARGET_PERCENTAGE) {
                currentPct = TARGET_PERCENTAGE;
                updateUI();
            }
        }
    }

    // Dispara a animação
    requestAnimationFrame(updateUI);
});

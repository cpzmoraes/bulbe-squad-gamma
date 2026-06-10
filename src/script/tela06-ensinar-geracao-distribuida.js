document.addEventListener('DOMContentLoaded', () => {
    // 1. Botão de Voltar
    const backBtn = document.querySelector('.back-btn');
    if (backBtn) {
        backBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // Volta para a página anterior no histórico do navegador
            window.history.back();
        });
    }

    // 2. Accordion do FAQ
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            // Verifica se o item clicado já está aberto
            const isActive = item.classList.contains('active');
            
            // Fecha todos os itens para manter apenas um aberto (Accordion exclusivo)
            // Se quiser que múltiplos fiquem abertos, basta remover este forEach
            faqItems.forEach(faq => {
                faq.classList.remove('active');
            });

            // Se o item não estava aberto antes, ele abre agora
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // 3. Animações de Entrada (Scroll)
    // O IntersectionObserver "observa" quando os elementos aparecem na tela
    const observerOptions = {
        root: null, // usa a viewport (tela visível)
        rootMargin: '0px',
        threshold: 0.1 // Ativa quando 10% do elemento estiver visível
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Se o elemento entrou na tela
            if (entry.isIntersecting) {
                // Adiciona a classe 'visible' para iniciar a animação via CSS
                entry.target.classList.add('visible');
                
                // Pára de observar o elemento após ele aparecer a primeira vez
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Seleciona todos os elementos com a classe '.animate-on-scroll' e começa a observá-los
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => {
        scrollObserver.observe(el);
    });
});

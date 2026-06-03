// Inicializa os ícones na primeira carga da página
lucide.createIcons();

// Captura os elementos principais
const btnCopiar = document.getElementById('btn-copiar');
const btnText = btnCopiar.querySelector('span');

// Salva os dados originais para a reversão
const textoOriginal = 'Copiar link de indicação';

btnCopiar.addEventListener('click', () => {
    // 1. Localiza e remove o SVG atual (gerado pelo Lucide)
    const currentSvg = btnCopiar.querySelector('svg');
    if (currentSvg) {
        currentSvg.remove();
    }
    
    // 2. Insere a nova tag <i> com o ícone de sucesso antes do texto
    btnText.insertAdjacentHTML('beforebegin', '<i data-lucide="check-circle"></i>');
    
    // 3. Altera o texto e adiciona a classe CSS de sucesso
    btnText.innerText = 'Link copiado!';
    btnCopiar.classList.add('btn-sucesso');
    
    // 4. Renderiza o novo ícone recém-inserido
    lucide.createIcons();

    // 5. Reverte ao estado original após 2.5 segundos (2500ms)
    setTimeout(() => {
        // Localiza e remove o SVG de sucesso
        const successSvg = btnCopiar.querySelector('svg');
        if (successSvg) {
            successSvg.remove();
        }

        // Insere a tag <i> original
        btnText.insertAdjacentHTML('beforebegin', '<i data-lucide="copy"></i>');

        // Restaura o texto original e remove a classe de sucesso
        btnText.innerText = textoOriginal;
        btnCopiar.classList.remove('btn-sucesso');
        
        // Renderiza novamente o ícone original
        lucide.createIcons();
    }, 2500);
});

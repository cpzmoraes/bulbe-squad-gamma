document.addEventListener("DOMContentLoaded", () => {
    
    // Dados das Usinas (Você pode expandir isso no futuro)
    const usinasData = {
        "boa-vista": {
            id: "boa-vista",
            nome: "Usina Boa Vista",
            cidade: "Nova lima - MG",
            descricao: "A Usina Boa Vista produz energia limpa todos os dias para diversas famílias na região metropolitana de BH, contribuindo para um ambiente mais sustentável e uma economia real na conta de luz.",
            potencia: "3,1 MWp",
            economia: "R$ 20.000",
            usuarios: "+2.300",
            imagemCard: "../assets/usina-boa-vista.png",
            imagemDetalhe: "../assets/usina-boa-vista-detalhe.png",
            linkMaps: "https://www.google.com/maps/place/Bulbe+Energia/@-19.9281806,-43.9523711,18.21z"
        },
        "serra-azul": {
            id: "serra-azul",
            nome: "Usina Serra Azul",
            cidade: "Igarapé - MG",
            descricao: "Localizada em Igarapé, a Usina Serra Azul é um dos nossos maiores complexos de captação solar. Transforma a luz solar em desconto direto na sua fatura com alta eficiência e segurança.",
            potencia: "2,8 MWp",
            economia: "R$ 18.500",
            usuarios: "+1.800",
            imagemCard: "../assets/usina-serra-azul.png",
            imagemDetalhe: "../assets/usina-boa-vista-detalhe.png", // Usando a mesma temporariamente
            linkMaps: "https://www.google.com/maps"
        }
    };

    // Elementos do DOM (O Card de Detalhes)
    const detalheImg = document.getElementById("detalhe-img");
    const detalheNome = document.getElementById("detalhe-nome");
    const detalheCidade = document.getElementById("detalhe-cidade");
    const detalheDescricao = document.getElementById("detalhe-descricao");
    const detalhePotencia = document.getElementById("detalhe-potencia");
    const detalheEconomia = document.getElementById("detalhe-economia");
    const detalheUsuarios = document.getElementById("detalhe-usuarios");
    const linkVisitar = document.getElementById("link-visitar");

    // Botões dos cards horizontais
    const usinaCards = document.querySelectorAll(".usina-card");

    // Função para atualizar o detalhe da usina
    function updateUsinaDetalhes(usinaId) {
        const usina = usinasData[usinaId];
        if (!usina) return;

        // Atualiza os textos e propriedades no DOM
        detalheImg.src = usina.imagemDetalhe;
        detalheNome.innerText = usina.nome;
        
        // Mantém o ícone intacto alterando apenas o span
        detalheCidade.innerText = usina.cidade;
        
        detalheDescricao.innerText = usina.descricao;
        detalhePotencia.innerText = usina.potencia;
        detalheEconomia.innerText = usina.economia;
        detalheUsuarios.innerText = usina.usuarios;
        linkVisitar.href = usina.linkMaps;
    }

    // Eventos de clique nos cards
    usinaCards.forEach(card => {
        card.addEventListener("click", () => {
            // Remove 'active' de todos
            usinaCards.forEach(c => c.classList.remove("active"));
            
            // Adiciona 'active' no clicado
            card.classList.add("active");

            // Pega o ID da usina no atributo data-usina="boa-vista"
            const usinaId = card.getAttribute("data-usina");
            
            // Chama a função de atualização
            updateUsinaDetalhes(usinaId);
        });
    });

    // Inicia com a primeira usina do DOM (aquela que tem a classe active no HTML)
    const initialActiveCard = document.querySelector(".usina-card.active");
    if (initialActiveCard) {
        const initialId = initialActiveCard.getAttribute("data-usina");
        updateUsinaDetalhes(initialId);
    }
});
(function () {
      "use strict";

      var MAPS_URL = "https://www.google.com/maps/place/Bulbe+Energia/@-19.9281806,-43.9523711,18.21z/data=!4m7!3m6!1s0xa69766512e33d9:0x3cb48d348adeaa2d!4b1!8m2!3d-19.9281943!4d-43.9509109!16s%2Fg%2F11r_x1rnst?entry=ttu&g_ep=EgoyMDI2MDUzMS4wIKXMDSoASAFQAw%3D%3D";

      // Dados de cada usina (alimentam o card de baixo)
      var USINAS = {
        "boa-vista": {
          nome: "Usina Boa Vista",
          cidade: "Nova lima - MG",
          descricao: "A Usina Boa Vista produz energia limpa todos os dias.",
          potencia: "3,1 MWp",
          economia: "R$20.000",
          usuarios: "+2.300"
        },
        "serra-azul": {
          nome: "Usina Serra Azul",
          cidade: "Igarapé - MG",
          descricao: "A Usina Serra Azul gera energia solar de forma sustentável.",
          potencia: "2,7 MWp",
          economia: "R$18.500",
          usuarios: "+1.850"
        }
      };

      function init() {
        // Elementos do card de baixo
        var el = {
          nome:      document.getElementById("detalhe-nome"),
          cidade:    document.getElementById("detalhe-cidade"),
          descricao: document.getElementById("detalhe-descricao"),
          potencia:  document.getElementById("detalhe-potencia"),
          economia:  document.getElementById("detalhe-economia"),
          usuarios:  document.getElementById("detalhe-usuarios"),
          foto:      document.getElementById("detalhe-foto")
        };

        var cards = document.querySelectorAll(".card-topo");

        function selecionar(chave) {
          var dados = USINAS[chave];
          if (!dados) return;

          // Atualiza o card de baixo (foto permanece a mesma)
          el.nome.textContent      = dados.nome;
          el.cidade.textContent    = dados.cidade;
          el.descricao.textContent = dados.descricao;
          el.potencia.textContent  = dados.potencia;
          el.economia.textContent  = dados.economia;
          el.usuarios.textContent  = dados.usuarios;

          // Move a borda de seleção para o card clicado
          cards.forEach(function (c) {
            c.classList.toggle("is-selecionado", c.getAttribute("data-usina") === chave);
          });
        }

        // Clique nos cards de cima (são <button>: já disparam por teclado nativamente)
        cards.forEach(function (card) {
          card.addEventListener("click", function () {
            selecionar(card.getAttribute("data-usina"));
          });
        });

        // Clique na foto do card de baixo abre o mapa em nova guia
        el.foto.addEventListener("click", function () {
          window.open(MAPS_URL, "_blank", "noopener");
        });

        // Estado inicial: Boa Vista selecionada
        selecionar("boa-vista");
      }

      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
      } else {
        init();
      }
    })();
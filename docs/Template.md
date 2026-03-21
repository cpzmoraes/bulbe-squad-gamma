# 🌞 [Nome do Projeto] — Bulbe Energia
> **Disciplina:** Projeto Aplicado I — Ibmec 2026.1  
> **Professor:** Cristiano de Macedo Neto, M.Sc.  
> **Squad:** [Gamma]  
> **Cliente:** Bulbe Energia · [bulbeenergia.com.br](https://bulbeenergia.com.br)

---

## 📋 Sumário

1. [Introdução](#1-introdução)
2. [Demandas do Cliente](#2-demandas-do-cliente)
3. [Personas](#3-personas)
4. [User Stories](#4-user-stories)
5. [Funcionalidades](#5-funcionalidades)
6. [Protótipos](#6-protótipos)
7. [Código-Fonte](#7-código-fonte)
8. [Referências](#8-referências)

---

## 1. Introdução

### 1.1 Contexto do Projeto

Atualmente a Bulbe atende no mercado de energia apenas em Minas Gerais, com usinas no norte de Minas, eles estão em 4 posição entre as empresas de mesma área, uma delas é a Cemig SIM que se destaca como ponto relevante, CEMIG é o serviço de distribuição de energia em Minas Gerais onde todos pagam há anos. Devido ao nome a CEMIG SIM já está a frente no quesito confiabilidade.

### 1.2 Problema de Design

O problema identificado é a baixa tangibilidade do serviço, que resulta em desconfiança por parte do público-alvo (classes C e D). Devido à distância geográfica das usinas (localizadas no Norte de Minas), o modelo de negócio de geração distribuída parece "invisível" para clientes de Belo Horizonte e Contagem. 
 
### 1.3 Solução Proposta
 
Para o frontend, a Squad propõe uma atualização que ao tirar foto da conta antiga gera a previsão do ganho do usuário ao assinar com a Bulbe, de modo que já seja descontada a energia pública, sendo apresentada a quantidade de meses que seriam suficientes para que uma conta média do usuário seja "gratuita".
 
Além disso, pensamos em alternativas para mostrar a infraestrutura da empresa que incluem mostrar a parte da geração de energia por meio de fotos, vídeos e link do google maps mostrando o local caso viável, a partir disso, haverá maior clareza sobre a existência real da instituição.
 
### 1.4 Integrantes da Squad
 
| Nome Completo | Matrícula | Curso | Papel na Squad |
|---|---|---|---|
| [Victória Epifanio Soares Lucas] | [202508406136] | [Eng. Software] | [Dev] |
| [Cauã Felipe de Moraes Paz] | [202505008016] | [Eng. Software] | [Dev] |
| [Henrique Costa Bomfim] | [202302445391] | [Ciência de Dados] | [Dev] |
| [Danilo Dias Lima] | [202508885204] | [Eng. Computação] | [Dev] |
| [João Hector de Oliveira Fraga] | [202508827931] | [Ciência de Dados] | [Dev] |
| [Lucas Davi Alves de Souza] | [202501561306] | [Eng. Software] | [Dev] |

### 1.5 Repositório e Entrega

| Item | Link |
|---|---|
| Repositório GitHub | [URL do repositório] |
| GitHub Project (Kanban) | [URL do board] |
| Deploy / Demo | [URL do deploy, se disponível] |

---

## 2. Demandas do Cliente

> ⚠️ **Instrução para a Squad:** As demandas abaixo devem ser levantadas pela própria squad a partir da visita e entrevistas com a Bulbe Energia. Cada demanda deve ter evidência (trecho de fala do cliente, observação de campo, dado coletado). **Não é permitido copiar demandas de materiais de referência do professor.**

### Declaração de Rastreabilidade

> Declaro que as demandas registradas neste documento foram levantadas pela Squad [Gamma] durante a visita ao cliente em [04/03], com base em entrevistas diretas e observação. As evidências estão documentadas nas Issues do GitHub: [link para as Issues].

---

### D-01 · Insegurança dos assinantes

| Campo | Conteúdo |
|---|---|
| **ID** | D-01 |
| **Título** | Insegurança e Déficit de Comunicação no Pós-Venda |
| **Origem** | Durante a visita, 04/03 |
| **Evidência** | *"Estou esperando a algum tempo e ainda não sei quando vou ter meu desconto"* |
| **Prioridade MoSCoW** | Must |
| **Impacto no Negócio** | A falha de comunicação transforma a expectativa do desconto em frustração, gerando cancelamentos evitáveis e dificultando a entrada de novos clientes. |

**Descrição:**  
A demanda aborda a falta de clareza e transparência no processo de pós-assinatura, o que gera ansiedade e desconfiança nos clientes durante o período de espera pela ativação do benefício (desconto na conta de luz/CEMIG).

---

### D-02 · Não pagamento da primeira fatura por insegurança do cliente ao receber a da cemig

| Campo | Conteúdo |
|---|---|
| **ID** | D-02 |
| **Título** | Barreiras na Conversão do Primeiro Pagamento por Conflito de Faturas |
| **Origem** | Durante a visita, 04/03 |
| **Evidência** | *"A Cemig está me cobrando e o aplicativo dele também está me cobrando"* |
| **Prioridade MoSCoW** | Should |
| **Impacto no Negócio** | A confusão visual e educacional entre a conta da CEMIG e a da Bulbe trava o recebimento da empresa e gera uma crise de credibilidade imediata que pode matar o LTV (valor do cliente ao longo do tempo). |

**Descrição:**  
Esta demanda trata da resistência ao pagamento da primeira fatura, causada pela percepção equivocada de uma "cobrança duplicada" quando o cliente recebe tanto o boleto da concessionária (CEMIG) quanto o da empresa (Bulbe).

---

### D-03 · Alto cancelamento durante os primeiros 90 dias

| Campo | Conteúdo |
|---|---|
| **ID** | D-03 |
| **Título** | Abandono Pós-Venda e Deficiência no Suporte Humano de Boas-Vindas |
| **Origem** | Durante a visita, 04/03 |
| **Evidência** | *"Fiquei com medo de ser algum golpe. A gente assina, fica meses sem nenhuma notícia e quando tenta perguntar algo, não tem retorno. Pedi para cancelar."* |
| **Prioridade MoSCoW** | Should |
| **Impacto no Negócio** | O "vácuo" de comunicação nos primeiros 90 dias destrói a confiança e transforma o que deveria ser economia em ansiedade, gerando um prejuízo financeiro direto e manchando a reputação da marca. |

**Descrição:**  
Esta demanda foca na perda prematura de clientes logo após a adesão, motivada por um sentimento de abandono e falta de suporte humano durante o período de espera.

---

### D-04 · Indicações são importantes para gerar confiabilidade

| Campo | Conteúdo |
|---|---|
| **ID** | D-04 |
| **Título** | Marketing de Indicação como Ativador de Confiança |
| **Origem** | Durante a visita, 04/03 |
| **Evidência** | *"100% confiável. Estou economizando na conta de luz todos os meses, além de ganhar R$50 por indicação de amigos."* |
| **Prioridade MoSCoW** | Should |
| **Impacto no Negócio** | A implementação desta estratégia reduz drasticamente o custo de aquisição de clientes (CAC) e a taxa de cancelamento precoce, pois a indicação de um conhecido possui um peso de confiança superior a qualquer publicidade paga. |

**Descrição:**  
Esta demanda foca no uso do Marketing de Indicação (Referral) não apenas como canal de vendas, mas como uma ferramenta estratégica para reduzir o medo e a desconfiança de novos clientes.

---

### D-05 · O app não tem objetividade e não há clareza

| Campo | Conteúdo |
|---|---|
| **ID** | D-05 |
| **Título** | Retenção e Adimplência via Transparência de Dados no Appa |
| **Origem** | Durante a visita, 04/03 |
| **Evidência** | *"App da confiança e a chance de pagamento aumenta em 65%"* |
| **Prioridade MoSCoW** | Must |
| **Impacto no Negócio** | A otimização do aplicativo eleva a probabilidade de pagamento em até 65%, pois tangibiliza o valor do serviço e reduz a insegurança do cliente. Ao oferecer informações claras e de fácil acesso, a empresa diminui drasticamente o volume de chamados no suporte e fortalece a retenção, consolidando o ambiente digital como o principal pilar de credibilidade e fidelização do assinante. |

**Descrição:**  
Esta demanda foca na reformulação do aplicativo para torná-lo mais intuitivo e informativo, eliminando a falta de objetividade que gera dúvida no usuário. A proposta é incluir funcionalidades de acompanhamento de gastos e economia acumulada, transformando o app em uma ferramenta de transparência que oferece suporte visual e dados claros durante todo o ciclo de assinatura, especialmente nos primeiros 90 dias.

---

## 3. Personas

> ⚠️ **Instrução para a Squad:** As personas devem ser construídas com base em dados reais coletados pela squad (entrevistas, questionários, observação). Referência metodológica: Cooper et al. (2014) — *About Face: The Essentials of Interaction Design*.

---

### Persona 1 — [ Sergio Rodrigues ]

```
┌─────────────────────────────────────────────────────────────┐
│  👤  [Sergio Rodrigues], [42] anos                                   │
│      [Empreendedor] · [Belo Horizonte]                        │
└─────────────────────────────────────────────────────────────┘
```

| Atributo | Descrição |
|---|---|
| **Perfil** | [ Cliente Inseguro ] |
| **Escolaridade** | [ Ensino médio completo ] |
| **Familiaridade com tecnologia** | [ Média ] |
| **Dispositivo principal** | [Smartphone Iphone] |

**Objetivos:**
- [Objetivo 1 - Aumentar a margem de lucro para maiores investimentos na infraestrutura.]
- [Objetivo 2 - Diminuir o custo de energia em sua linha de restaurantes.]

**Frustrações:**
- [Frustração 1 - Não confiar que terá uma redução significativa na conta de luz.]
- [Frustração 2 - Baixa confiabilidade. Promessas vazias.]

**Citação representativa:**
> *"Eu até quero economizar na conta de luz, mas preciso ter certeza de que isso realmente funciona — já vi muita promessa que não se cumpre."*

**Relevância para o Projeto:**  
Sergio representa clientes interessados, mas com alto nível de desconfiança. Ele é essencial para o projeto porque evidencia a necessidade de transmitir credibilidade, clareza e comprovação de resultados. As decisões de design devem focar em reduzir inseguranças e facilitar a confiança no serviço.

---

### Persona 2 — [ Juliana Santos ]


```
┌─────────────────────────────────────────────────────────────┐
│  👤  [Juliana Santos], [28] anos                                   │
│      [Gerente de RH] · [Betim]                        │
└─────────────────────────────────────────────────────────────┘
```

| Atributo | Descrição |
|---|---|
| **Perfil** | [ Cliente Parceiro ] |
| **Escolaridade** | [ Ensino superior complet0 ] |
| **Familiaridade com tecnologia** | [ Alta ] |
| **Dispositivo principal** | [Smartphone Iphone/ Desktop ] |

**Objetivos:**
- [Objetivo 1 - Aumentar o número de beneficios da vaga de emprego.]
- [Objetivo 2 - Falta de atratividade na vaga.]

**Frustrações:**
- [Frustração 1 - Taxa de desconto abaixo do mercado.]
- [Frustração 2 - Falta de visibilidade da bulbe.]

**Citação representativa:**
> *"Eu preciso oferecer benefícios que realmente chamem atenção, mas também preciso de soluções confiáveis e que façam sentido para a empresa."*

**Relevância para o Projeto:**  
Juliana representa empresas que podem atuar como parceiras estratégicas, utilizando o serviço como benefício corporativo. Ela é importante porque destaca a necessidade de posicionar a solução como diferencial competitivo, com boa comunicação de valor e visibilidade. O design deve facilitar o entendimento dos benefícios e reforçar a atratividade para empresas e colaboradores.

---

### Persona 3 — [ Wesley ]


```
┌─────────────────────────────────────────────────────────────┐
│  👤  [Wesley], [42] anos                                   │
│      [Repositor de Mercearia] · [Raposos/MG]                        │
└─────────────────────────────────────────────────────────────┘
```

| Atributo | Descrição |
|---|---|
| **Perfil** | [ Cliente Preocupado com o valor da conta ] |
| **Escolaridade** | [ Ensino médio incompleto ] |
| **Familiaridade com tecnologia** | [ Baixa ] |
| **Dispositivo principal** | [Smartphone Android] |

**Objetivos:**
- [Objetivo 1 - Economizar na conta de luz de forma signativa para aumentar o poder de compra com o baixo salário.]
- [Objetivo 2 - A dor de gastar muito com energia e faltar para o lazer ou outras compras mais satisfatórias.]

**Frustrações:**
- [Frustração 1 - Confiança em uma empresa que promete uma redução "gratuita" em um pagamento que é recorrente desde muitos anos.]
- [Frustração 2 - Pagar caro na conta de luz.]

**Citação representativa:**
> *"Se realmente der pra pagar menos na conta de luz sem complicação, já ajuda muito no fim do mês — mas eu fico com o pé atrás."*

**Relevância para o Projeto:**  
Wesley representa usuários com baixa familiaridade digital e alta sensibilidade a preço. Ele é importante porque evidencia a necessidade de um design simples, acessível e fácil de entender, além de reforçar a confiança no serviço. O produto deve reduzir barreiras de uso e comunicar os benefícios de forma clara e direta.

---

### Persona 4 — [Willian Marcos]


```
┌─────────────────────────────────────────────────────────────┐
│  👤  [Willian Marcos], [32] anos                                   │
│      [Soldador] · [Jaíba]                        │
└─────────────────────────────────────────────────────────────┘
```

| Atributo | Descrição |
|---|---|
| **Perfil** | [ Cliente que indica o que gosta ] |
| **Escolaridade** | [ Ensino médio completo ] |
| **Familiaridade com tecnologia** | [ Média ] |
| **Dispositivo principal** | [Smartphone Android] |

**Objetivos:**
- [Objetivo 1 - O objetivo principal é economizar para que sobre um pouco de dinheiro para o lazer.]
- [Objetivo 2 - A dor de querer sair da classe D+E, e não ter dinheiro para sair nos finais de semana.]

**Frustrações:**
- [Frustração 1 - A demora dos resultados.]
- [Frustração 2 - A demora da ativação.]

**Citação representativa:**
> *"Se eu ver que realmente funciona e economiza, eu mesmo falo pra todo mundo — mas tem que acontecer rápido."*

**Relevância para o Projeto:**  
Willian representa usuários com potencial de indicação, sendo importante para o crescimento orgânico do serviço. Ele destaca a necessidade de uma boa experiência inicial, com ativação rápida e resultados perceptíveis. O design deve valorizar a agilidade e incentivar o compartilhamento da solução.

---


## 4. User Stories

> ⚠️ **Instrução para a Squad:** User Stories devem seguir o formato padrão: *"Como [persona], quero [ação], para que [benefício]"* (Cohn, 2004). Cada história deve ter critérios de aceitação mensuráveis.

### Tabela Resumo

| ID | Persona | Título | Prioridade | Status |
|---|---|---|---|---|
| US-01 | [Persona] | [Título curto] | Alta / Média / Baixa | To Do / In Progress / Done |
| US-02 | [Persona] | [Título curto] | | |
| US-03 | [Persona] | [Título curto] | | |

---

### US-01 · [Título]

> **Como** [Persona],  
> **quero** [ação que o usuário deseja realizar],  
> **para que** [benefício ou objetivo que o usuário alcança].

**Demanda relacionada:** D-0X  
**Estimativa de esforço:** [P / M / G] *(Story Points ou T-shirt sizing)*

**Critérios de Aceitação:**
- [ ] [Critério 1: condição verificável e objetiva]
- [ ] [Critério 2]
- [ ] [Critério 3]

**Notas técnicas:**  
[Observações relevantes para a implementação, limitações conhecidas ou dependências.]

---

### US-02 · [Título]

> **Como** [Persona],  
> **quero** [ação],  
> **para que** [benefício].

**Demanda relacionada:** D-0X  
**Estimativa de esforço:** [P / M / G]

**Critérios de Aceitação:**
- [ ] [Critério 1]
- [ ] [Critério 2]

---

> 🔁 *Repita o bloco para cada User Story. Recomendado: mínimo de 6 histórias.*

---

## 5. Funcionalidades

> ⚠️ **Instrução para a Squad:** Liste as funcionalidades que serão implementadas, organizadas por User Story e classificadas via MoSCoW (Clegg & Barker, 1994). Mantenha rastreabilidade com as demandas e histórias anteriores.

### 5.1 Mapa de Funcionalidades

| ID | Funcionalidade | US Relacionada | MoSCoW | Sprint |
|---|---|---|---|---|
| F-01 | [Nome da funcionalidade] | US-01 | Must Have | Sprint 1 |
| F-02 | [Nome da funcionalidade] | US-02 | Should Have | Sprint 2 |
| F-03 | [Nome da funcionalidade] | US-03 | Could Have | Sprint 3 |
| F-04 | [Nome da funcionalidade] | US-04 | Won't Have | — |

### 5.2 Descrição das Funcionalidades Must Have

#### F-01 · [Nome da Funcionalidade]

**Descrição:**  
[Descrição técnica e funcional. O que a funcionalidade faz? Como o usuário interage com ela?]

**Comportamento esperado:**
1. [Passo 1 do fluxo principal]
2. [Passo 2]
3. [Resultado final para o usuário]

**Restrições e regras de negócio:**
- [Regra 1: ex. "O prazo de espera exibido não pode ser inferior a 0 dias."]
- [Regra 2]

---

> 🔁 *Repita para cada funcionalidade Must Have e Should Have.*

---

## 6. Protótipos

> ⚠️ **Instrução para a Squad:** Registre aqui os links e imagens dos protótipos. Recomenda-se o uso do Figma. A progressão deve ser: esboço (wireframe) → baixa fidelidade → alta fidelidade.

### 6.1 Wireframes (Baixa Fidelidade)

| Tela | Link Figma | Descrição |
|---|---|---|
| [Nome da tela] | [URL] | [Breve descrição do que a tela representa] |
| [Nome da tela] | [URL] | [Descrição] |

### 6.2 Protótipo de Alta Fidelidade

**Link do protótipo interativo (Figma):** [URL]

#### Capturas de Tela

> *Insira aqui imagens exportadas do Figma ou screenshots do protótipo.*

**Tela: [Nome]**  
![Descrição da imagem](./prototipos/[nome-do-arquivo].png)

**Tela: [Nome]**  
![Descrição da imagem](./prototipos/[nome-do-arquivo].png)

### 6.3 Decisões de Design

| Decisão | Justificativa |
|---|---|
| [Ex: Paleta de cores baseada na identidade da Bulbe] | [Ex: Manutenção da consistência com a marca do cliente] |
| [Decisão 2] | [Justificativa 2] |
| [Decisão 3] | [Justificativa 3] |

---

## 7. Código-Fonte

> ⚠️ **Instrução para a Squad:** Mantenha a estrutura de pastas abaixo. Todos os arquivos devem ser entregues via GitHub com commits semânticos e rastreabilidade por Issues.

### 7.1 Estrutura de Diretórios

```
[nome-do-repositorio]/
│
├── docs/                        # Documentação do projeto
│   ├── demandas.md              # Detalhamento das demandas (entrega via GitHub)
│   ├── personas.md              # Personas detalhadas
│   └── decisoes-design.md      # Registro de decisões de design (ADRs)
│
├── prototipos/                  # Capturas e exportações do Figma
│   ├── wireframes/
│   └── alta-fidelidade/
│
├── src/                         # Código-fonte da aplicação
│   ├── assets/                  # Imagens, fontes, ícones
│   ├── components/              # Componentes reutilizáveis
│   ├── pages/                   # Páginas / rotas
│   ├── styles/                  # Arquivos de estilo globais
│   ├── data/                    # Mocks de dados (JSON)
│   └── utils/                   # Funções utilitárias
│
├── .gitignore
├── README.md                    # Este arquivo
└── [package.json / index.html]  # Ponto de entrada da aplicação
```

### 7.2 Convenções de Código

| Convenção | Padrão adotado |
|---|---|
| Commits | Semânticos: `feat:`, `fix:`, `docs:`, `style:`, `refactor:` |
| Branches | `feat/[nome]`, `fix/[nome]`, `docs/[nome]` |
| Issues | Vinculadas a User Stories via `#ID` no commit |
| Pull Requests | Revisados por pelo menos 1 membro da squad antes do merge |

### 7.3 Como Executar o Projeto Localmente

```bash
# 1. Clone o repositório
git clone git@github.com:[usuario]/[repositorio].git

# 2. Acesse a pasta do projeto
cd [repositorio]

# 3. [Insira aqui os comandos de instalação de dependências, se houver]
# Ex: npm install

# 4. Inicie o servidor de desenvolvimento
# Ex: npm run dev
# Ou: python -m http.server 8000

# 5. Acesse no navegador
# http://localhost:[porta]
```

### 7.4 Histórico de Sprints

| Sprint | Período | Objetivo Principal | Status |
|---|---|---|---|
| Sprint 0 | [datas] | Descoberta e configuração do ambiente | ✅ Concluída |
| Sprint 1 | [datas] | [Objetivo] | 🔄 Em andamento |
| Sprint 2 | [datas] | [Objetivo] | ⏳ Planejada |
| Sprint 3 | [datas] | [Objetivo] | ⏳ Planejada |

---

## 8. Referências

> ⚠️ **Instrução para a Squad:** Cite **todas** as fontes utilizadas, incluindo fontes acadêmicas, relatórios de mercado e documentação técnica. Use o padrão ABNT NBR 6023:2018. Nunca omita uma fonte para evitar plágio.

### Bibliográficas

AQUILES, Alexandre; FERREIRA, Rodrigo. **Controlando versões com Git e GitHub**. São Paulo: Casa do Código, 2020.

COHN, Mike. **User Stories Applied: For Agile Software Development**. Boston: Addison-Wesley, 2004.

COOPER, Alan et al. **About Face: The Essentials of Interaction Design**. 4. ed. Indianapolis: Wiley, 2014.

NIELSEN, Jakob. **Usabilidade na web: projetando websites com qualidade**. Rio de Janeiro: Campus, 2007.

SUTHERLAND, Jeff; SUTHERLAND, J. J. **Scrum: a arte de fazer o dobro do trabalho na metade do tempo**. Rio de Janeiro: Sextante, 2019.

### Fontes de Mercado e Dados

ABSOLAR — Associação Brasileira de Energia Solar Fotovoltaica. **Infográfico ABSOLAR**. Disponível em: https://www.absolar.org.br. Acesso em: [data de acesso].

ANEEL — Agência Nacional de Energia Elétrica. **Geração Distribuída: dados e estatísticas**. Disponível em: https://www.aneel.gov.br. Acesso em: [data de acesso].

### Documentação Técnica

[Inclua aqui referências à documentação oficial de frameworks, bibliotecas ou ferramentas utilizadas no projeto.]

---

<br>

> 📌 **Nota de integridade acadêmica:**  
> Este documento foi produzido pela Squad [Nome] com base em pesquisa original, entrevistas com o cliente e desenvolvimento próprio. Todos os trechos e dados externos estão devidamente referenciados. O uso de IA generativa para apoio à escrita, quando ocorreu, foi declarado nas Issues correspondentes do GitHub.

---

*Última atualização: [data] · Squad [Nome] · Projeto Aplicado I — Ibmec 2026.1*

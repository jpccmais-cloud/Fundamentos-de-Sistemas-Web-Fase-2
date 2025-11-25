# Documento de Entrega - Fase 2: Sistema Web Petshop Aurora

## 1. Objetivo e Metas da Fase 2

O objetivo desta fase foi transformar o sistema web estrutural (HTML puro) desenvolvido na Fase 1 em uma aplicação **visualmente atraente e dinâmica**, incorporando estilização com **CSS/Bootstrap** e interatividade com **JavaScript**. Além disso, foram adicionadas funcionalidades essenciais de **cadastro de cliente/pet** e **agendamento de serviços**.

### Metas Específicas (Atividades)

| ID | Meta Específica | Descrição | Status |
| :---: | :--- | :--- | :---: |
| M1 | **Integração de Estilização** | Integrar o framework Bootstrap 5 e um arquivo CSS personalizado (`style.css`) para modernizar o layout e a tipografia do site. | Concluída |
| M2 | **Implementação de Carrossel** | Adicionar um carrossel interativo (Bootstrap Carousel) na página inicial (`index.html`) para destacar produtos e serviços, tornando o site mais dinâmico. | Concluída |
| M3 | **Formulário de Cadastro** | Criar a nova página de agendamento (`agendamento.html`) com um formulário completo para cadastro de cliente e pet, utilizando diversos tipos de input (text, email, tel, number, radio, checkbox, date, time). | Concluída |
| M4 | **Agendamento de Serviços** | Implementar a lógica de agendamento com seleção de serviço (Banho/Tosa), método de entrega (Tele-busca/Local) e campos de data/hora, com validação de horário. | Concluída |
| M5 | **Funções JavaScript** | Desenvolver funções em JavaScript (`script.js`) para: 1) Exibir a data e hora atual (função temporal); 2) Realizar a validação do formulário de agendamento (Bootstrap Validation); 3) Habilitar/desabilitar o campo de endereço com base na escolha do método de agendamento. | Concluída |
| M6 | **Acessibilidade** | Revisar e garantir a presença do atributo `alt` em todas as imagens do projeto, atendendo ao requisito mínimo de acessibilidade para deficientes visuais. | Concluída |
| M7 | **Documentação e Publicação** | Elaborar o documento descritivo da Fase 2 e preparar o projeto para publicação no GitHub/GitHub Pages. | Pendente |

## 2. Ajustes Realizados no Código-Fonte

O projeto da Fase 1 foi totalmente reestruturado para a Fase 2. Os principais ajustes realizados para minimizar problemas e atender aos novos requisitos foram:

### 2.1. Estrutura e Estilização

*   **Integração Bootstrap:** Todos os arquivos HTML foram atualizados para incluir os links do Bootstrap 5 (CSS e JS) e o arquivo CSS personalizado (`style.css`).
*   **Navegação:** O cabeçalho em HTML puro foi substituído por um **Navbar Bootstrap** responsivo e fixo no topo (`fixed-top`), incluindo o novo link para a página de **Agendamento**.
*   **Rodapé:** O rodapé foi estilizado com classes Bootstrap e a autoria foi padronizada para **José Kirschke** em todos os arquivos.
*   **Carrossel:** A seção de "Destaques da Semana" na `index.html` foi convertida em um **Bootstrap Carousel** com três slides, tornando a página inicial mais dinâmica.

### 2.2. Novas Funcionalidades (agendamento.html)

*   **Formulário Completo:** A página `agendamento.html` foi criada, contendo dois grandes blocos de formulário: **Dados do Cliente** (Nome, CPF, E-mail, Telefone, Sexo, Endereço) e **Dados do Pet/Agendamento** (Nome do Pet, Raça, Idade, Serviço, Método de Agendamento, Data e Hora).
*   **Validação de Formulário:** O formulário utiliza a classe `needs-validation` do Bootstrap, e o arquivo `script.js` implementa a lógica de validação para garantir que todos os campos obrigatórios sejam preenchidos corretamente.
*   **Agendamento:** O campo de **Data** (`type="date"`) e **Hora** (`type="time"`) foram incluídos para o agendamento, com restrição de horário entre 09:00 e 18:00.
*   **Lógica de Tele-busca:** O JavaScript foi configurado para que o campo **Endereço** se torne obrigatório e habilitado **apenas** quando a opção "Tele-busca" for selecionada.

### 2.3. JavaScript e Acessibilidade

*   **Função Temporal:** O arquivo `script.js` inclui uma função que exibe a data e hora atual na página de Agendamento, atualizando a cada segundo.
*   **Acessibilidade (`alt`):** Todos os elementos `<img>` no projeto (incluindo os placeholders do carrossel e os produtos/serviços) possuem o atributo `alt` preenchido com descrições relevantes, atendendo ao requisito de acessibilidade para deficientes visuais.

---

## 3. Links para Entrega

**ATENÇÃO:** Você deve substituir os placeholders abaixo pelos seus links reais do GitHub e GitHub Pages.

### 3.1. Link para os Códigos-Fonte (HTML/CSS/JS) no Repositório GitHub

**Link:** `[INSERIR SEU LINK DO REPOSITÓRIO GITHUB AQUI]`

### 3.2. Link para o Sistema Resultante (GitHub Pages ou Similar)

**Link:** `[INSERIR SEU LINK DO GITHUB PAGES AQUI]`

### 3.3. Arquivo de Ajuda (README.md)

O arquivo `README.md` do repositório deve ser atualizado para descrever as novas funcionalidades da Fase 2.

**Funcionalidades da Página Web (Fase 2):**

*   **Layout Moderno:** Uso de Bootstrap 5 para um design responsivo e moderno.
*   **Navegação Aprimorada:** Navbar fixo no topo com link para a nova página de Agendamento.
*   **Carrossel de Destaques:** Seção dinâmica na página inicial para promover produtos e serviços.
*   **Formulário de Agendamento:** Formulário completo para cadastro de cliente e pet, com validação de dados.
*   **Interatividade:** Uso de JavaScript para exibir a data/hora atual e para gerenciar a obrigatoriedade do campo de endereço na Tele-busca.
*   **Acessibilidade:** Implementação do atributo `alt` em todas as imagens.

**Autoria:** José Kirschke.

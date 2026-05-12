# 🕹️ Capcom Cup 12 - Landing Page (Fan Project)

Este projeto é uma Landing Page imersiva e de alta performance dedicada à **Capcom Cup 12**, o ápice do cenário competitivo de Street Fighter 6. O objetivo foi criar uma experiência visual dinâmica que reflita a energia dos eSports, aplicando técnicas avançadas de estilização, responsividade e performance.

🔗 **[Clique aqui para visualizar o projeto ao vivo](https://capcom-cup-12.vercel.app/)**

---

## 🚀 Desafios Técnicos & Soluções

### 🎨 Arquitetura CSS & Design de Interface
*   **SASS com Metodologia BEM:** Estruturação modular para gerenciar um design visualmente denso, garantindo que componentes como o `player-identity` (o badge de nick dos jogadores) fossem reutilizáveis e fáceis de manter.
*   **Tratamento de Contraste Dinâmico:** Um desafio específico foi a legibilidade de personagens com paletas de cores saturadas (como o M. Bison). A solução envolveu modificadores de background específicos e tratamento de silhuetas para garantir contraste em diferentes telas.
*   **Glassmorphism & Neon Effects:** Uso de variáveis SASS e mixins para criar profundidade e brilho nos componentes sem comprometer o desempenho do navegador.

### 📱 UX Mobile & Responsividade Extrema
*   **Viewport Dinâmica (DVH):** Implementação de `dvh` para evitar que o conteúdo do Hero fosse "cortado" pela barra de endereços dos navegadores mobile, mantendo os CTAs (Call to Action) sempre visíveis.
*   **Flip Cards com Touch-Support:** Ajuste da lógica de rotação dos cards para mobile. Implementei um sistema de *toggle* via JavaScript para que o usuário possa tocar para virar o card, resolvendo a limitação do `:hover` em dispositivos touch.

### 🎬 Performance & Animações
*   **AOS (Animate On Scroll):** Configuração refinada para evitar o *Layout Shift*. Otimização dos gatilhos de animação e uso da propriedade `will-change` para garantir transições fluidas de 60fps.
*   **Asset Optimization com Parcel:** Utilização do bundler **Parcel** para minificação de código e processamento automatizado de imagens (Sharp), reduzindo drasticamente o peso das mídias.

### 🌐 SEO & Social Share (Open Graph)
*   **Metadata Profissional:** Configuração completa de tags `og:image` e `og:url` com links absolutos e controle de cache (`?v=1`), garantindo previews perfeitos no Instagram.
*   **PWA Readiness:** Implementação de `webmanifest` e ícones em múltiplas resoluções (Apple Touch Icon e Android Chrome Icons) para uma experiência de instalação nativa.

---

## 🛠️ Tecnologias Utilizadas

*   **HTML5 Semântico**
*   **SASS** (Arquitetura BEM, Mixins, Variáveis)
*   **JavaScript Vanilla** (Lógica do Timer, Toggle de Cards e Manipulação de DOM)
*   **Parcel** (Bundler, Minificação e Otimização de Assets)
*   **AOS.js** (Animações de Scroll)
*   **Font Awesome** (Iconografia)

---

## 📖 Aprendizados
Este projeto consolidou minha transição para o ecossistema moderno de desenvolvimento web. Vindo de uma base sólida em **C# e sistemas corporativos (Oracle/SQL)**, aplicar lógica rigorosa em interfaces fluidas e ricas em UI foi um passo fundamental na minha formação como desenvolvedor Full Stack.

---

## 👨‍💻 Autor
**Gustavo Inglez**

*   **LinkedIn:** [linkedin.com/in/gustavo-inglez](https://www.linkedin.com/in/gustavo-inglez/)
*   **GitHub:** [github.com/gugainglez2](https://github.com/gugainglez2)

---

🕹️ Capcom Cup 12 - Landing Page (Fan Project)

Este projeto é uma Landing Page imersiva e de alta performance dedicada à Capcom Cup 12, o maior evento competitivo de Street Fighter 6 do mundo. O objetivo foi criar uma experiência visual "Broadcast-style", simulando a estética de transmissões internacionais de eSports.

🔗 Visualize o projeto ao vivo aqui

🚀 Desafios Técnicos & Soluções Aplicadas

🎨 Arquitetura CSS & Design de Interface

SASS com Metodologia BEM: Estruturação modular para gerenciar um design visualmente denso, garantindo que componentes como o player-identity (o badge de nick dos jogadores) fossem reutilizáveis e fáceis de manter.

Tratamento de Contraste Dinâmico: Um desafio específico foi a legibilidade de personagens com paletas de cores saturadas (como o M. Bison). A solução envolveu modificadores de background específicos e tratamento de silhuetas para garantir contraste em telas OLED e LCD.

Glassmorphism & Neomorphism: Uso de variáveis SASS e filtros de CSS para criar profundidade nas camadas da interface sem comprometer a performance.

📱 UX Mobile & Responsividade Extrema

Viewport Dinâmica (DVH): Implementação de dvh para evitar que o conteúdo do Hero fosse "cortado" pela barra de endereços dos navegadores mobile, garantindo que os botões de ação (CTA) estivessem sempre ao alcance do polegar.

Flip Cards com Touch-Support: Ajuste fino da lógica de rotação dos cards. No mobile, implementei um sistema de toggle via JavaScript para que o usuário possa "clicar para virar" o card, simulando o efeito de hover do desktop de forma intuitiva.

🎬 Performance & Animações

AOS (Animate On Scroll): Configuração refinada para evitar o Layout Shift. Otimização dos gatilhos de animação e uso da propriedade will-change para manter a fluidez de 60fps durante o scroll.

Asset Optimization com Parcel: Utilização do bundler Parcel para minificação de código e processamento de imagens (Sharp), reduzindo drasticamente o tempo de carregamento inicial.

🌐 SEO & Social Share (Open Graph)

Metadata Profissional: Configuração completa de tags og:image e og:url com links absolutos e controle de cache (?v=1), garantindo que o link do site exiba previews perfeitos no WhatsApp, Instagram e Twitter.

PWA Readiness: Implementação de webmanifest e ícones em múltiplas resoluções para que o site possa ser adicionado à tela de início do Android/iOS com o ícone oficial.

🛠️ Tecnologias Utilizadas

HTML5 Semântico

SASS (Arquitetura BEM, Mixins, Variáveis)

JavaScript Vanilla (Lógica do Timer, Toggle de Cards e Integração de APIs de Animação)

Parcel (Bundler, Minificação e Otimização de Imagens)

AOS.js (Scroll Animations)

Font Awesome (Iconografia)

📖 Aprendizados

Este projeto marcou minha consolidação no ecossistema moderno de desenvolvimento Front-end. Aplicar rigor técnico em interfaces fluidas, saindo de uma base sólida em C# e SQL (Oracle), me permitiu entender como a performance do lado do cliente e a arquitetura CSS são cruciais para o sucesso de um produto digital em grande escala.

👨‍💻 Autor

Gustavo Inglez



LinkedIn)

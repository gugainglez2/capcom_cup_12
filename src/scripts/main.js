AOS.init({
    duration: 1000,
    offset: 300,
    once: true,
    easing: 'ease-in-out-cubic'
});

// Função para ajustar os delays dinamicamente
function adjustAOSDelay() {
    const cards = document.querySelectorAll('.qualify__card');
    const isDesktop = window.innerWidth > 960;

    cards.forEach((card, index) => {
        if (isDesktop) {
            // Em telas grandes, aplica delay escalonado (100, 300, 500...)
            card.setAttribute('data-aos-delay', (index * 200) + 100);
        } else {
            // Em telas pequenas, remove o delay para a animação ser imediata
            card.setAttribute('data-aos-delay', '0');
        }
    });

    // Recalcula os estados do AOS após mudar os atributos
    AOS.refresh(); 
}

// Executa ao carregar a página
window.addEventListener('load', adjustAOSDelay);

// Executa sempre que a tela mudar de tamanho
window.addEventListener('resize', adjustAOSDelay);


// Capcom Cup 12 - Tóquio, Japão
// Início: 11 de Março às 10:00 (Japão) -> 10 de Março às 22:00 (Brasília)
const dataDoEvento = new Date("Mar 10, 2026 22:00:00"); 
const dataFimEvento = new Date("Mar 15, 2026 10:00:00"); // Final do torneio no fuso BRT

const timeStampDoEvento = dataDoEvento.getTime();
const timeStampFim = dataFimEvento.getTime();

function atualizaContador() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();
    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;
    const distanciaParaAcabar = timeStampFim - timeStampAtual;

    const contador = document.getElementById("contador");
    if (!contador) return;

    if (distanciaAteOEvento > 0) {
        const diaEmMs = 1000 * 60 * 60 * 24;
        const horaEmMs = 1000 * 60 * 60;
        const minutoEmMs = 1000 * 60;

        const d = Math.floor(distanciaAteOEvento / diaEmMs);
        const h = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
        const m = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);
        const s = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);

        contador.innerHTML = `${d}d ${h}h ${m}m ${s}s`;
        
    } else if (distanciaParaAcabar > 0) {
        contador.innerHTML = "O CAMPEONATO COMEÇOU! ASSISTA AO VIVO!";
        contador.style.color = "#c02a57"; 
        contador.style.textShadow = "0 0 10px #c02a57";
    } else {
        clearInterval(contaAsHoras);
        contador.innerHTML = "EVENTO ENCERRADO!";
        contador.style.color = "#fff";
    }
}

// Chama a função imediatamente para evitar o delay inicial do setInterval
atualizaContador();

// Configura o intervalo
const contaAsHoras = setInterval(atualizaContador, 1000);

//controla os flip-cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.flip-card, .qualify__card');

    cards.forEach(card => {
        card.addEventListener('touchend', function(e) {
            e.preventDefault(); 
            
            const isactive = this.classList.contains('is-active');
            
            cards.forEach(c => c.classList.remove('is-active'));

            if (!isactive) {
                this.classList.add('is-active');
            }
        }, { passive: false });
    });

    document.addEventListener('touchstart', (e) => {
        if (!e.target.closest('.flip-card, .qualify__card')) {
            cards.forEach(card => card.classList.remove('is-active'));
        }
    }, { passive: true });
});


// lógica centraliza grid
let lastWidth = window.innerWidth; // Armazena a largura inicial

const centerSlider = () => {
    const slider = document.querySelector('.japanese__slider');
    const grid = document.querySelector('.japanese__grid');
    
    if (slider && grid) {
        const scrollCenter = (grid.offsetWidth - slider.offsetWidth) / 2;
        slider.scrollTo({
            left: scrollCenter,
            behavior: 'smooth'
        });
    }
};

window.addEventListener('load', centerSlider);

let resizeTimer;
window.addEventListener('resize', () => {
    const currentWidth = window.innerWidth;

    if (currentWidth !== lastWidth) {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            centerSlider();
            lastWidth = currentWidth;
        }, 250);
    }
});

window.addEventListener('orientationchange', () => {
    setTimeout(centerSlider, 300);
});
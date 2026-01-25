// 1. Unificando a inicialização do AOS e dos atributos
function initCustomAOS() {
    const isLandscape = window.innerHeight < 600 && window.innerWidth > window.innerHeight;
    const isDesktop = window.innerWidth > 960;
    
    const cards = document.querySelectorAll('.qualify__card');
    cards.forEach((card, index) => {
        if (isDesktop) {
            card.setAttribute('data-aos-delay', (index * 200) + 100);
            card.setAttribute('data-aos-offset', '300'); // Offset maior no desktop
        } else {
            card.setAttribute('data-aos-delay', '1');
            card.setAttribute('data-aos-offset', '1'); // Offset menor no mobile/landscape
        }
        card.setAttribute('data-aos-anchor-placement', 'top-bottom');
    });

    AOS.init({
        duration: 1000,
        once: true,
        easing: 'ease-in-out-cubic',
        anchorPlacement: isLandscape ? 'top-bottom' : 'top-center'
    });
}

// 2. Lógica do Contador (Mantenha como está, mas certifique-se de que a data é futura)
const dataDoEvento = new Date("Mar 10, 2026 22:00:00"); 
const dataFimEvento = new Date("Mar 15, 2026 10:00:00");
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
    } else {
        contador.innerHTML = "EVENTO ENCERRADO!";
    }
}

// 3. Inicialização Única ao carregar o DOM
document.addEventListener('DOMContentLoaded', () => {
    initCustomAOS();     // Inicia o AOS e os cards
    atualizaContador();  // Inicia o contador imediatamente
    setInterval(atualizaContador, 1000); // Mantém o contador rodando
});

// 4. Resize (Otimizado)
window.addEventListener('resize', () => {
    AOS.refresh();
});


//controla os flip-cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.flip-card, .qualify__card');

    cards.forEach(card => {
        card.addEventListener('touchend', function(e) {
            if (e.target.closest('a')) {
                return; 
            }
            
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
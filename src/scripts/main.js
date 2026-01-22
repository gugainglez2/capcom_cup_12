AOS.init({
    duration: 700, // Aumenta a duração para 1.2 segundos (mais suave)
    offset: 100,    // A animação só começa quando o elemento estiver 300px dentro da tela
    once: true,     // Anima apenas uma vez ao descer o scroll
    easing: 'ease-in-out-cubic' // Curva de aceleração mais profissional
});

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

        // Formatação padronizada para evitar trepidação no texto
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

// Executa ao carregar
window.addEventListener('load', centerSlider);

// Executa se mudar o tamanho da janela (importante para portfólio responsivo)
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(centerSlider, 250);
});
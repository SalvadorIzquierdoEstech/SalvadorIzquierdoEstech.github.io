// JS PARA EL FONDO DINAMICO

document.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop / docHeight;


    const startColor = { r: 135, g: 206, b: 235 };
    const endColor = { r: 29, g: 51, b: 74 };

    // Interpola entre los colores inicial y final
    const r = Math.floor(startColor.r + (endColor.r - startColor.r) * scrollFraction);
    const g = Math.floor(startColor.g + (endColor.g - startColor.g) * scrollFraction);
    const b = Math.floor(startColor.b + (endColor.b - startColor.b) * scrollFraction);

    // Aplica el color al fondo
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

anime({
    targets: '.static-overlay',
    translateX: [-20, 20],
    translateY: [-20, 20],
    scale: [1, 1.05],
    rotate: [-1, 1],
    easing: 'easeInOutSine',
    duration: 200,
    direction: 'alternate',
    loop: true,
});


// JS CARRUSEL DE PROYECTOS

let items = document.querySelectorAll('.slider .proyecto');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let active = 1;
function loadShow() {
    let stt = 0;
    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;
    for (var i = active + 1; i < items.length; i++) {
        stt++;
        items[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
    stt = 0;
    for (var i = active - 1; i >= 0; i--) {
        stt++;
        items[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
}
loadShow();
next.onclick = function () {
    active = active + 1 < items.length ? active + 1 : active;
    loadShow();
}
prev.onclick = function () {
    active = active - 1 >= 0 ? active - 1 : active;
    loadShow();
}
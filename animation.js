// JS PARA EL FONDO DINÁMICO
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

//JS PARA EL BOTON DE CONTACTO ( SCROLL AL FONDO )

// Obtén el enlace y la sección de destino
const scrollLink = document.getElementById('scrollLink');
const fondoSection = document.getElementById('fondo');

// Añade el evento de clic al enlace
scrollLink.addEventListener('click', function(event) {
    event.preventDefault(); // Evita que el enlace haga el comportamiento predeterminado (recargar la página)
    
    // Usa el método scrollIntoView para hacer el scroll hacia la sección con un efecto suave
    fondoSection.scrollIntoView({
        behavior: 'smooth',  // Define que el scroll será suave
        block: 'start'       // Asegura que el scroll se alinee con el inicio de la sección
    });
});


// JS PARA EL APARTADO DE "SOBRE MI"

//hace que al clicar los diferentes enlaces muestre uno u otro contenido
document.addEventListener('DOMContentLoaded', function () {
    const enlaces = document.querySelectorAll('.indiceDatos a');
    const bloques = document.querySelectorAll('.datos > div');


    bloques[0].style.display = 'block';  // Muestra el primer bloque por defecto
    bloques[0].style.display = 'flex';   // Aplica flexbox al primer bloque
    bloques[0].style.flexDirection = 'column'; // Dirección de la columna
    enlaces[0].classList.add('activo');

    enlaces.forEach((enlace) => {
        enlace.addEventListener('click', function (e) {
            e.preventDefault(); // Evita el comportamiento por defecto del enlace

            // Ocultar todos los bloques
            bloques.forEach((bloque) => {
                bloque.style.display = 'none';
            });

            // Eliminar la clase 'activo' de todos los enlaces
            enlaces.forEach((enlace) => {
                enlace.classList.remove('activo');
            });

            // Agregar la clase 'activo' al enlace clicado
            enlace.classList.add('activo');

            // Obtener el atributo data-target del enlace y mostrar el bloque correspondiente
            const bloqueActivo = document.querySelector(`.${enlace.dataset.target}`);

            // Muestra el bloque correspondiente
            if (bloqueActivo) {
                bloqueActivo.style.display = 'flex';
                bloqueActivo.style.flexDirection = 'column'; // Aplica flex-direction column
                bloqueActivo.style.justifyContent = 'center'; // Centra verticalmente
                bloqueActivo.style.alignItems = 'center'; // Centra horizontalmente

            }
        });
    });
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

    // Animación para los proyectos a la derecha
    for (let i = active + 1; i < items.length; i++) {
        stt++;
        // Ajuste de transformaciones con el nuevo tamaño
        items[i].style.transform = `translateX(${20 * stt - stt}vw) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
        
    }

    stt = 0;

    // Animación para los proyectos a la izquierda
    for (let i = active - 1; i >= 0; i--) {
        stt++;
        // Ajuste de transformaciones con el nuevo tamaño
        items[i].style.transform = `translateX(${-20 * stt}vw) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
        
    }
}

// Inicializa el carrusel
loadShow();

// Función para cambiar al siguiente proyecto
next.onclick = function () {
    active = (active + 1 < items.length) ? active + 1 : active;
    loadShow();
}

// Función para cambiar al proyecto anterior
prev.onclick = function () {
    active = (active - 1 >= 0) ? active - 1 : active;
    loadShow();
}

// Inicializa el carrusel
loadShow();

// Función para cambiar al siguiente proyecto
next.onclick = function () {
    active = (active + 1 < items.length) ? active + 1 : active;
    loadShow();
}

// Función para cambiar al proyecto anterior
prev.onclick = function () {
    active = (active - 1 >= 0) ? active - 1 : active;
    loadShow();
}


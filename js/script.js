// Punto 5
function cambiarFondoAGrisClaro(){
    let form = document.getElementsByClassName('subscription-form');
    form[0].style.backgroundColor = '#3f3f3f';
}

function restaurarColor(){
    let form = document.getElementsByClassName('subscription-form');
    form[0].style.backgroundColor = '#111';
}

// Punto 6

let currentIndex = 0;

function moveCarousel(direction) {
    const imagenes = document.querySelectorAll('.carrusel-imagenes img');
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = imagenes.length - 1;
    } else if (currentIndex >= imagenes.length) {
        currentIndex = 0;
    }

    imagenes.forEach((img, index) => {
        if (index === currentIndex) {
            img.style.display = 'block';
        } else {
            img.style.display = 'none';
        }
    });
}

// Inicialización del carrusel
document.addEventListener('DOMContentLoaded', () => {
    const imagenes = document.querySelectorAll('.carrusel-imagenes img');
    imagenes.forEach((img, index) => {
        if (index === 0) {
            img.style.display = 'block';
        } else {
            img.style.display = 'none';
        }
    });
});


// Punto 7


function toggleImageSize(img) {
    const mainImage = document.querySelector('.main-image');
    const tempSrc = mainImage.src;
    mainImage.src = img.src;
    img.src = tempSrc;
}
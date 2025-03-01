// Punto 1

document.addEventListener("DOMContentLoaded", () => {
    const productElements = document.querySelectorAll(".product");
    
    const products = Array.from(productElements).map(product => {
        return {
            name: product.querySelector("h2").textContent,
            price: parseFloat(product.querySelector(".price").textContent.replace("€", "")),
            visits: Math.floor(Math.random() * 500), // Simulación de visitas aleatorias
            imageSrc: product.querySelector("img").getAttribute("src"), // Mantiene la ruta correcta
            pageLink: `articulos/${product.querySelector("h2").textContent.toLowerCase().replace(/ /g, "_")}.html` // Espacios como "_"
        };
    });

    // Función para filtrar productos por precio
    function filterByPrice(maxPrice) {
        return products.filter(product => product.price <= maxPrice);
    }

    // Función para ordenar productos por nombre, precio o visitas
    function sortProducts(criteria, order = "asc") {
        return products.sort((a, b) => {
            if (criteria === "name") {
                return order === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
            } else if (criteria === "price") {
                return order === "asc" ? a.price - b.price : b.price - a.price;
            } else if (criteria === "visits") {
                return order === "asc" ? a.visits - b.visits : b.visits - a.visits;
            }
        });
    }

    // Función para mostrar los productos en la página
    function displayProducts(products) {
        const productList = document.querySelector('.product-list');
        productList.innerHTML = ''; // Limpiar la lista de productos
        products.forEach(product => {
            const productElement = document.createElement('article');
            productElement.classList.add('product');
            productElement.innerHTML = `
                <a href="${product.pageLink}"><img src="${product.imageSrc}" alt="${product.name}"></a>
                <h2>${product.name}</h2>
                <p class="price">${product.price}€</p>
                <p class="description">Descripción del producto</p>
                <a href="${product.pageLink}" class="buy-button">Comprar</a>
            `;
            productList.appendChild(productElement);
        });
    }

    // Event Listeners para los botones
    document.getElementById('filter-price-btn').addEventListener('click', () => {
        const filteredProducts = filterByPrice(20);
        console.log('Productos con precio menor o igual a 20€:', filteredProducts);
        displayProducts(filteredProducts);
    });

    document.getElementById('sort-name-btn').addEventListener('click', () => {
        const sortedProducts = sortProducts("name", "asc");
        console.log('Productos ordenados por nombre (ascendente):', sortedProducts);
        displayProducts(sortedProducts);
    });

    document.getElementById('sort-price-btn').addEventListener('click', () => {
        const sortedProducts = sortProducts("price", "desc");
        console.log('Productos ordenados por precio (descendente):', sortedProducts);
        displayProducts(sortedProducts);
    });

    document.getElementById('sort-visits-btn').addEventListener('click', () => {
        const sortedProducts = sortProducts("visits", "asc");
        console.log('Productos ordenados por visitas (ascendente):', sortedProducts);
        displayProducts(sortedProducts);
    });
});


// Punto 2

function toggleForm() {
    const form = document.getElementById('contactForm');

    if (form.style.visibility === 'hidden' || form.style.visibility === '') {
        form.style.visibility = 'visible';
        form.style.height = 'auto';
        form.style.opacity = '1';
    } else {
        form.style.visibility = 'hidden';
        form.style.height = '0';
        form.style.opacity = '0';
    }
}


// Punto 3
function toggleTheme() {
    const body = document.body;
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
    } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
    }
}

// Aplicar el tema oscuro por defecto al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add('dark-theme');
});
// Punto 4

function toggleComments() {
    const commentsSection = document.getElementById('commentsSection');
    if (commentsSection.style.display === 'none' || commentsSection.style.display === '') {
        commentsSection.style.display = 'block';
    } else {
        commentsSection.style.display = 'none';
    }
}

function addComment(event) {
    event.preventDefault();
    const commentInput = document.getElementById('comment');
    const commentText = commentInput.value;
    const commentsList = document.getElementById('commentsList');

    const newComment = document.createElement('li');
    newComment.textContent = commentText;
    commentsList.appendChild(newComment);

    commentInput.value = '';
}

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


// Punto 8
function validateForm(event) {
    event.preventDefault(); // Evita el envío del formulario para validarlo primero

    const email = document.getElementById('email').value;
    const preferencias = document.getElementById('preferencias').value;
    const intereses = document.querySelectorAll('input[name="intereses"]:checked');

    // Validar correo electrónico
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Por favor, introduce un correo electrónico válido.');
        return false;
    }

    // Validar preferencias
    if (preferencias === "") {
        alert('Por favor, selecciona una preferencia.');
        return false;
    }

    // Validar intereses
    if (intereses.length === 0) {
        alert('Por favor, selecciona al menos un interés.');
        return false;
    }

    // Si todas las validaciones pasan, envía el formulario
    alert('Formulario enviado correctamente.');
    return true;
}
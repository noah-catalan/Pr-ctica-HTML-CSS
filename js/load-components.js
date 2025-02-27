document.addEventListener("DOMContentLoaded", () => {
    loadComponent("../paginas/header.html", "header-container");
    loadComponent("../paginas/footer.html", "footer-container");
});

function loadComponent(url, containerId) {
    fetch(url)
        .then(response => response.text())
        .then(data => document.getElementById(containerId).innerHTML = data)
        .catch(error => console.error(`Error cargando ${url}:`, error), alert("Error cargando el header y/o el footer"));
}

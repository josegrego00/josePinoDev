// Animación simple al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    // Agregar clase 'loaded' al body para activar transiciones
    document.body.classList.add('loaded');
    
    // Animación para los títulos de sección
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach((title, index) => {
        setTimeout(() => {
            title.style.opacity = '1';
            title.style.transform = 'translateY(0)';
        }, 100 * index);
    });
    
    // Animación para las tarjetas
    const cards = document.querySelectorAll('.card, .study-item');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 150 * index);
    });
});

// Efecto smooth scroll para los enlaces
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
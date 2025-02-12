// scripts.js
// Puedes agregar interactividad aquí si lo deseas, como un carrusel de promociones o un formulario de contacto.
document.addEventListener('DOMContentLoaded', function() {
    console.log('Página cargada y lista para usar.');
});


function agrandarImagen(imagen) {
    // Cierra todas las imágenes agrandadas primero
    const imagenesAgrandadas = document.querySelectorAll('.agrandada');
    imagenesAgrandadas.forEach(img => {
        if (img !== imagen) {
            img.classList.remove('agrandada');
        }
    });

    // Alterna la clase 'agrandada' en la imagen clicada
    imagen.classList.toggle('agrandada');
}

// Cierra la imagen agrandada al hacer clic fuera de ella
document.addEventListener('click', function(event) {
    const imagenesAgrandadas = document.querySelectorAll('.agrandada');
    if (imagenesAgrandadas.length > 0 && !event.target.classList.contains('promo-image')) {
        imagenesAgrandadas.forEach(img => {
            img.classList.remove('agrandada');
        });
    }
});

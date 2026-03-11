
function saludar() {
alert("¡Hola desde JavaScript!");
}

function irAOtraPagina() {
window.location.href = "Perfil.html";
 }

window.addEventListener('scroll', function() {
var navbar = document.getElementById('navbar');
if (window.scrollY > 100) {
navbar.classList.add('scrolled');
} else {
navbar.classList.remove('scrolled');
}
});

const filters = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.tarjeta-Proyecto');

filters.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-filter');

    cards.forEach(card => {
      // Si el filtro es "all", mostramos todas. 
      // Si no, comparamos la categoría del botón con la de la tarjeta.
      if (category === 'all' || card.getAttribute('data-category') === category) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});



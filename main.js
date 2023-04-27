// Obtenemos el botón del menú y el menú en sí
const menuButton = document.getElementById("menu-button");
const menu = document.getElementById("menu");

// Agregamos un evento "click" al botón del menú
menuButton.addEventListener("click", function(event) {
  // Prevenimos que la acción por defecto del botón ocurra
  event.preventDefault();
  
  // Alternamos la clase "active" del menú para mostrarlo o esconderlo
  menu.classList.toggle("active");
});

// Cerramos el menú si se hace clic fuera de él
document.addEventListener("click", function(event) {
  if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
    menu.classList.remove("active");
  }
});

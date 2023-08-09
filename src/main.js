function showContainer(containerNumber) {
    // Ocultar todos los contenedores
    const containers = document.querySelectorAll('.projects section[class^="contenedor-"]');
    containers.forEach(container => container.classList.remove('show'));
  
    // Mostrar el contenedor seleccionado
    const selectedContainer = document.querySelector(`.contenedor-${containerNumber}`);
    selectedContainer.classList.add('show');
  };

  window.addEventListener("scroll",()=>{
    var navBar= document.querySelector(".container");
    navBar.classList.toggle("sticky",window.scrollY>0)
  })

  document.addEventListener("DOMContentLoaded", function () {
    const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
    const navMenu = document.querySelector(".nav-main ul");
  
    mobileMenuBtn.addEventListener("click", function () {
      navMenu.classList.toggle("active");
    });
  });
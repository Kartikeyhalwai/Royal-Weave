 const openMenu = document.getElementById("openMenu");
  const closeMenu = document.getElementById("closeMenu");
  const navMenu = document.getElementById("navMenu");

  openMenu.addEventListener("click", () => {
    navMenu.classList.add("active");
    document.body.classList.add("menu-open");   // fix for background scrolls when menu open
  });

  closeMenu.addEventListener("click", () => {
    navMenu.classList.remove("active");
    document.body.classList.remove("menu-open");

    // fix for menu doesnt close after clicking a link 
    
  });

  const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    document.body.classList.remove('menu-open');
  });
});

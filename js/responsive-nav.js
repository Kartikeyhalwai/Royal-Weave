 const openMenu = document.getElementById("openMenu");
  const closeMenu = document.getElementById("closeMenu");
  const navMenu = document.getElementById("navMenu");

  openMenu.addEventListener("click", () => {
    navMenu.classList.add("active");
  });

  closeMenu.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
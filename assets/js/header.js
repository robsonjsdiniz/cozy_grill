document.addEventListener("DOMContentLoaded", () => {
  const header = document.createElement("header");

  header.innerHTML = `
    <div class="container header-container">
      <div class="logo">
        <div class="logo-text">
          Cozy Grill Bar
          <span>Altas Horas</span>
        </div>
      </div>

      <nav class="main-nav">
        <button class="mobile-menu-btn" aria-label="Open menu">
          <i class="fas fa-bars"></i>
        </button>

        <ul class="nav-menu">
          <li><a href="index.html">Home</a></li>
          <li><a href="menu.html">Menu</a></li>
          <li><a href="location.html">Location</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </nav>
    </div>
  `;

  document.body.prepend(header);

  /* MENU MOBILE */
  const btn = header.querySelector(".mobile-menu-btn");
  const menu = header.querySelector(".nav-menu");

  btn.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  // Fecha o menu ao clicar em um link (mobile)
  menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
    });
  });
});


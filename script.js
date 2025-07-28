document.addEventListener("DOMContentLoaded", () => {
  // --- Lógica del Modal de Proyectos ---
  const projectItems = document.querySelectorAll(".project-cell");
  const projectModalOverlay = document.getElementById("project-modal-overlay");
  const modalImage = document.getElementById("modal-image");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");
  const projectCloseButton = document.getElementById("project-close-button");

  projectItems.forEach((item) => {
    item.addEventListener("click", () => {
      const title = item.getAttribute("data-title");
      const image = item.getAttribute("data-image");
      const description = item.getAttribute("data-description");

      modalTitle.textContent = title;
      modalImage.src = image;
      modalDescription.textContent = description;
      projectModalOverlay.style.display = "flex";
    });
  });

  const closeProjectModal = () => {
    projectModalOverlay.style.display = "none";
  };
  projectCloseButton.addEventListener("click", closeProjectModal);
  projectModalOverlay.addEventListener("click", (event) => {
    if (event.target === projectModalOverlay) closeProjectModal();
  });

  // --- NUEVA Lógica del Modal de Servicios ---
  const servicesButton = document.getElementById("services-button");
  const servicesModalOverlay = document.getElementById(
    "services-modal-overlay",
  );
  const servicesCloseButton = document.getElementById("services-close-button");

  const openServicesModal = () => {
    servicesModalOverlay.style.display = "flex";
  };
  const closeServicesModal = () => {
    servicesModalOverlay.style.display = "none";
  };

  servicesButton.addEventListener("click", openServicesModal);
  servicesCloseButton.addEventListener("click", closeServicesModal);
  servicesModalOverlay.addEventListener("click", (event) => {
    if (event.target === servicesModalOverlay) closeServicesModal();
  });

  // --- Lógica de Idiomas (sin cambios) ---
  const langENToggle = document.getElementById("lang-en");
  const langESToggle = document.getElementById("lang-es");
  const translatableElements = document.querySelectorAll("[data-es]");
  translatableElements.forEach((el) => {
    el.setAttribute(
      "data-en",
      el.getAttribute("data-es") ? el.textContent.trim() : "",
    );
  });
  const setLanguage = (lang) => {
    translatableElements.forEach((el) => {
      const text = el.getAttribute(`data-${lang}`);
      if (text) el.textContent = text;
    });
    if (lang === "es") {
      langESToggle.classList.add("active");
      langENToggle.classList.remove("active");
    } else {
      langENToggle.classList.add("active");
      langESToggle.classList.remove("active");
    }
  };
  langENToggle.addEventListener("click", () => setLanguage("en"));
  langESToggle.addEventListener("click", () => setLanguage("es"));

  // --- Lógica del Interruptor de Tema (sin cambios) ---
  const themeToggleButton = document.getElementById("theme-toggle");
  const body = document.body;
  const applyTheme = (theme) => {
    if (theme === "dark") {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  };
  themeToggleButton.addEventListener("click", () => {
    const currentTheme = body.classList.contains("dark-mode")
      ? "light"
      : "dark";
    localStorage.setItem("theme", currentTheme);
    applyTheme(currentTheme);
  });
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    applyTheme(savedTheme);
  } // Se mantiene el default de dark-mode del body si no hay nada guardado
});

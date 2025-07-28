document.addEventListener("DOMContentLoaded", () => {
  // --- Lógica del Modal de Proyectos ---
  const projectItems = document.querySelectorAll(".project-item");
  const projectModalOverlay = document.getElementById("project-modal-overlay");
  const modalImage = document.getElementById("modal-image");
  const modalTitle = document.getElementById("modal-title");
  const modalDescriptionProject = document.getElementById(
    "modal-description-project",
  );
  const projectCloseButton = document.getElementById("project-close-button");

  projectItems.forEach((item) => {
    item.addEventListener("click", () => {
      modalTitle.textContent = item.getAttribute("data-title");
      modalImage.src = item.getAttribute("data-image");

      // Simulación de descripción para el modal de proyecto (puedes añadirla como data-attribute si quieres)
      modalDescriptionProject.textContent = `Este es un proyecto sobre ${item.getAttribute("data-title")}.`;

      projectModalOverlay.style.display = "flex";
    });
  });

  const closeProjectModal = () => (projectModalOverlay.style.display = "none");
  projectCloseButton.addEventListener("click", closeProjectModal);
  projectModalOverlay.addEventListener("click", (e) => {
    if (e.target === projectModalOverlay) closeProjectModal();
  });

  // --- Lógica del Modal de Servicios ---
  const servicesButton = document.getElementById("services-button");
  const servicesModalOverlay = document.getElementById(
    "services-modal-overlay",
  );
  const servicesCloseButton = document.getElementById("services-close-button");

  servicesButton.addEventListener(
    "click",
    () => (servicesModalOverlay.style.display = "flex"),
  );
  const closeServicesModal = () =>
    (servicesModalOverlay.style.display = "none");
  servicesCloseButton.addEventListener("click", closeServicesModal);
  servicesModalOverlay.addEventListener("click", (e) => {
    if (e.target === servicesModalOverlay) closeServicesModal();
  });

  // --- Lógica de Idiomas y Tema (sin cambios) ---
  const langENToggle = document.getElementById("lang-en");
  const langESToggle = document.getElementById("lang-es");
  const translatableElements = document.querySelectorAll("[data-es]");
  translatableElements.forEach((el) => {
    el.setAttribute("data-en", el.textContent.trim());
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
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (savedTheme) {
    applyTheme(savedTheme);
  } else if (prefersDark) {
    applyTheme("dark");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // --- Lógica del Modal de Proyectos (sin cambios) ---
  const projectItems = document.querySelectorAll(".project-item");
  const modalOverlay = document.getElementById("modal-overlay");
  const modalImage = document.getElementById("modal-image");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");
  const closeModalButton = document.getElementById("close-button");

  projectItems.forEach((item) => {
    item.addEventListener("click", () => {
      const title = item.getAttribute("data-title");
      const image = item.getAttribute("data-image");
      const description = item.getAttribute("data-description");

      modalTitle.textContent = title;
      modalImage.src = image;
      modalDescription.textContent = description;
      modalOverlay.style.display = "flex";
    });
  });

  const closeModal = () => {
    modalOverlay.style.display = "none";
  };
  closeModalButton.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", (event) => {
    if (event.target === modalOverlay) closeModal();
  });

  // --- Lógica de Idiomas (sin cambios) ---
  const langENToggle = document.getElementById("lang-en");
  const langESToggle = document.getElementById("lang-es");
  const translatableElements = document.querySelectorAll("[data-es]");
  translatableElements.forEach((el) => {
    el.setAttribute("data-en", el.textContent.trim());
  });
  const setLanguage = (lang) => {
    translatableElements.forEach((el) => {
      el.textContent = el.getAttribute(`data-${lang}`);
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

  // --- NUEVA LÓGICA: Interruptor de Tema (Light/Dark Mode) ---
  const themeToggleButton = document.getElementById("theme-toggle");
  const body = document.body;

  // Función para aplicar el tema
  const applyTheme = (theme) => {
    if (theme === "dark") {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  };

  // Event listener para el botón
  themeToggleButton.addEventListener("click", () => {
    const currentTheme = body.classList.contains("dark-mode")
      ? "light"
      : "dark";
    localStorage.setItem("theme", currentTheme);
    applyTheme(currentTheme);
  });

  // Cargar el tema al iniciar la página
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedTheme) {
    applyTheme(savedTheme);
  } else if (prefersDark) {
    applyTheme("dark");
  } else {
    applyTheme("light"); // Default
  }
});

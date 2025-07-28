document.addEventListener("DOMContentLoaded", () => {
  // --- Lógica General de Modals ---
  const modalTriggers = document.querySelectorAll(".modal-trigger");
  const projectModal = document.getElementById("project-modal");
  const servicesModal = document.getElementById("services-modal");

  modalTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const modalId = trigger.getAttribute("data-modal-id");
      const modal = document.getElementById(modalId);

      if (modalId === "project-modal") {
        // Llenar datos del proyecto
        const modalImage = projectModal.querySelector("#modal-image");
        const modalTitle = projectModal.querySelector("#modal-title");
        const modalDescription =
          projectModal.querySelector("#modal-description");

        modalImage.src = trigger.getAttribute("data-image");
        modalTitle.textContent = trigger.getAttribute("data-title");
        modalDescription.textContent = trigger.getAttribute("data-description");
      }

      modal.style.display = "flex";
    });
  });

  const closeButtons = document.querySelectorAll(".close-button");
  closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      button.closest(".modal-overlay").style.display = "none";
    });
  });

  const modalOverlays = document.querySelectorAll(".modal-overlay");
  modalOverlays.forEach((overlay) => {
    overlay.addEventListener("click", (event) => {
      if (event.target === overlay) {
        overlay.style.display = "none";
      }
    });
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

  // --- Lógica de Tema (sin cambios) ---
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
  } else {
    applyTheme("light");
  }

  // --- Lógica de Pop-up de Sugerencia de Idioma (sin cambios) ---
  const suggestionPopup = document.getElementById("language-suggestion");
  const switchToESButton = document.getElementById("switch-to-es");
  switchToESButton.addEventListener("click", () => {
    setLanguage("es");
    suggestionPopup.classList.remove("show");
  });
  const browserLang = navigator.language || navigator.userLanguage;
  if (browserLang.startsWith("es")) {
    setTimeout(() => {
      if (suggestionPopup) suggestionPopup.classList.add("show");
    }, 1500);
    setTimeout(() => {
      if (suggestionPopup) suggestionPopup.classList.remove("show");
    }, 8000);
  }
});

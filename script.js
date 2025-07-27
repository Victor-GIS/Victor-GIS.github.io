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

  // --- NUEVA LÓGICA: Sistema de Idiomas ---
  const langENToggle = document.getElementById("lang-en");
  const langESToggle = document.getElementById("lang-es");
  const translatableElements = document.querySelectorAll("[data-es]");
  const suggestionPopup = document.getElementById("language-suggestion");
  const switchToESButton = document.getElementById("switch-to-es");

  // Guarda el texto original en inglés para poder volver a él
  translatableElements.forEach((el) => {
    el.setAttribute("data-en", el.textContent.trim());
  });

  const setLanguage = (lang) => {
    translatableElements.forEach((el) => {
      el.textContent = el.getAttribute(`data-${lang}`);
    });

    // Actualiza la clase 'active' en el toggle
    if (lang === "es") {
      langESToggle.classList.add("active");
      langENToggle.classList.remove("active");
    } else {
      langENToggle.classList.add("active");
      langESToggle.classList.remove("active");
    }
  };

  // Event Listeners para el toggle
  langENToggle.addEventListener("click", () => setLanguage("en"));
  langESToggle.addEventListener("click", () => setLanguage("es"));
  switchToESButton.addEventListener("click", () => {
    setLanguage("es");
    suggestionPopup.classList.remove("show");
  });

  // Lógica para el pop-up de sugerencia
  const browserLang = navigator.language || navigator.userLanguage;
  if (browserLang.startsWith("es")) {
    setTimeout(() => {
      suggestionPopup.classList.add("show");
    }, 1500); // Muestra el pop-up después de 1.5 segundos

    setTimeout(() => {
      suggestionPopup.classList.remove("show");
    }, 8000); // Lo oculta automáticamente después de 8 segundos
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // --- Base de datos de Servicios ---
  const servicesData = {
    "geo-analysis": {
      title: "Análisis Geoestadístico",
      description:
        "Utilizo técnicas estadísticas avanzadas para analizar datos espaciales, identificar patrones, predecir tendencias y generar insights valiosos para la toma de decisiones informadas en proyectos complejos.",
    },
    cartography: {
      title: "Generación de Cartografía",
      description:
        "Diseño y produzco mapas temáticos claros, precisos y estéticamente atractivos. Transformo datos crudos en representaciones cartográficas efectivas que comunican información de manera intuitiva.",
    },
    "urban-planning": {
      title: "Planeación Urbana y Regional",
      description:
        "Desarrollo estrategias y planes maestros a escala urbana y regional. Mi enfoque integra análisis socioeconómicos, ambientales y de infraestructura para promover un desarrollo sostenible y equitativo.",
    },
    "urban-design": {
      title: "Diseño Urbano-Arquitectónico",
      description:
        "Propongo soluciones de diseño que mejoran el espacio público y la calidad de vida. Mi trabajo abarca desde el diseño de complejos arquitectónicos hasta la revitalización de áreas urbanas.",
    },
    visualization: {
      title: "Visualización de Proyectos",
      description:
        "Transformo datos complejos y propuestas de diseño en visualizaciones 2D y 3D impactantes. Creo renders, diagramas y mapas interactivos que facilitan la comprensión y comunicación de los proyectos.",
    },
  };

  // --- Lógica del Modal de Proyectos ---
  const projectThumbnails = document.querySelectorAll(".project-thumbnail");
  const projectModalOverlay = document.getElementById("project-modal-overlay");
  const modalImage = document.getElementById("modal-image");
  const modalTitle = document.getElementById("modal-title");
  const modalDescriptionProject = document.getElementById(
    "modal-description-project",
  );
  const projectCloseButton = document.getElementById("project-close-button");

  projectThumbnails.forEach((thumb) => {
    thumb.addEventListener("click", (e) => {
      e.stopPropagation(); // Evita que el clic se propague al contenedor
      const item = thumb.closest(".project-item");
      const title = item.getAttribute("data-title");
      const image = item.getAttribute("data-image");
      const description = item.querySelector("p").textContent;

      modalTitle.textContent = title;
      modalImage.src = image;
      modalDescriptionProject.textContent = description;
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

  // --- Lógica del Modal de Servicios (activado por hashtags) ---
  const serviceHashtags = document.querySelectorAll(".project-hashtags span");
  const serviceModalOverlay = document.getElementById("service-modal-overlay");
  const serviceModalTitle = document.getElementById("service-modal-title");
  const serviceModalDescription = document.getElementById(
    "service-modal-description",
  );
  const serviceCloseButton = document.getElementById("service-close-button");

  serviceHashtags.forEach((tag) => {
    tag.addEventListener("click", (e) => {
      e.stopPropagation();
      const serviceKey = tag.dataset.service;
      const serviceInfo = servicesData[serviceKey];
      if (serviceInfo) {
        serviceModalTitle.textContent = serviceInfo.title;
        serviceModalDescription.textContent = serviceInfo.description;
        serviceModalOverlay.style.display = "flex";
      }
    });
  });

  const closeServiceModal = () => {
    serviceModalOverlay.style.display = "none";
  };
  serviceCloseButton.addEventListener("click", closeServiceModal);
  serviceModalOverlay.addEventListener("click", (event) => {
    if (event.target === serviceModalOverlay) closeServiceModal();
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

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
    thumb.addEventListener("click", () => {
      const item = thumb.closest(".project-item");
      modalTitle.textContent = item.getAttribute("data-title");
      modalImage.src = item.getAttribute("data-image");
      modalDescriptionProject.textContent = item.querySelector("p").textContent;
      projectModalOverlay.style.display = "flex";
    });
  });

  const closeProjectModal = () => (projectModalOverlay.style.display = "none");
  projectCloseButton.addEventListener("click", closeProjectModal);
  projectModalOverlay.addEventListener("click", (e) => {
    if (e.target === projectModalOverlay) closeProjectModal();
  });

  // --- Lógica del Modal de Servicios (con miniaturas) ---
  const servicesButton = document.getElementById("services-button");
  const servicesModalOverlay = document.getElementById(
    "services-modal-overlay",
  );
  const servicesCloseButton = document.getElementById("services-close-button");
  const servicesListContainer = document.getElementById(
    "services-list-container",
  );
  const servicesGalleryContainer = document.getElementById(
    "services-gallery-container",
  );
  const backToServicesButton = document.getElementById("back-to-services");
  const serviceGalleryTitle = document.getElementById("service-gallery-title");
  const serviceGalleryThumbnails = document.getElementById(
    "service-gallery-thumbnails",
  );

  servicesButton.addEventListener("click", () => {
    servicesListContainer.style.display = "block";
    servicesGalleryContainer.style.display = "none";
    servicesModalOverlay.style.display = "flex";
  });

  document.querySelectorAll(".services-list li").forEach((serviceItem) => {
    serviceItem.addEventListener("click", () => {
      const serviceKey = serviceItem.dataset.service;
      const service = servicesData[serviceKey];
      const matchingProjects = document.querySelectorAll(
        `.project-item[data-tags*="${serviceKey}"]`,
      );

      serviceGalleryTitle.textContent = service.title;
      serviceGalleryThumbnails.innerHTML = ""; // Limpiar galería

      matchingProjects.forEach((project) => {
        const thumb = document.createElement("img");
        thumb.src = project.dataset.image;
        thumb.alt = project.dataset.title;
        serviceGalleryThumbnails.appendChild(thumb);
      });

      servicesListContainer.style.display = "none";
      servicesGalleryContainer.style.display = "block";
    });
  });

  backToServicesButton.addEventListener("click", () => {
    servicesListContainer.style.display = "block";
    servicesGalleryContainer.style.display = "none";
  });

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

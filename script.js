document.addEventListener("DOMContentLoaded", () => {
  // --- Base de datos de Textos Bilingües con Enfoque de Negocio ---
  const servicesData = {
    "geo-analysis": {
      en: {
        title: "Market & Risk Analysis",
        description:
          "I use advanced geostatistical techniques to analyze market data, identify consumer patterns, predict trends, and generate valuable insights for strategic decision-making.",
      },
      es: {
        title: "Análisis de Mercado y Riesgo",
        description:
          "Utilizo técnicas geoestadísticas avanzadas para analizar datos de mercado, identificar patrones de consumo, predecir tendencias y generar insights para la toma de decisiones estratégicas.",
      },
    },
    cartography: {
      en: {
        title: "Strategic & Thematic Mapping",
        description:
          "I design and produce clear, precise, and aesthetically pleasing thematic maps. I transform raw data into effective cartographic reports and dashboards that intuitively communicate business insights.",
      },
      es: {
        title: "Mapeo Estratégico y Temático",
        description:
          "Diseño y produzco mapas temáticos claros y precisos. Transformo datos crudos en reportes cartográficos y dashboards efectivos que comunican insights de negocio de manera intuitiva.",
      },
    },
    "urban-planning": {
      en: {
        title: "Site Selection & Regional Strategy",
        description:
          "I develop data-driven strategies for site selection and market expansion. My approach integrates socio-economic, environmental, and infrastructure analyses to ensure optimal placement and sustainable growth.",
      },
      es: {
        title: "Selección de Sitios y Estrategia Regional",
        description:
          "Desarrollo estrategias basadas en datos para la selección de sitios y expansión de mercado. Mi enfoque integra análisis socioeconómicos, ambientales y de infraestructura para asegurar la ubicación óptima.",
      },
    },
    "urban-design": {
      en: {
        title: "Spatial Layout Optimization",
        description:
          "I propose data-informed design solutions that improve the efficiency of a physical space, from optimizing retail layouts to designing efficient logistics hubs.",
      },
      es: {
        title: "Optimización de Disposición Espacial",
        description:
          "Propongo soluciones de diseño basadas en datos que mejoran la eficiencia de un espacio físico, desde la optimización de layouts para retail hasta el diseño de centros logísticos.",
      },
    },
    visualization: {
      en: {
        title: "Data Visualization & Reporting",
        description:
          "I transform complex data into impactful 2D/3D visualizations, interactive dashboards, and compelling reports that facilitate stakeholder understanding and support investment proposals.",
      },
      es: {
        title: "Visualización de Datos y Reportería",
        description:
          "Transformo datos complejos en visualizaciones 2D/3D impactantes, dashboards interactivos y reportes que facilitan la comunicación a stakeholders y apoyan propuestas de inversión.",
      },
    },
  };

  // --- Lógica del Modal de Proyectos ---
  const projectItems = document.querySelectorAll(".project-item");
  const projectModalOverlay = document.getElementById("project-modal-overlay");
  const modalImage = document.getElementById("modal-image");
  const modalTitle = document.getElementById("modal-title");
  const modalDescriptionProject = document.getElementById(
    "modal-description-project",
  );
  const projectCloseButton = document.getElementById("project-close-button");

  // Función reutilizable para abrir el modal de proyecto
  const openProjectModal = (item) => {
    const currentLang = document
      .querySelector(".language-toggle .active")
      .id.split("-")[1];
    modalTitle.textContent = item
      .querySelector("h3")
      .getAttribute(`data-${currentLang}`);
    modalDescriptionProject.textContent = item
      .querySelector("p")
      .getAttribute(`data-${currentLang}`);
    modalImage.src = item.getAttribute("data-image");
    projectModalOverlay.style.display = "flex";
  };

  projectItems.forEach((item) => {
    // Event listener en el contenedor de información (título y descripción)
    item
      .querySelector(".project-info")
      .addEventListener("click", () => openProjectModal(item));
    // Event listener en la miniatura
    item
      .querySelector(".project-thumbnail")
      .addEventListener("click", () => openProjectModal(item));
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
  const servicesListContainer = document.getElementById(
    "services-list-container",
  );
  const serviceDetailContainer = document.getElementById(
    "service-detail-container",
  );
  const backToServicesButton = document.getElementById("back-to-services");
  const serviceDetailTitle = document.getElementById("service-detail-title");
  const serviceDetailDescription = document.getElementById(
    "service-detail-description",
  );
  const serviceGalleryThumbnails = document.getElementById(
    "service-gallery-thumbnails",
  );

  servicesButton.addEventListener("click", () => {
    servicesListContainer.style.display = "block";
    serviceDetailContainer.style.display = "none";
    servicesModalOverlay.style.display = "flex";
  });

  const closeServicesModal = () =>
    (servicesModalOverlay.style.display = "none");

  const openServiceDetail = (serviceKey) => {
    const currentLang = document
      .querySelector(".language-toggle .active")
      .id.split("-")[1];
    const service = servicesData[serviceKey][currentLang];

    serviceDetailTitle.textContent = service.title;
    serviceDetailDescription.textContent = service.description;
    serviceGalleryThumbnails.innerHTML = ""; // Limpiar galería

    const matchingProjects = document.querySelectorAll(
      `.project-item .project-hashtags span[data-service='${serviceKey}']`,
    );

    matchingProjects.forEach((tag) => {
      const projectItem = tag.closest(".project-item");
      const thumb = document.createElement("img");
      thumb.src = projectItem.dataset.image;
      thumb.alt = projectItem
        .querySelector("h3")
        .getAttribute(`data-${currentLang}`);

      // AÑADIDO: Event listener en la miniatura del servicio
      thumb.addEventListener("click", () => {
        closeServicesModal();
        // Esperar un instante para que la transición entre modales no sea brusca
        setTimeout(() => {
          openProjectModal(projectItem);
        }, 150);
      });

      serviceGalleryThumbnails.appendChild(thumb);
    });

    servicesListContainer.style.display = "none";
    serviceDetailContainer.style.display = "block";
    servicesModalOverlay.style.display = "flex";
  };

  document
    .querySelectorAll(".services-list li, .project-hashtags span")
    .forEach((item) => {
      item.addEventListener("click", (e) => {
        e.stopPropagation();
        const serviceKey = item.dataset.service;
        openServiceDetail(serviceKey);
      });
    });

  backToServicesButton.addEventListener("click", () => {
    servicesListContainer.style.display = "block";
    serviceDetailContainer.style.display = "none";
  });

  servicesCloseButton.addEventListener("click", closeServicesModal);
  servicesModalOverlay.addEventListener("click", (e) => {
    if (e.target === servicesModalOverlay) closeServicesModal();
  });

  // --- Lógica de Idioma y Tema (SIN CAMBIOS) ---
  const langENToggle = document.getElementById("lang-en");
  const langESToggle = document.getElementById("lang-es");
  const translatableElements = document.querySelectorAll("[data-es]");

  const setLanguage = (lang) => {
    translatableElements.forEach((el) => {
      const text = el.getAttribute(`data-${lang}`);
      if (text) el.innerHTML = text;
    });

    if (lang === "es") {
      langESToggle.classList.add("active");
      langENToggle.classList.remove("active");
    } else {
      langENToggle.classList.add("active");
      langESToggle.classList.remove("active");
    }
    localStorage.setItem("language", lang);
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

  const savedLang = localStorage.getItem("language") || "es";
  setLanguage(savedLang);
});

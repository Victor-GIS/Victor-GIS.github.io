document.addEventListener("DOMContentLoaded", () => {
  // --- Base de datos de Textos Bilingües ---
  const servicesData = {
    "geo-analysis": {
      en: {
        title: "Geostatistical Analysis",
        description:
          "I use advanced statistical techniques to analyze spatial data, identify patterns, predict trends, and generate valuable insights for informed decision-making in complex projects.",
      },
      es: {
        title: "Análisis Geoestadístico",
        description:
          "Utilizo técnicas estadísticas avanzadas para analizar datos espaciales, identificar patrones, predecir tendencias y generar insights valiosos para la toma de decisiones informadas en proyectos complejos.",
      },
    },
    cartography: {
      en: {
        title: "Cartography Production",
        description:
          "I design and produce clear, precise, and aesthetically pleasing thematic maps. I transform raw data into effective cartographic representations that intuitively communicate information.",
      },
      es: {
        title: "Generación de Cartografía",
        description:
          "Diseño y produzco mapas temáticos claros, precisos y estéticamente atractivos. Transformo datos crudos en representaciones cartográficas efectivas que comunican información de manera intuitiva.",
      },
    },
    "urban-planning": {
      en: {
        title: "Urban & Regional Planning",
        description:
          "I develop strategies and master plans at urban and regional scales. My approach integrates socio-economic, environmental, and infrastructure analyses to promote sustainable and equitable development.",
      },
      es: {
        title: "Planeación Urbana y Regional",
        description:
          "Desarrollo estrategias y planes maestros a escala urbana y regional. Mi enfoque integra análisis socioeconómicos, ambientales y de infraestructura para promover un desarrollo sostenible y equitativo.",
      },
    },
    "urban-design": {
      en: {
        title: "Urban-Architectural Design",
        description:
          "I propose design solutions that improve public space and quality of life. My work ranges from designing architectural complexes to revitalizing urban areas.",
      },
      es: {
        title: "Diseño Urbano-Arquitectónico",
        description:
          "Propongo soluciones de diseño que mejoran el espacio público y la calidad de vida. Mi trabajo abarca desde el diseño de complejos arquitectónicos hasta la revitalización de áreas urbanas.",
      },
    },
    visualization: {
      en: {
        title: "Project Visualization",
        description:
          "I transform complex data and design proposals into impactful 2D and 3D visualizations. I create renders, diagrams, and interactive maps that facilitate the understanding and communication of projects.",
      },
      es: {
        title: "Visualización de Proyectos",
        description:
          "Transformo datos complejos y propuestas de diseño en visualizaciones 2D y 3D impactantes. Creo renders, diagramas y mapas interactivos que facilitan la comprensión y comunicación de los proyectos.",
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

  projectItems.forEach((item) => {
    // Event listener on the thumbnail
    const thumb = item.querySelector(".project-thumbnail");
    thumb.addEventListener("click", () => {
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

  const openServiceDetail = (serviceKey) => {
    const currentLang = document
      .querySelector(".language-toggle .active")
      .id.split("-")[1];
    const service = servicesData[serviceKey][currentLang];

    serviceDetailTitle.textContent = service.title;
    serviceDetailDescription.textContent = service.description;
    serviceGalleryThumbnails.innerHTML = ""; // Clear gallery

    const matchingProjects = document.querySelectorAll(
      `.project-item .project-hashtags span[data-service='${serviceKey}']`,
    );
    matchingProjects.forEach((tag) => {
      const project = tag.closest(".project-item");
      const thumb = document.createElement("img");
      thumb.src = project.dataset.image;
      thumb.alt = project
        .querySelector("h3")
        .getAttribute(`data-${currentLang}`);
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

  const closeServicesModal = () =>
    (servicesModalOverlay.style.display = "none");
  servicesCloseButton.addEventListener("click", closeServicesModal);
  servicesModalOverlay.addEventListener("click", (e) => {
    if (e.target === servicesModalOverlay) closeServicesModal();
  });

  // --- Lógica de Idioma y Tema ---
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

  // Apply saved or preferred theme and language on load
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

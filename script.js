document.addEventListener("DOMContentLoaded", function () {
  const langButtons = document.querySelectorAll(".lang-btn");

  // Objeto con todas las traducciones
  const translations = {
    en: {
      main_title: "Victor R.",
      main_subtitle: "GIS Analyst & Urbanist",
      // Texto de resumen actualizado
      summary_text:
        "I transform complex spatial data into clear narratives and actionable insights. My work lies at the intersection of data analysis, urban planning, and design to solve real-world challenges.",
      // Nueva sección
      development_title: "In Development:",
      project1_title: "Urban Tree Canopy Analysis",
      project1_desc:
        "Analysis of the urban tree canopy in Zapopan, Mexico, to identify priority areas for reforestation and improve environmental quality.",
      project2_title: "Mobility and Public Space Project",
      project2_desc:
        "Design of a comprehensive mobility and public space project for the historic center of an intermediate city, focusing on pedestrian-friendly infrastructure.",
      project3_title: "Socio-Environmental Impact Assessment",
      project3_desc:
        "Participation in the socio-environmental impact assessment for a major infrastructure project, analyzing spatial variables and community impact.",
    },
    es: {
      main_title: "Victor R.",
      main_subtitle: "Analista GIS y Urbanista",
      // Traducción del nuevo resumen
      summary_text:
        "Transformo datos espaciales complejos en narrativas claras e ideas accionables. Mi trabajo se encuentra en la intersección del análisis de datos, el urbanismo y el diseño para resolver desafíos del mundo real.",
      // Nueva sección traducida
      development_title: "En Desarrollo:",
      project1_title: "Análisis del Dosel Arbóreo Urbano",
      project1_desc:
        "Análisis del dosel arbóreo urbano en Zapopan, México, para identificar áreas prioritarias de reforestación y mejorar la calidad ambiental.",
      project2_title: "Proyecto de Movilidad y Espacio Público",
      project2_desc:
        "Diseño de un proyecto integral de movilidad y espacio público para el centro histórico de una ciudad intermedia, enfocado en infraestructura peatonal.",
      project3_title: "Evaluación de Impacto Socioambiental",
      project3_desc:
        "Participación en la evaluación de impacto socioambiental para un gran proyecto de infraestructura, analizando variables espaciales e impacto comunitario.",
    },
  };

  // Función para cambiar el idioma
  function switchLanguage(lang) {
    document.querySelectorAll("[data-key]").forEach((element) => {
      const key = element.getAttribute("data-key");
      if (translations[lang] && translations[lang][key]) {
        element.innerHTML = translations[lang][key];
      }
    });
    // Actualiza el idioma en el atributo lang del HTML
    document.documentElement.lang = lang;

    // Gestiona la clase 'active' en los botones
    langButtons.forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });
  }

  // Event listeners para los botones de idioma
  langButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const lang = button.getAttribute("data-lang");
      switchLanguage(lang);
    });
  });

  // Establece el idioma inicial por defecto (inglés)
  switchLanguage("en");
});

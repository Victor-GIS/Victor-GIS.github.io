document.addEventListener("DOMContentLoaded", function () {
  // Botón Hire Me
  document.getElementById("hire-btn").addEventListener("click", function () {
    window.location.href = "mailto:victor@example.com";
  });

  // Botón Servicios
  document
    .getElementById("services-btn")
    .addEventListener("click", function () {
      const servicesContainer = document.createElement("div");
      servicesContainer.className = "services-modal";

      const services = {
        "#webdev": {
          name: "Desarrollo Web",
          description:
            "Creación de sitios web responsivos y aplicaciones web modernas utilizando tecnologías como HTML5, CSS3, JavaScript y frameworks como React. Especializado en soluciones personalizadas para necesidades específicas.",
          projects: ["proyecto1", "proyecto3"],
        },
        "#gis": {
          name: "Sistemas de Información Geográfica",
          description:
            "Soluciones espaciales y mapeo interactivo para análisis geográficos avanzados. Desarrollo de aplicaciones con Leaflet, Mapbox y ArcGIS. Procesamiento y visualización de datos geoespaciales.",
          projects: ["proyecto2", "proyecto4"],
        },
        "#dataviz": {
          name: "Visualización de Datos",
          description:
            "Transformación de datos complejos en visualizaciones claras e impactantes. Uso de D3.js, Chart.js y otras bibliotecas para crear dashboards interactivos y reportes dinámicos.",
          projects: ["proyecto2"],
        },
        "#python": {
          name: "Automatización con Python",
          description:
            "Scripts y aplicaciones en Python para automatizar procesos, análisis de datos y desarrollo backend. Experiencia con Pandas, NumPy y Django.",
          projects: ["proyecto4"],
        },
      };

      let html = '<div class="services-content"><h2>Mis Servicios</h2>';

      for (const [hashtag, service] of Object.entries(services)) {
        html += `
                <div class="service-item">
                    <h3>${service.name}</h3>
                    <p>${service.description}</p>
                    <div class="service-projects">
                        <h4>Proyectos relacionados:</h4>
                        ${service.projects
                          .map(
                            (proj) => `
                            <img src="img/${proj}.jpg" alt="${proj.replace("proyecto", "Proyecto ")}"
                                 title="${proj.replace("proyecto", "Proyecto ")}">
                        `,
                          )
                          .join("")}
                    </div>
                </div>
            `;
      }

      html += "</div>";
      servicesContainer.innerHTML = html;
      document.body.appendChild(servicesContainer);

      // Cerrar modal al hacer click fuera
      servicesContainer.addEventListener("click", (e) => {
        if (e.target === servicesContainer) {
          document.body.removeChild(servicesContainer);
        }
      });
    });
});

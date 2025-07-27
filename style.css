/* Definición de colores para fácil personalización */
:root {
    --dark-navy: #0a192f;
    --light-navy: #112240;
    --lightest-navy: #233554;
    --slate: #8892b0;
    --light-slate: #a8b2d1;
    --lightest-slate: #ccd6f6;
    --accent-color: #64ffda; /* Un verde-azulado neón */
}

/* Estilos Generales */
body {
    font-family: 'Inter', sans-serif;
    background-color: var(--dark-navy);
    color: var(--light-slate);
    margin: 0;
    padding: 2rem;
}

.main-header {
    text-align: center;
    margin-bottom: 4rem;
}

.main-header h1 {
    font-size: 2.8rem;
    color: var(--lightest-slate);
    margin-bottom: 0.5rem;
}

.main-header p {
    font-size: 1.2rem;
    color: var(--accent-color);
}

/* Galería de Proyectos */
.portfolio-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
}

.project-card {
    background-color: var(--light-navy);
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 10px 30px -15px rgba(0,0,0,0.7);
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border: 1px solid var(--lightest-navy);
}

.project-card:hover {
    transform: translateY(-7px);
    box-shadow: 0 0 20px -5px rgba(100, 255, 218, 0.3); /* Efecto de brillo */
}

.project-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    filter: grayscale(50%); /* Le da un toque más técnico a la miniatura */
    transition: filter 0.3s ease;
}

.project-card:hover img {
    filter: grayscale(0%);
}

.project-card h3 {
    padding: 1.25rem;
    margin: 0;
    font-size: 1.2rem;
    color: var(--lightest-slate);
}

/* Estilos del Pop-up (Modal) con efecto vidrio sobre fondo oscuro */
.modal-overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(10, 25, 47, 0.85); /* Fondo oscuro con transparencia */
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal-content {
    position: relative;
    padding: 2.5rem;
    border-radius: 15px;
    width: 80%;
    max-width: 800px;
    max-height: 80vh;
    overflow-y: auto;
    
    /* El efecto de vidrio esmerilado mejorado para dark mode */
    background-color: rgba(17, 34, 64, 0.75); /* Un poco de color base oscuro */
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(100, 255, 218, 0.2); /* Borde con el color de acento */
    box-shadow: 0 0 40px rgba(0,0,0,0.5);
}

.close-button {
    position: absolute;
    top: 15px;
    right: 25px;
    font-size: 2.5rem;
    font-weight: bold;
    color: var(--slate);
    cursor: pointer;
    transition: color 0.3s ease;
}

.close-button:hover {
    color: var(--accent-color);
}

#modal-image {
    width: 100%;
    border-radius: 8px;
    margin-bottom: 1.5rem;
    border: 1px solid rgba(100, 255, 218, 0.2);
}

#modal-title {
    margin-top: 0;
    font-size: 2.2rem;
    color: var(--accent-color); /* Título del pop-up con color de acento */
}

#modal-description {
    font-size: 1rem;
    line-height: 1.6;
    color: var(--light-slate);
}

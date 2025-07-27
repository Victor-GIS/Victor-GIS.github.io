document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const closeButton = document.getElementById('close-button');

    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            // 1. Obtener la información de la tarjeta clickeada
            const title = card.getAttribute('data-title');
            const image = card.getAttribute('data-image');
            const description = card.getAttribute('data-description');

            // 2. Poner esa información en el modal
            modalTitle.textContent = title;
            modalImage.src = image;
            modalDescription.textContent = description;

            // 3. Mostrar el modal
            modalOverlay.style.display = 'flex';
        });
    });

    const closeModal = () => {
        modalOverlay.style.display = 'none';
    };

    // Cerrar el modal al hacer clic en el botón de cerrar o en el fondo
    closeButton.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (event) => {
        if (event.target === modalOverlay) {
            closeModal();
        }
    });
});

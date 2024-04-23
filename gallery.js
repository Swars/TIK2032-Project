document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.gambar');

    images.forEach(image => {
        image.addEventListener('click', () => {
            toggleZoom(image);
        });
    });

    function toggleZoom(image) {
        if (image.style.transform === 'scale(1.5)') {
            image.style.transform = 'scale(1)';
        } else {
            resetZoom();
            image.style.transform = 'scale(1.5)';
        }
    }

    function resetZoom() {
        images.forEach(image => {
            image.style.transform = 'scale(1)';
        });
    }
});

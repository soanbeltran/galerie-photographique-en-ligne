<script>
    function openModal(imageSrc) {
        const modal = document.getElementById("modal");
        const modalImg = document.getElementById("modal-img");
        modal.style.display = "block";
        modalImg.src = imageSrc;
    }

    function closeModal() {
        const modal = document.getElementById("modal");
        modal.style.display = "none";
    }

    function filterPhotos(category) {
        const cards = document.querySelectorAll('.photo-card');
        cards.forEach(card => {
            if (category === 'all' || card.classList.contains(category)) {
                card.classList.add('active');
            } else {
                card.classList.remove('active');
            }
        });
    }
</script>

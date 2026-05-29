document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const menuCards = document.querySelectorAll(".menu-card");

    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Removemos clase activa de todos los botones
            filterButtons.forEach(btn => btn.classList.remove("active"));
            // Agregamos clase activa al botón presionado
            this.classList.add("active");

            const filterValue = this.getAttribute("data-filter");

            menuCards.forEach(card => {
                // Si seleccionó "todo", mostramos todas las tarjetas
                if (filterValue === "all") {
                    card.classList.remove("hidden");
                } else {
                    // Si la tarjeta contiene la clase correspondiente a la categoría, se muestra
                    if (card.classList.contains("item-" + filterValue)) {
                        card.classList.remove("hidden");
                    } else {
                        card.classList.add("hidden");
                    }
                }
            });
        });
    });
});
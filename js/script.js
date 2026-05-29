document.addEventListener("DOMContentLoaded", function () {

    const formulario = document.getElementById("formReserva");
    formulario.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("¡Reserva completada!");
        location.reload();
    });
});
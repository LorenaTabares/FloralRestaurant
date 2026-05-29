const formulario = document.getElementById("formReserva");

    formulario.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("¡Reserva completada!");

        formulario.reset();
    });
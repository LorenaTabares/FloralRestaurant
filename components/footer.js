document.addEventListener("DOMContentLoaded", function () {
    // 1. Crear el contenedor del pie de página
    const footerContainer = document.createElement("footer");
    footerContainer.id = "main-footer-container";

    // 2. Definir la estructura HTML interna
    footerContainer.innerHTML = `
        <div class="footer-content">
            <div class="footer-section">
                <h3>FloralRestaurant</h3>
                <p class="quote">"Donde la gastronomía se convierte en romance y el tiempo se detiene entre lazos y rosas."</p>
            </div>
            <div class="footer-section">
                <h4>Etiqueta en el Jardín</h4>
                <p>Recordamos a nuestros distinguidos invitados asistir con vestimenta Semi-Formal o estilo Vintage / Coquette.</p>
            </div>
            <div class="footer-section">
                <h4>Horarios de Audiencia</h4>
                <p>Martes a Domingo: 12:00 PM - 10:00 PM<br>Té de la Tarde: Miércoles y Viernes 4:00 PM</p>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2026 FloralRestaurant. Proyecto Universitario - Hecho con amor y encaje.</p>
        </div>
    `;

    // 3. Inyectar los estilos CSS específicos para el Footer
    const style = document.createElement("style");
    style.textContent = `
        #main-footer-container {
            background-color: #fdfaf5;
            border-top: 2px double #c5a059;
            padding: 40px 20px 20px 20px;
            font-family: 'Playfair Display', serif;
            color: #4a4a4a;
            margin-top: 60px;
        }

        .footer-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 30px;
            max-width: 1200px;
            margin: 0 auto;
            text-align: center;
        }

        .footer-section h3 {
            font-family: 'Pinyon Script', cursive;
            font-size: 2.5rem;
            color: #c5a059;
            margin: 0 0 10px 0;
        }

        .footer-section h4 {
            color: #c5a059;
            text-transform: uppercase;
            font-size: 0.9rem;
            letter-spacing: 2px;
            margin-bottom: 15px;
        }

        .footer-section p {
            font-size: 0.9rem;
            line-height: 1.6;
            margin: 0;
        }

        .footer-section .quote {
            font-style: italic;
            color: #7a7a7a;
        }

        .footer-bottom {
            text-align: center;
            border-top: 1px solid #ffd1dc; /* Línea divisoria rosa pastel */
            margin-top: 30px;
            padding-top: 20px;
            font-size: 0.8rem;
            color: #999;
            letter-spacing: 1px;
        }
    `;

    // 4. Agregar los estilos y el elemento al final del body de la página
    document.head.appendChild(style);
    document.body.appendChild(footerContainer);
});
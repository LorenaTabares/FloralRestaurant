document.addEventListener("DOMContentLoaded", function () {
    // 1. Crear el contenedor de la navegación
    const navContainer = document.createElement("header");
    navContainer.id = "main-nav-container";

    // 2. Definir la estructura HTML interna (Logo y Enlaces)
    // Asegúrate de cambiar "index.html" si tu archivo de inicio se llama "indes.html"
    navContainer.innerHTML = `
        <div class="nav-logo">
            <h1>FloralRestaurant</h1>
            <span class="nav-subtitle">Le Jardin Secret</span>
        </div>
        <nav class="nav-links">
            <a href="index.html">Inicio</a>
            <a href="historia.html">Historia</a>
            <a href="menu.html">Menú</a>
            <a href="reservas.html">Reservas</a>
            <a href="eventos.html">Eventos</a>
        </nav>
    `;

    // 3. Inyectar los estilos CSS específicos para el estilo Rococó
    const style = document.createElement("style");
    style.textContent = `
        @import url('https://fonts.googleapis.com/css2?family=Pinyon+Script&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap');

        #main-nav-container {
            background-color: #fdfaf5; /* Fondo crema palaciego */
            border-top: 4px solid #c5a059; /* Línea dorada superior */
            border-bottom: 2px double #c5a059; /* Doble línea dorada inferior (muy Rococó) */
            padding: 20px 0;
            text-align: center;
            font-family: 'Playfair Display', serif;
            box-shadow: 0 4px 15px rgba(255, 209, 220, 0.3); /* Sombra sutil rosa */
        }

        .nav-logo h1 {
            font-family: 'Pinyon Script', cursive;
            font-size: 3.5rem;
            color: #c5a059;
            margin: 0;
            line-height: 1;
        }

        .nav-subtitle {
            font-size: 0.8rem;
            text-transform: uppercase;
            letter-spacing: 3px;
            color: #dbb3b8; /* Rosa viejo */
            display: block;
            margin-top: 5px;
            margin-bottom: 20px;
        }

        .nav-links {
            display: flex;
            justify-content: center;
            gap: 35px;
        }

        .nav-links a {
            text-decoration: none;
            color: #4a4a4a;
            font-size: 1rem;
            font-weight: 600;
            letter-spacing: 1px;
            text-transform: uppercase;
            transition: all 0.3s ease;
            position: relative;
            padding: 5px 0;
        }

        /* Efecto Coquette al pasar el mouse */
        .nav-links a:hover {
            color: #c5a059;
        }

        .nav-links a::after {
            content: '🌸';
            position: absolute;
            bottom: -15px;
            left: 50%;
            transform: translateX(-50%) scale(0);
            font-size: 0.7rem;
            transition: transform 0.3s ease;
        }

        .nav-links a:hover::after {
            transform: translateX(-50%) scale(1);
        }
    `;

    // 4. Agregar los estilos y el elemento al inicio del body de la página
    document.head.appendChild(style);
    document.body.insertBefore(navContainer, document.body.firstChild);
});
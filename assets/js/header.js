document.addEventListener("DOMContentLoaded", () => {
    const header = document.createElement("header");

    header.innerHTML = `
        <div class="container header-container">
            <div class="logo">
                <div class="logo-img-placeholder"
                     style="background-color:#D4AF37;width:60px;height:60px;
                            display:flex;align-items:center;justify-content:center;
                            font-weight:bold;">
                    CGB
                </div>
                <div class="logo-text">
                    COZY GRILL BAR
                    <span>ALTAS HORAS</span>
                </div>
            </div>

            <nav>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="menu.html">Menu</a></li>
                    <li><a href="location.html">Location</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </nav>
        </div>
    `;

    document.body.prepend(header);
});

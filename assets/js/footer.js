document.addEventListener("DOMContentLoaded", () => {
    const footer = document.createElement("footer");

    footer.innerHTML = `
        <div class="container footer-content">
            <div class="footer-column">
                <h3>Cozy Grill Bar Altas Horas</h3>
                <p>
                    Tradition, flavor and a cozy atmosphere in Newark.
                </p>
                <div class="social-links">
                    <a href="https://www.facebook.com/profile.php?id=100063455114745&ref=_xav_ig_profile_page_web#" target="_blank"><i class="fab fa-facebook-f"></i></a>
                    <a href="https://www.instagram.com/cozybargrill_altashoras/" target="_blank"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                </div>
            </div>

            <div class="footer-column">
                <h3>Opening Hours</h3>
                <p>Mon - Thu: 11:00 - 22:00</p>
                <p>Fri - Sat: 11:00 - 00:00</p>
                <p>Sun: 12:00 - 21:00</p>
            </div>

            <div class="footer-column">
                <h3>Contact</h3>
                <p>329 Ferry Street, Newark, NJ</p>
                <p>(973) 555-1234</p>
                <p>info@cozygrillbar.com</p>
            </div>
        </div>

        <div class="copyright">
            © 2024 Cozy Grill Bar Altas Horas. All rights reserved.
        </div>
    `;

    document.body.appendChild(footer);
});

class IronbladeFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    background-color: #1a1a1a;
                    color: #ffffff;
                    padding: 3rem 0;
                }

                .footer-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 2rem;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 2rem;
                }

                .footer-logo {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #ffffff;
                    margin-bottom: 1rem;
                    display: flex;
                    align-items: center;
                }

                .footer-logo-icon {
                    margin-right: 0.5rem;
                    color: #d4a017;
                }

                .footer-description {
                    color: #b3b3b3;
                    line-height: 1.6;
                    margin-bottom: 1.5rem;
                }

                .footer-heading {
                    font-size: 1.25rem;
                    font-weight: 600;
                    color: #ffffff;
                    margin-bottom: 1.5rem;
                    position: relative;
                }

                .footer-heading::after {
                    content: '';
                    position: absolute;
                    bottom: -8px;
                    left: 0;
                    width: 40px;
                    height: 2px;
                    background-color: #d4a017;
                }

                .footer-links {
                    list-style: none;
                    padding: 0;
                }

                .footer-link-item {
                    margin-bottom: 0.75rem;
                }

                .footer-link {
                    color: #b3b3b3;
                    text-decoration: none;
                    transition: color 0.3s ease;
                }

                .footer-link:hover {
                    color: #d4a017;
                }

                .contact-info {
                    margin-bottom: 1rem;
                    display: flex;
                    align-items: center;
                }

                .contact-icon {
                    margin-right: 0.75rem;
                    color: #d4a017;
                }

                .social-links {
                    display: flex;
                    gap: 1rem;
                    margin-top: 1.5rem;
                }

                .social-link {
                    color: #ffffff;
                    background-color: #333333;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                }

                .social-link:hover {
                    background-color: #d4a017;
                    transform: translateY(-3px);
                }

                .copyright {
                    text-align: center;
                    margin-top: 3rem;
                    padding-top: 1.5rem;
                    border-top: 1px solid #333333;
                    color: #b3b3b3;
                    font-size: 0.875rem;
                }

                @media (max-width: 768px) {
                    .footer-container {
                        grid-template-columns: 1fr;
                    }
                }
            </style>

            <div class="footer-container">
                <div class="footer-about">
                    <div class="footer-logo">
                        <i data-feather="scissors" class="footer-logo-icon"></i>
                        CLEAN CUT
</div>
                    <p class="footer-description">
                        Local lawn care handled personally with care, pride, and attention to detail.
</p>
                    <div class="social-links">
                        <a href="#" class="social-link">
                            <i data-feather="facebook"></i>
                        </a>
                        <a href="#" class="social-link">
                            <i data-feather="instagram"></i>
                        </a>
                        <a href="#" class="social-link">
                            <i data-feather="youtube"></i>
                        </a>
                        <a href="#" class="social-link">
                            <i data-feather="linkedin"></i>
                        </a>
                    </div>
                </div>

                <div class="footer-services">
                    <h3 class="footer-heading">Our Services</h3>
                    <ul class="footer-links">
                        <li class="footer-link-item">
                            <a href="#" class="footer-link">Lawn Maintenance</a>
                        </li>
                        <li class="footer-link-item">
                            <a href="#" class="footer-link">Bush Trimming</a>
                        </li>
                        <li class="footer-link-item">
                            <a href="#" class="footer-link">Hedges</a>
                        </li>
                        <li class="footer-link-item">
                            <a href="#" class="footer-link">Small tree trimming</a>
                        </li>
                        <li class="footer-link-item">
                            <a href="#" class="footer-link">Landscaping</a>
                        </li>
                        <li class="footer-link-item">
                            <a href="#" class="footer-link">Odd Jobs</a>
                        </li>
                    </ul>
                </div>

                <div class="footer-contact">
                    <h3 class="footer-heading">Contact Us</h3>
                    <div class="contact-info">
                        <i data-feather="phone" class="contact-icon"></i>
                        <span>(352) 843-8744</span>
                    </div>
                    <div class="contact-info">
                        <i data-feather="mail" class="contact-icon"></i>
                        <span>Cleancut6149@gmail.com</span>
                    </div>
                    <div class="contact-info">
                        <i data-feather="map-pin" class="contact-icon"></i>
                        <span>Summerfield</span>
                    </div>
                    <div class="contact-info">
                        <i data-feather="clock" class="contact-icon"></i>
                        <span></span>
                    </div>
                </div>
            </div>

            <div class="copyright">
                        &copy; ${new Date().getFullYear()} Clean Cut Lawn Service. All rights reserved.
</div>
        `;

        // Replace feather icons
        feather.replace();
    }
}

customElements.define('ironblade-footer', IronbladeFooter);
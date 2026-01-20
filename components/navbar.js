class IronbladeNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid rgba(0,0,0,0.06);
          font-family: system-ui, sans-serif;
        }

        .navbar-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0.9rem 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: .5rem;
          font-size: 1.4rem;
          font-weight: 800;
          letter-spacing: .05em;
          color: #2b6e4a;
text-decoration: none;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-link {
          font-size: .95rem;
          font-weight: 500;
          color: #333;
          text-decoration: none;
        }

        .cta-button {
          background: linear-gradient(135deg,#d4a017,#c19115);
          color:#fff;
          font-weight:600;
          padding:.55rem 1.4rem;
          border-radius:999px;
          text-decoration:none;
        }

        /* Hamburger */
        .hamburger {
          display:none;
          flex-direction:column;
          gap:5px;
          cursor:pointer;
        }

        .hamburger span {
          width:26px;
          height:3px;
          background:#2c6d49;
          border-radius:5px;
          transition:.3s;
        }

        .hamburger.active span:nth-child(1){
          transform:rotate(45deg) translate(5px,5px);
        }
        .hamburger.active span:nth-child(2){
          opacity:0;
        }
        .hamburger.active span:nth-child(3){
          transform:rotate(-45deg) translate(6px,-6px);
        }

        /* Mobile menu */
        .mobile-menu{
          display:none;
          position:absolute;
          top:100%;
          left:0;
          right:0;
          background:#fff;
          padding:1.5rem;
          flex-direction:column;
          gap:1rem;
          box-shadow:0 10px 20px rgba(0,0,0,.1);
        }

        .mobile-menu.open{
          display:flex;
        }

        .mobile-link{
          font-weight:600;
          color:#333;
          text-decoration:none;
          padding:.6rem 0;
          border-bottom:1px solid #eee;
        }

        .mobile-cta{
          text-align:center;
        }

        @media(max-width:768px){
          .nav-links{display:none;}
          .hamburger{display:flex;}
        }
      </style>

      <div class="navbar-container">
        <a href="index.html" class="logo">
          CLEAN CUT
</a>
        <div class="nav-links">
          <a href="index.html" class="nav-link">Home</a>
          <a href="about.html" class="nav-link">About</a>
          <a href="services.html" class="nav-link">Services</a>
          <a href="gallery.html" class="nav-link">Gallery</a>
          <a href="testimonials.html" class="nav-link">Testimonials</a>
          <a href="quote.html" class="cta-button">Free Quote</a>
</div>

        <!-- Hamburger -->
        <div class="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <!-- Mobile menu -->
        <div class="mobile-menu">
          <a href="index.html" class="mobile-link">Home</a>
          <a href="about.html" class="mobile-link">About</a>
          <a href="services.html" class="mobile-link">Services</a>
          <a href="gallery.html" class="mobile-link">Gallery</a>
          <a href="testimonials.html" class="mobile-link">Testimonials</a>
          <a href="quote.html" class="cta-button mobile-cta">Free Quote</a>
</div>
      </div>
    `;

    const burger = this.shadowRoot.querySelector(".hamburger");
    const menu = this.shadowRoot.querySelector(".mobile-menu");

    burger.addEventListener("click", e => {
      e.stopPropagation();
      burger.classList.toggle("active");
      menu.classList.toggle("open");
    });

    // close when link clicked
    this.shadowRoot.querySelectorAll(".mobile-link,.mobile-cta")
      .forEach(link=>{
        link.addEventListener("click",()=>{
          burger.classList.remove("active");
          menu.classList.remove("open");
        })
      });

    // close when clicking outside
    document.addEventListener("click", e=>{
      if(!e.composedPath().includes(this)){
        burger.classList.remove("active");
        menu.classList.remove("open");
      }
    });
  }
}

customElements.define("ironblade-navbar", IronbladeNavbar);

document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("siteHeader");
    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");
    const backToTop = document.getElementById("backToTop");
    const year = document.getElementById("currentYear");
    const contactForm = document.getElementById("contactForm");
    const formStatus = document.getElementById("formStatus");

    // Automatically update the footer year.
    if (year) {
        year.textContent = new Date().getFullYear();
    }

    // Responsive mobile navigation.
    function closeMenu() {
        if (!menuToggle || !mainNav) return;

        mainNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");
    }

    if (menuToggle && mainNav) {
        menuToggle.addEventListener("click", () => {
            const isOpen =
                menuToggle.getAttribute("aria-expanded") === "true";

            menuToggle.setAttribute("aria-expanded", String(!isOpen));
            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Open navigation" : "Close navigation"
            );

            mainNav.classList.toggle("open", !isOpen);
        });

        mainNav.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", closeMenu);
        });

        document.addEventListener("keydown", event => {
            if (event.key === "Escape") closeMenu();
        });

        document.addEventListener("click", event => {
            if (
                !mainNav.contains(event.target) &&
                !menuToggle.contains(event.target)
            ) {
                closeMenu();
            }
        });
    }

    // Header shadow and back-to-top button.
    function updateScrollUI() {
        if (header) {
            header.classList.toggle("scrolled", window.scrollY > 25);
        }

        if (backToTop) {
            backToTop.classList.toggle(
                "visible",
                window.scrollY > 400
            );
        }
    }

    updateScrollUI();

    window.addEventListener("scroll", updateScrollUI, {
        passive: true
    });

    if (backToTop) {
        backToTop.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: window.matchMedia(
                    "(prefers-reduced-motion: reduce)"
                ).matches ? "auto" : "smooth"
            });
        });
    }

    // Reveal cards and sections as the visitor scrolls.
    const revealItems = document.querySelectorAll(".reveal");

    if (
        "IntersectionObserver" in window &&
        !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
        const observer = new IntersectionObserver(
            (entries, currentObserver) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        currentObserver.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -20px 0px"
            }
        );

        revealItems.forEach((item, index) => {
            item.style.transitionDelay = `${(index % 3) * 80}ms`;
            observer.observe(item);
        });
    } else {
        revealItems.forEach(item => {
            item.classList.add("is-visible");
        });
    }

    // Contact form: prepares an email in the visitor's email app.
    if (contactForm && formStatus) {
        contactForm.addEventListener("submit", event => {
            event.preventDefault();

            // IMPORTANT: replace this with the restaurant's real email.
            const restaurantEmail = "ADD_RESTAURANT_EMAIL_HERE";

            if (
                restaurantEmail === "ADD_RESTAURANT_EMAIL_HERE" ||
                !restaurantEmail.includes("@")
            ) {
                formStatus.textContent =
                    "The restaurant email has not been configured yet. " +
                    "Please call 09970475757 for enquiries.";

                return;
            }

            const formData = new FormData(contactForm);

            const name = String(
                formData.get("fullName") || ""
            ).trim();

            const email = String(
                formData.get("email") || ""
            ).trim();

            const phone = String(
                formData.get("phone") || ""
            ).trim();

            const enquiryType = String(
                formData.get("enquiryType") || "General Enquiry"
            );

            const message = String(
                formData.get("message") || ""
            ).trim();

            const subject = encodeURIComponent(
                `Website enquiry: ${enquiryType}`
            );

            const body = encodeURIComponent(
                `Name: ${name}\n` +
                `Email: ${email}\n` +
                `Phone: ${phone || "Not provided"}\n` +
                `Enquiry: ${enquiryType}\n\n` +
                `Message:\n${message}`
            );

            formStatus.textContent =
                "Opening your email application...";

            window.location.href =
                `mailto:${restaurantEmail}?subject=${subject}&body=${body}`;
        });
    }
});

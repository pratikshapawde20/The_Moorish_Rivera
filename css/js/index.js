
document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("siteHeader");
    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");
    const backToTop = document.getElementById("backToTop");
    const year = document.getElementById("currentYear");

    // Automatically update the copyright year.
    if (year) {
        year.textContent = new Date().getFullYear();
    }

    // Mobile navigation.
    function closeMenu() {
        if (!menuToggle || !mainNav) return;

        mainNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");
    }

    if (menuToggle && mainNav) {
        menuToggle.addEventListener("click", () => {
            const currentlyOpen =
                menuToggle.getAttribute("aria-expanded") === "true";

            const shouldOpen = !currentlyOpen;

            menuToggle.setAttribute(
                "aria-expanded",
                String(shouldOpen)
            );

            menuToggle.setAttribute(
                "aria-label",
                shouldOpen ? "Close navigation" : "Open navigation"
            );

            mainNav.classList.toggle("open", shouldOpen);
        });

        mainNav.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", closeMenu);
        });

        document.addEventListener("keydown", event => {
            if (event.key === "Escape") {
                closeMenu();
            }
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
    function updateScrollElements() {
        if (header) {
            header.classList.toggle(
                "scrolled",
                window.scrollY > 25
            );
        }

        if (backToTop) {
            backToTop.classList.toggle(
                "visible",
                window.scrollY > 400
            );
        }
    }

    updateScrollElements();

    window.addEventListener("scroll", updateScrollElements, {
        passive: true
    });

    // Smooth back-to-top action.
    if (backToTop) {
        backToTop.addEventListener("click", () => {
            const reducedMotion = window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;

            window.scrollTo({
                top: 0,
                behavior: reducedMotion ? "auto" : "smooth"
            });
        });
    }

    // Scroll reveal animations.
    const revealElements = document.querySelectorAll(".reveal");

    const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if ("IntersectionObserver" in window && !reducedMotion) {
        const revealObserver = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -25px 0px"
            }
        );

        revealElements.forEach((element, index) => {
            element.style.transitionDelay =
                `${(index % 3) * 75}ms`;

            revealObserver.observe(element);
        });
    } else {
        revealElements.forEach(element => {
            element.classList.add("is-visible");
        });
    }

    // Graceful fallback for browsers without smooth scrolling support.
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", event => {
            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: reducedMotion ? "auto" : "smooth",
                block: "start"
            });
        });
    });
});

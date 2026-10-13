
/* ==================================================
   THE MOORISH RIVERA
   ABOUT PAGE INTERACTIONS
================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const siteHeader = document.getElementById("siteHeader");
    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");
    const backToTop = document.getElementById("backToTop");
    const currentYear = document.getElementById("currentYear");


    /* COPYRIGHT YEAR */

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }


    /* MOBILE NAVIGATION */

    function closeMenu() {

        if (!menuToggle || !mainNav) return;

        menuToggle.classList.remove("active");
        mainNav.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");

        document.body.classList.remove("menu-open");

    }


    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", function () {

            const isOpen = mainNav.classList.toggle("open");

            menuToggle.classList.toggle("active", isOpen);

            menuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Close navigation" : "Open navigation"
            );

            document.body.classList.toggle("menu-open", isOpen);

        });


        // Close after clicking a navigation link.

        mainNav.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", closeMenu);

        });


        // Close when clicking outside the mobile navigation.

        document.addEventListener("click", function (event) {

            const clickedToggle = menuToggle.contains(event.target);
            const clickedNav = mainNav.contains(event.target);

            if (
                mainNav.classList.contains("open") &&
                !clickedToggle &&
                !clickedNav
            ) {
                closeMenu();
            }

        });


        // Close the mobile menu with Escape.

        document.addEventListener("keydown", function (event) {

            if (
                event.key === "Escape" &&
                mainNav.classList.contains("open")
            ) {
                closeMenu();
                menuToggle.focus();
            }

        });


        // Reset mobile navigation on desktop.

        window.addEventListener("resize", function () {

            if (window.innerWidth > 760) {
                closeMenu();
            }

        });

    }


    /* STICKY HEADER */

    function updateHeader() {

        if (!siteHeader) return;

        siteHeader.classList.toggle(
            "scrolled",
            window.scrollY > 30
        );

    }


    /* BACK TO TOP BUTTON */

    function updateBackToTop() {

        if (!backToTop) return;

        backToTop.classList.toggle(
            "visible",
            window.scrollY > 400
        );

    }


    if (backToTop) {

        backToTop.addEventListener("click", function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    /* OPTIMIZED SCROLL HANDLING */

    let ticking = false;

    function handleScroll() {

        if (ticking) return;

        ticking = true;

        window.requestAnimationFrame(function () {

            updateHeader();
            updateBackToTop();

            ticking = false;

        });

    }

    window.addEventListener("scroll", handleScroll, {
        passive: true
    });

    updateHeader();
    updateBackToTop();


    /* SCROLL REVEAL ANIMATIONS */

    const revealElements = document.querySelectorAll(".reveal");

    const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;


    if (
        reducedMotion ||
        !("IntersectionObserver" in window)
    ) {

        revealElements.forEach(function (element) {
            element.classList.add("visible");
        });

    } else {

        const observer = new IntersectionObserver(

            function (entries, currentObserver) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        currentObserver.unobserve(entry.target);

                    }

                });

            },

            {
                threshold: 0.12,
                rootMargin: "0px 0px -25px 0px"
            }

        );


        revealElements.forEach(function (element) {

            observer.observe(element);

        });

    }


    /* SMOOTH INTERNAL LINKS */

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: reducedMotion ? "auto" : "smooth",
                    block: "start"
                });

            }

        });

    });

});


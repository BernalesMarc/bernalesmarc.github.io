ScrollReveal({
            reset: false,
            distance: '20px',
            duration: 2500,
            delay: 250
        });

        ScrollReveal().reveal('.header-text, .sub-title, .about-col-2', {
            delay: 100,
            origin: 'left'
        });
        ScrollReveal().reveal('.contact-left p', {
            delay: 100,
            origin: 'left',
            interval: 150
        });
        ScrollReveal().reveal('.social-icons i, nav img', {
            delay: 200,
            origin: 'top',
            interval: 150
        });
        ScrollReveal().reveal('.about-col-1 img', {
            delay: 200,
            origin: 'right'
        });
        ScrollReveal().reveal('.about-col-2 p, .tab-titles', {
            delay: 200,
            origin: 'top'
        });
        ScrollReveal().reveal('.expertise-list,.expertise-list div', {
            delay: 200,
            origin: 'bottom',
            interval: 150
        });
        ScrollReveal().reveal('.certificate-list, .certificate-list .certificate img, .project-list div', {
            delay: 100,
            origin: 'bottom',
            interval: 100
        });
        ScrollReveal().reveal('.btn,.accordion',{
            delay: 200,
            origin: 'top'
        });
        ScrollReveal().reveal('.contact-right form input, textarea', {
            delay: 100,
            origin: 'left',
            interval: 100
        });

        ScrollReveal().reveal('.technologies-container_main-contents .images img', {
            origin: 'bottom',
            interval: 100,
            delay: 120 // Add a delay of 200ms for each image
          });

          ScrollReveal().reveal('.technologies-container_main-contents', {
            origin: 'top',
            interval: 100,
            delay: 150 // Add a delay of 200ms for each ".col" element inside ".technologies-container"
          });

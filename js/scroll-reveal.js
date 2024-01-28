ScrollReveal({
            reset: false,
            distance: '20px',
            duration: 2500,
            delay: 250
        });

        ScrollReveal().reveal('.header-text, .sub-title, .about-col-2', {
            delay: 150,
            origin: 'left'
        });
        ScrollReveal().reveal('.contact-left p', {
            delay: 150,
            origin: 'left',
            interval: 200
        });
        ScrollReveal().reveal('.social-icons i, nav img', {
            delay: 250,
            origin: 'top',
            interval: 200
        });
        ScrollReveal().reveal('.about-col-1 img', {
            delay: 250,
            origin: 'right'
        });
        ScrollReveal().reveal('.about-col-2 p, .tab-titles', {
            delay: 250,
            origin: 'top'
        });
        ScrollReveal().reveal('.expertise-list,.expertise-list div', {
            delay: 250,
            origin: 'bottom',
            interval: 200
        });
        ScrollReveal().reveal('.certificate-list, .certificate-list .certificate img, .project-list div', {
            delay: 250,
            origin: 'bottom',
            interval: 200
        });
        ScrollReveal().reveal('.btn,.accordion',{
            delay: 300,
            origin: 'top'
        });
        ScrollReveal().reveal('.contact-right form input, textarea', {
            delay: 200,
            origin: 'left',
            interval: 200
        });

        ScrollReveal().reveal('.technologies-container_main-contents .images img', {
            origin: 'bottom',
            interval: 200,
            delay: 150 // Add a delay of 200ms for each image
          });

          ScrollReveal().reveal('.technologies-container_main-contents', {
            origin: 'top',
            interval: 100,
            delay: 150 // Add a delay of 200ms for each ".col" element inside ".technologies-container"
          });

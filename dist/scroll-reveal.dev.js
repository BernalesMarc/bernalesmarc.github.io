"use strict";

ScrollReveal({
  reset: false,
  distance: '20px',
  duration: 2500,
  delay: 400
});
ScrollReveal().reveal('.header-text, .sub-title, .about-col-2', {
  delay: 300,
  origin: 'left'
});
ScrollReveal().reveal('.contact-left p', {
  delay: 300,
  origin: 'left',
  interval: 200
});
ScrollReveal().reveal('.social-icons i, nav img', {
  delay: 350,
  origin: 'top',
  interval: 200
});
ScrollReveal().reveal('.about-col-1 img', {
  delay: 400,
  origin: 'right'
});
ScrollReveal().reveal('.about-col-2 p, .tab-titles', {
  delay: 400,
  origin: 'top'
});
ScrollReveal().reveal('.expertise-list,.expertise-list div', {
  delay: 400,
  origin: 'bottom',
  interval: 200
});
ScrollReveal().reveal('.certificate-list, .certificate-list .certificate img, .project-list div', {
  delay: 500,
  origin: 'bottom',
  interval: 200
});
ScrollReveal().reveal('.btn,.accordion', {
  delay: 400,
  origin: 'top'
});
ScrollReveal().reveal('.contact-right form input, textarea', {
  delay: 500,
  origin: 'left',
  interval: 200
});
ScrollReveal().reveal('.col-content img', {
  origin: 'bottom',
  interval: 200,
  delay: 300 // Add a delay of 200ms for each image

});
ScrollReveal().reveal('.col', {
  origin: 'top',
  interval: 400,
  delay: 250 // Add a delay of 200ms for each ".col" element inside ".technologies-container"

});
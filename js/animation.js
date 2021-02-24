// name animation
const spans = document.querySelectorAll('h1 span')

spans.forEach(index => index.addEventListener('mouseover', function(e) {

    index.classList.add('animated', 'rubberBand')
}))

spans.forEach(index => index.addEventListener('mouseout', function(e) {

    index.classList.remove('animated', 'rubberBand')
}))

/*===== ACTIVE MENU =====*/
const navLink = document.querySelectorAll('.nav-link');

function linkAction() {
    /*Active link*/
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});


/*SCROLL ABOUT*/
sr.reveal('.about__img', {});
sr.reveal('.about__subtitle', { delay: 400 });
sr.reveal('.about__text', { delay: 400 });

/*SCROLL ABOUT*/
sr.reveal('.resume__subtitle', {});
sr.reveal('.timeline', { delay: 400 });
sr.reveal('.skills-bar', { delay: 400 });
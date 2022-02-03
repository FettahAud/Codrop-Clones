const slides = document.querySelectorAll('.slide');
const left = document.querySelector('#Left');
const right = document.querySelector('#Right');
let currentSlide = 0;
let active, next, prev, prevContent, prevExp, activeContent, activeExp, nextContent, nextExp
// Setting the active slide 
const activeSlide = () => {
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    slides[currentSlide].classList.add('active');
}
activeSlide();

const updateSlide = () => {
    // Updating the active,prv,next slide after changing the current slide
    active = document.querySelector('.active');
    next = active.nextElementSibling || document.querySelector('.slide:first-child');
    prev = active.previousElementSibling || document.querySelector('.slide:last-child');
    // Get the active, prev, next element's content
    prevContent = [...prev.querySelectorAll('.content .heading-1 .wrapper')];
    prevExp = prev.querySelector('.content .exp .wrapper');
    activeContent = [...active.querySelectorAll('.content .heading-1 .wrapper')];
    activeExp = active.querySelector('.content .exp .wrapper');
    nextContent = [...next.querySelectorAll('.content .heading-1 .wrapper')];
    nextExp = next.querySelector('.content .exp .wrapper');
}
updateSlide();

const leftClick = () => {
    currentSlide--
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    activeSlide();
    updateSlide();
}
const rightClick = () => {
    currentSlide++
    if (currentSlide > slides.length - 1) {
        currentSlide = 0;
    }
    activeSlide();
    updateSlide();
}

left.addEventListener('click', () => {
    if (tl.isActive()) return
    leftClick()
});
right.addEventListener('click', () => {
    if (tl.isActive()) return
    rightClick()
})

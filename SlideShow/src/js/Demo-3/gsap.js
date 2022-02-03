const addHover = () => {
    prevExp.parentElement.classList.add('hover')
    activeExp.parentElement.classList.add('hover')
    nextExp.parentElement.classList.add('hover')
}
const removeHover = () => {
    prevExp.parentElement.classList.remove('hover')
    activeExp.parentElement.classList.remove('hover')
    nextExp.parentElement.classList.remove('hover')
}
const tl = gsap.timeline({ onComplete: addHover })
//! on right click
const goRight = () => {
    removeHover()
    tl.set(nextContent, { yPercent: 100 })
    tl.set(nextExp, { yPercent: 100 })
    tl.set(activeContent, { yPercent: 100 })
    tl.set(activeExp, { yPercent: 100 })
    tl
        .to(prev.firstElementChild.lastElementChild, { clipPath: "polygon(75% 10%, 90% 50%, 75% 90%, 10% 90%, 20% 50%, 10% 10%)", ease: "expo.inOut", duration: 1 })
        .to(prevContent, { yPercent: -100, ease: "expo.inOut", duration: 1 }, "-=.75")
        .to(prevExp, { yPercent: -100, ease: "expo.inOut", duration: 1 }, "-=1")
        .set(active.firstElementChild.lastElementChild, { clipPath: "polygon(75% 10%, 90% 50%, 75% 90%, 10% 90%, 20% 50%, 10% 10%)" })
        .to(prev, { left: '100vw', duration: 1, ease: "expo.in" }, "-=.15")
        .set(prev, { visibility: 'hidden' })
        .set(next, { left: '-100vw' })
        .set(next, { visibility: 'visible' })
        .set(activeContent, { yPercent: 100 })
        .set(activeExp, { yPercent: 100 })
        .to(active, { left: '0vw', duration: 1, ease: "expo.out" }, '-=.15')
        .to(active.firstElementChild.lastElementChild, { clipPath: "polygon(100% 0%, 100% 50%, 100% 100%, 0% 100%, 0% 50%, 0% 0%)", ease: "expo.inOut", duration: 1 }, '-=1')
        .to(activeContent, { yPercent: 0, ease: "expo.inOut", duration: 1 }, "-=.75")
        .to(activeExp, { yPercent: 0, ease: "expo.inOut", duration: 1 }, "-=1")
};
//! on left click
const goLeft = () => {
    removeHover()
    tl.set(prevContent, { yPercent: -100 })
    tl.set(prevExp, { yPercent: -100 })
    tl.set(activeContent, { yPercent: -100 })
    tl.set(activeExp, { yPercent: -100 })
    tl
        .set(active, { left: "100vw", visibility: 'hidden' })
        .to(next.firstElementChild.lastElementChild, { clipPath: "polygon(90% 10%, 75% 50%, 90% 90%, 30% 90%, 10% 50%, 30% 10%)", ease: "expo.inOut", duration: 1 }, '-=.001')
        .to(nextContent, { yPercent: 100, ease: "expo.inOut", duration: 1 }, "-=.75")
        .to(nextExp, { yPercent: 100, ease: "expo.inOut", duration: 1 }, "-=.80")
        .set(active.firstElementChild.lastElementChild, { clipPath: "polygon(90% 10%, 75% 50%, 90% 90%, 30% 90%, 10% 50%, 30% 10%)" })
        .to(next, { left: '-100vw', duration: 0.25, ease: "expo.in" }, "-=.15")
        .set(prev, { left: '100vw', visibility: 'hidden' })
        .set(active, { visibility: 'visible' })
        .to(active, { left: "0", ease: 'expo.out' })
        .to(active.firstElementChild.lastElementChild, { clipPath: "polygon(100% 0%, 100% 50%, 100% 100%, 0% 100%, 0% 50%, 0% 0%)", ease: "expo.inOut", duration: 1.5 })
        .to(activeContent, { yPercent: 0, ease: "power3.out" }, "-=.5")
        .to(activeExp, { yPercent: 0, ease: "power3.out" }, "-=.25")
}
window.addEventListener('load', () => {
    right.addEventListener('click', () => {
        if (tl.isActive()) return
        goRight()
    });
    left.addEventListener('click', () => {
        if (tl.isActive()) return
        goLeft()
    });
});
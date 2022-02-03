/**
// * Initial
    clip-path: inset(10% 30.1% 0% 30% round 25vw 25vw 0vw 0vw)
// * on click
    clip-path: inset(15% 40.1% 15% 40% round 25vw 25vw 25.01vw 25.01vw)
// * on hover
    clip-path: inset(20% 40% 20.01% 40.01% round 25vw 25vw 25.01vw 25.01vw)
 */
const tl = gsap.timeline();
//! on right click
const goDown = () => {
    tl.set(nextContent, { yPercent: 100 })
    tl.set(nextExp, { yPercent: 100 })
    tl.set(activeContent, { yPercent: 100 })
    tl.set(activeExp, { yPercent: 100 })
    tl
        .to(prev.firstElementChild.lastElementChild, { clipPath: "inset(15% 40.1% 15% 40% round 25vw 25vw 25.01vw 25.01vw)", ease: "expo.inOut", duration: 1 })
        .to(prevContent, { yPercent: -100, ease: "expo.inOut", duration: 1 }, "-=.75")
        .to(prevExp, { yPercent: -100, ease: "expo.inOut", duration: 1 }, "-=1")
        .to(prev, { top: '100vh', duration: 0.25, ease: "expo.in" }, "-=.15")
        .to(prev, { visibility: 'hidden', duration: 0.001 })
        .to(next, { top: '-100vh', duration: 0.001 })
        .to(next, { visibility: 'visible', duration: 0.001 })
        .to(activeContent, { yPercent: 100, duration: .001 })
        .to(activeExp, { yPercent: 100, duration: 1 })
        .to(active, { top: '0vh', duration: 0.25, ease: "expo.out" }, '-=1')
        .to(active.firstElementChild.lastElementChild, { clipPath: "inset(10% 30.1% 0% 30% round 25vw 25vw 0vw 0vw)", ease: "expo.inOut", duration: 1 }, '-=1')
        .to(activeContent, { yPercent: 0, ease: "expo.inOut", duration: 1 }, "-=.75")
        .to(activeExp, { yPercent: 0, ease: "expo.inOut", duration: 1 }, "-=1")
};
//! on left click
const goUp = () => {
    tl.set(prevContent, { yPercent: -100 })
    tl.set(prevExp, { yPercent: -100 })
    tl.set(activeContent, { yPercent: -100 })
    tl.set(activeExp, { yPercent: -100 })
    tl
        .to(active, { top: "100vh", visibility: 'hidden', duration: 0.001 })
        .to(next.firstElementChild.lastElementChild, { clipPath: "inset(15% 40.1% 15% 40% round 25vw 25vw 25.01vw 25.01vw)", ease: "expo.inOut", duration: 1 }, '-=.001')
        .to(nextContent, { yPercent: 100, ease: "expo.inOut", duration: 1 }, "-=.75")
        .to(nextExp, { yPercent: 100, ease: "expo.inOut", duration: 1 }, "-=.80")
        .to(next, { top: '-100vh', duration: 0.25, ease: "expo.in" }, "-=.15")
        .to(prev, { top: '100vh', visibility: 'hidden', duration: 0.001 })
        .to(active, { visibility: 'visible', duration: 0.01 }, "-=.5")
        .to(active, { top: "0", ease: 'expo.out' })
        .to(active.firstElementChild.lastElementChild, { clipPath: "inset(10% 30.1% 0% 30% round 25vw 25vw 0vw 0vw)", ease: "expo.inOut", duration: 1.5 })
        .to(activeContent, { yPercent: 0, ease: "power3.out" }, "-=.5")
        .to(activeExp, { yPercent: 0, ease: "power3.out" }, "-=.25")
}
right.addEventListener('click', () => {
    if (tl.isActive()) return
    goDown()
});
left.addEventListener('click', () => {
    if (tl.isActive()) return
    goUp()
});
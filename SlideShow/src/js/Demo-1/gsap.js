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

//! On right click
const goDown = () => {
   removeHover()
   tl.set(nextContent, { yPercent: 100 })
   tl.set(nextExp, { yPercent: 100 })
   tl.set(activeContent, { yPercent: 100 })
   tl.set(activeExp, { yPercent: 100 })
   tl
      .to(prev.firstElementChild.lastElementChild, { clipPath: "circle(18% at 70% 50%)", ease: "expo.inOut", duration: 1.5 })
      .to(prevContent, { yPercent: 100, ease: "power3.in" }, "-=.5")
      .to(prevExp, { yPercent: 100, ease: "power3.in" }, "-=.25")
      .to(prev, { top: "-100vh" })
      .to(prev, { visibility: "hidden", duration: 0.01 })
      .to(active, { top: "0" }, "-=.5")
      .to(active.firstElementChild.lastElementChild, { clipPath: "circle(65% at 78% 49%)", ease: "expo.inOut", duration: 1.5 })
      .to(activeContent, { yPercent: 0, ease: "power3.out" }, "-=.5")
      .to(activeExp, { yPercent: 0, ease: "power3.out" }, "-=.25")
      .to(next, { top: "100vh" })
      .to(next, { visibility: "visible", duration: 0.01 }, "-=0.01")
}
const goUp = () => {
   removeHover()
   tl.set(prevContent, { yPercent: 100 })
   tl.set(prevExp, { yPercent: 100 })
   tl.set(activeContent, { yPercent: 100 })
   tl.set(activeExp, { yPercent: 100 })
   tl
      .to(active, { top: "-100vh", visibility: 'hidden', duration: 0.01 })
      .to(next.firstElementChild.lastElementChild, { clipPath: "circle(18% at 70% 50%)", ease: "expo.inOut", duration: 1.5 })
      .to(nextContent, { yPercent: 100, ease: "power3.in" }, "-=.5")
      .to(nextExp, { yPercent: 100, ease: "power3.in" }, "-=.25")
      .to(next, { top: "100vh" })
      .to(active, { visibility: 'visible', duration: 0.01 }, "-=.5")
      .to(active, { top: "0" }, "-=0.5")
      .to(active.firstElementChild.lastElementChild, { clipPath: "circle(65% at 78% 49%)", ease: "expo.inOut", duration: 1.5 })
      .to(activeContent, { yPercent: 0, ease: "power3.out" }, "-=.5")
      .to(activeExp, { yPercent: 0, ease: "power3.out" }, "-=.25")
}
right.addEventListener("click", () => {
   if (tl.isActive()) return
   goDown()
})
left.addEventListener("click", () => {
   if (tl.isActive()) return
   goUp()
});
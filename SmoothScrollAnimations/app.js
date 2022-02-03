function notSupportSmallScreen() {
   const mediaQuery = window.matchMedia("(max-width: 800px)");
   if (mediaQuery.matches) {
      document.querySelector('body').classList.add('small-screen');
      console.log('small screen');
   }
}
window.addEventListener('resize', () => notSupportSmallScreen())
window.addEventListener('load', () => notSupportSmallScreen())

const locoScroll = new LocomotiveScroll({
   el: document.querySelector('[data-scroll-container]'),
   smooth: true,
   getSpeed: true,
   dumping: 0.07,
   useKeyboard: true,
   useHistory: true,
   useHash: true,
   keyStep: 5,
});
const items = document.querySelectorAll('.item');

locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".scrollContainer", {
   scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
   getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
   },
   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
   pinType: document.querySelector(".scrollContainer").style.transform ? "transform" : "fixed"
});

items.forEach((item, idx) => {
   const tl = gsap.timeline({
      scrollTrigger: {
         trigger: item.parentElement,
         scrub: 1,
         scroller: '.scrollContainer',
      },
      duration: .15,
   });
   tl
      .to(item.children[0].children[0], {
         y: -50
      })
})

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


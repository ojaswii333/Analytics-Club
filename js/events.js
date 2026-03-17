gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
  scrollTrigger:{
    trigger: ".round1",
    start: "top top",
    end: "+=250%",
    scrub: 1,
    pin: true
  }
});


/* INITIAL STATE */

gsap.set(".slot", {
  opacity: 0,
  scale: 0.8
});

gsap.set(".result-text", {
  opacity: 0,
  y: 20
});


/* 🔥 1. WHEEL ROTATION (NEW) */

tl.to(".wheel", {
  rotate: 360,
  ease: "none",
  duration: 4
}, 0);


/* 2. SLOTS APPEAR */

tl.to(".slot", {
  opacity: 1,
  scale: 1,
  stagger: 0.2,
  ease: "power2.out"
});


/* 🔥 3. FLICKER EFFECT (NEW) */

tl.to(".slot", {
  scale: 1.1,
  stagger: {
    each: 0.05,
    repeat: 3,
    yoyo: true
  }
}, "-=1");


/* 4. PROBABILITY (BLUE) */

tl.to(".slot2, .slot5", {
  backgroundColor: "#00D4FF",
  boxShadow: "0 0 25px #00D4FF",
  scale: 1.2,
  duration: 1
});


/* 🔥 5. HIT EFFECT (IMPROVED) */

tl.to(".slot2, .slot5", {
  scale: 1.4,
  duration: 0.4
})
.to(".slot2, .slot5", {
  backgroundColor: "#ff3b3b",
  boxShadow: "0 0 30px #ff3b3b",
  duration: 0.4
});


/* 🔥 6. RESULT TEXT (IMPROVED) */

tl.to(".result-text", {
  opacity: 1,
  y: -10,
  scale: 1.1,
  duration: 0.5
})
.to(".result-text", {
  scale: 1,
  duration: 0.3
});
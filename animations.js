window.addEventListener('load', () => {
  const tl = new TimelineMax();

  tl.fromTo('.logo-header', 1.5, {
      x: -70,
      opacity: 0
    }, {
      x: 0,
      opacity: 1
    })
    .staggerFromTo('.navbar-content__a', 0.5, {
      opacity: 0,
      y: 10
    }, {
      opacity: 1,
      y: 0
    }, 0.25)
    .fromTo('.header-large__caption', 1.5, {
      y: -20,
      opacity: 0
    }, {
      y: 0,
      opacity: 1
    })
})
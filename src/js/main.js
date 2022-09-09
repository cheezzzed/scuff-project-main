console.log(`Hello World from main.js! 
Change this message, and make sure it changes in the browser 
to verify that you're working in the right files.`);

gsap.registerPlugin(ScrollTrigger)

/* 1. Home animations ================================= */

gsap.from('.header', { 
  duration: 2, 
  y: '-100%', 
  ease: 'power4' 
})

gsap.from('.nav-links', { 
  duration: 2, 
  opacity: 0, 
  delay: 1.5, 
})

gsap.from('.text-box', { 
  duration: 2, 
  y: '-100%' , 
  ease: 'power4', 
  opacity: 0, 
  delay: 2 
})

gsap.from('.products', { 
  duration: 2, 
  opacity: 0, 
  delay: 1, 
  scrollTrigger: '.products' 
})

gsap.from('.featured', { 
  duration: 2, 
  opacity: 0, 
  delay: 0.5,
  scrollTrigger: {
    trigger: '.featured',
    start: 'top 75%',
    end: 'bottom 25%'
  }  
})

gsap.from('.most-popular', { 
  duration: 2, 
  opacity: 0, 
  delay: 0.5,
  scrollTrigger: {
    trigger: '.most-popular',
    start: 'top 75%',
    end: 'bottom 25%'
  }  
})

gsap.from('.reflex', { 
  duration: 2, 
  opacity: 0, 
  delay: 0.5,
  scrollTrigger: {
    trigger: '.reflex',
    start: 'top 75%',
    end: 'bottom 25%'
  }  
})

/* 2. Vault animations ================================= */

gsap.from('.header-vault', { 
  duration: 2, 
  y: '-100%', 
  ease: 'power4' 
})

gsap.from('.nav-links', { 
  duration: 2, 
  opacity: 0, 
  delay: 1.5, 
})

gsap.from('.text-box', { 
  duration: 2, 
  ease: 'power4', 
  opacity: 0, 
  delay: 2 
})

gsap.from('.context', { 
  duration: 2, 
  x: '-100%' , 
  ease: 'power4', 
  opacity: 0, 
  delay: 2.5 
})

gsap.from('.vault', { 
  duration: 2, 
  x: '100%' , 
  ease: 'power4', 
  opacity: 0, 
  delay: 3 
})

gsap.from('.guides', { 
  duration: 2, 
  x: '-100%' , 
  ease: 'power4', 
  opacity: 0, 
  delay: 3.5,
})

/* 3. Gaming animations ================================= */

gsap.from('.header-gaming', { 
  duration: 2, 
  y: '-100%', 
  ease: 'power4' 
})

gsap.from('.cdl', { 
  duration: 2, 
  ease: 'power4', 
  opacity: 0, 
  delay: 2.5 
})

gsap.from('.controllers', { 
  duration: 2, 
  opacity: 0, 
  delay: 3,
})

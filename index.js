const navLinks = document.querySelectorAll(".nav-item")


navLinks.forEach(navLink => {
    navLink.addEventListener('click', () => {
      
        navLinks.forEach(item => item.classList.remove('active'));

      
        navLink.classList.add('active');
    });
});


const colours = ['#6a7583', '#1e304b', '#315460', '#080607'];
const galleryEventsDemo = document.getElementById('custom-events-demo');
galleryEventsDemo.addEventListener('lgBeforeSlide', (event) => {
    const { index } = event.detail;
    document.querySelector('.lg-backdrop').style.backgroundColor =
        colours[index];
});
lightGallery(galleryEventsDemo, {
    addClass: 'lg-events-demo-outer', // (Optional)
});

document.addEventListener('DOMContentLoaded', function() {
    // Rejestracja ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function() {
    lightGallery(document.getElementById('lightgallery'), {
            selector: 'a',
            download: false
        });
    });


    gsap.from(".mobileSlider", { 
        duration: 1.2, 
        opacity: 0, 
        y: 100, 
        x: -50, 
        scale: 1.2, 
        filter: "blur(10px)",
        ease: "power4.out", 
        stagger: 0.4,
        clearProps: "all"
    });

    // Animacja dla nagłówka
    gsap.from(".bannerContent h1", {
        duration: 1,
        x: -100,
        opacity: 0,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".bannerContent h1",
            start: "top 80%", // Rozpocznij animację, gdy górna część elementu znajdzie się w 80% wysokości okna przeglądarki
            toggleActions: "play none none reverse" // Akcje przy przewijaniu
        }
    });


    gsap.from(".bannerContent p", {
        duration: 1,
        x: -100,
        opacity: 0,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".bannerContent p",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });


    gsap.from(".bannerContent button", {
        duration: 1,
        x: -100,
        opacity: 0,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".bannerContent button",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });

 
    gsap.from(".socialIcons", {
        duration: 1,
        x: -100,
        opacity: 0,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".socialIcons",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });


    gsap.from(".bannerPictureContainer", {
        duration: 1,
        x: 100,
        opacity: 0,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".bannerPictureContainer",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });

   
    gsap.from(".secondBannerContent", {
        duration: 1,
        x: 100,
        opacity: 0,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".secondBannerContent",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });

    gsap.from(".thirdContainerImage", {
        duration: 1,
        x: -100,
        opacity: 0,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".thirdContainer",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });

    gsap.from(".thirdContainerContent", {
        duration: 1,
        x: 100,
        opacity: 0,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".thirdContainer",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });

    gsap.from(".fourthContent", {
        scrollTrigger: {
            trigger: ".fourthContainer", 
            start: "top 80%", 
            end: "bottom 20%", 
            toggleActions: "play none none reverse", 
        },
        opacity: 0, 
        y: 50, 
        duration: 1.5, 
        stagger: 0.3, 
        ease: "power3.out" 
    });
    
    gsap.from(".fourthContainerImage img", {
        scrollTrigger: {
            trigger: ".fourthContainer img",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
        },
        opacity: 0,
        scale: 0.8,
        duration: 1.5,
        stagger: 0.3,
        ease: "back.out(1.7)" 
    });

    gsap.from(".fifthContainer", {
        duration: 1,
        y: 100,
        opacity: 0,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".fifthContainer",
            start: "top 50%",
            toggleActions: "play none none reverse"
        }
    });


    gsap.from(".bannerImage", {
        duration: 1.5,
        opacity: 0,
        y: 50,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".bannerImage",
            start: "top 80%", 
            toggleActions: "play none none reverse"
        }
    });

    gsap.from(".contentWrapper h2", {
        duration: 1,
        opacity: 0,
        x: -100,
        ease: "power3.out",
        delay: 0.3,
        scrollTrigger: {
            trigger: ".bannerImage",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });

    gsap.from(".contentWrapper p", {
        duration: 1,
        opacity: 0,
        x: 100,
        ease: "power3.out",
        delay: 0.6,
        scrollTrigger: {
            trigger: ".bannerImage",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });

    gsap.from(".downloadButton", {
        duration: 1,
        opacity: 0,
        scale: 0.5,
        ease: "back.out(1.7)",
        delay: 0.9,
        scrollTrigger: {
            trigger: ".bannerImage",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });

    gsap.from(".card", {
        duration: 1,
        y: 100,   
        opacity: 0,
        stagger: 0.2,  
        ease: "power4.out",
        scrollTrigger: {
            trigger: ".seventhContainer",
            start: "top 80%", 
            toggleActions: "play none none reverse"
        }
    });

    gsap.from(".galleryContainer a", {
        opacity: 0,
        y: 30,
        stagger: 0.2, 
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".galleryContainer",
            start: "top 80%", 
            toggleActions: "play none none reverse"
        }
    });

    gsap.from(".mapSection", {
        opacity: 0,
        y: 30,
        stagger: 0.2, 
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".mapSection",
            start: "top 80%", 
            toggleActions: "play none none reverse"
        }
    });

   
});

// Initialize Particles.js
document.addEventListener('DOMContentLoaded', function() {
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });

    // Slider functionality
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');

    function showSlide() {
        slides.forEach((slide, index) => {
            slide.style.display = (index === currentSlide) ? 'block' : 'none';
        });
        currentSlide = (currentSlide + 1) % slides.length;
    }

    showSlide();
    setInterval(showSlide, 4000); // Change slide every 4 seconds
});
// Select all FAQ questions
const faqQuestions = document.querySelectorAll('.faq-question');

document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function () {
            item.classList.toggle('active');
        });
    });
});
const scrollContainer = document.getElementById('scroll-container');

function scrollLeft() {
    scrollContainer.scrollBy({ left: -300, behavior: 'smooth' });
}

function scrollRight() {
    scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
}

// JavaScript for controlling the slideshow
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    let currentIndex = 0;
  
    // Function to show the next slide
    function showNextSlide() {
      // Remove 'active' class from the current slide
      slides[currentIndex].classList.remove("active");
  
      // Increment the index (loop back to the start if at the last slide)
      currentIndex = (currentIndex + 1) % slides.length;
  
      // Add 'active' class to the new slide
      slides[currentIndex].classList.add("active");
    }
  
    // Initialize the first slide as active
    slides[currentIndex].classList.add("active");
  
    // Change slides every 4 seconds
    setInterval(showNextSlide, 4000);
  });
  

  const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('header nav ul');
const closeBtn = document.querySelector('.close-btn');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  closeBtn.style.display = navLinks.classList.contains('show') ? 'block' : 'none';
});

closeBtn.addEventListener('click', () => {
  navLinks.classList.remove('show');
  closeBtn.style.display = 'none';
});

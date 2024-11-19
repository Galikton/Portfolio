// scroll page activation color

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = ()=>{
    sections.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop-150;
        let height= sec.offsetHeight;
        let id= sec.getAttribute('id');

        if(top >= offset && top <offset+height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' +id + ']').classList.add('active');

            });
        };
    });

};


// Scroll reveal 

ScrollReveal({
     reset: true,
     distance:'80px',
     duration:2000,
     delay:200

});

ScrollReveal().reveal('.home-content, .heading ,.about h3',{ origin: 'top' });
ScrollReveal().reveal('.home-image, .skills-container, .projects, .contact form,.footer-text p',{ origin: 'bottom' });
ScrollReveal().reveal('.about-img, .home-content h1, .skills p',{ origin: 'left' });
ScrollReveal().reveal('.about-content, .home-content p , .skills-container p',{ origin: 'right' });


// Typed JS

const typed = new Typed('.Texts',{
    strings: ['Mechanical Engineer','Graphics Designer','3D Modeler','Freelancer','Gamer'],
    typeSpeed:120,
    backSpeed:80,
    backDelay:1000,
    loop:true

});



(function() {
    // Initialize EmailJS with your public key
    emailjs.init("mbb1iRESbvxCeDNEk");
    
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Show loading state
        const submitBtn = this.querySelector('input[type="submit"]');
        submitBtn.value = 'Sending...';
        submitBtn.disabled = true;

        const templateParams = {
            first_name: document.getElementById('first_name').value,
            last_name: document.getElementById('last_name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        emailjs.send('service_rt2vx2b', 'template_0prbt7w', templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Thank you! Your message has been sent successfully.');
                document.getElementById('contact-form').reset();
            }, function(error) {
                console.error('FAILED...', error);
                alert('Sorry, something went wrong. Please try again later.');
            })
            .finally(function() {
                // Reset button state
                submitBtn.value = 'Send';
                submitBtn.disabled = false;
            });
    });
})();



const projects = [
    {
        image: 'pic/1.png',
        title: 'Mechanical Design',
        description: 'An innovative mechanical solution showcasing precision engineering and creative problem-solving capabilities.'
    },
    {
        image: 'pic/2.png',
        title: '3D Modeling',
        description: 'Advanced 3D visualization created using state-of-the-art modeling techniques and tools.'
    },
    {
        image: 'pic/3.png',
        title: 'Product Design',
        description: 'Innovative product concept combining functionality with aesthetic appeal and user-centered design.'
    },
    {
        image: 'pic/4.png',
        title: 'Mechanical Design',
        description: 'An innovative mechanical solution showcasing precision engineering and creative problem-solving capabilities.'
    },
    {
        image: 'pic/5.png',
        title: '3D Modeling',
        description: 'Advanced 3D visualization created using state-of-the-art modeling techniques and tools.'
    },
    {
        image: 'pic/6.png',
        title: 'Product Design',
        description: 'Innovative product concept combining functionality with aesthetic appeal and user-centered design.'
    },
    {
        image: 'pic/7.png',
        title: 'Mechanical Design',
        description: 'An innovative mechanical solution showcasing precision engineering and creative problem-solving capabilities.'
    },
    {
        image: 'pic/8.png',
        title: '3D Modeling',
        description: 'Advanced 3D visualization created using state-of-the-art modeling techniques and tools.'
    },
    {
        image: 'pic/9.png',
        title: 'Product Design',
        description: 'Innovative product concept combining functionality with aesthetic appeal and user-centered design.'
    },
    {
        image: 'pic/10.png',
        title: 'Mechanical Design',
        description: 'An innovative mechanical solution showcasing precision engineering and creative problem-solving capabilities.'
    },
    {
        image: 'pic/11.png',
        title: '3D Modeling',
        description: 'Advanced 3D visualization created using state-of-the-art modeling techniques and tools.'
    },
    {
        image: 'pic/12.png',
        title: 'Product Design',
        description: 'Innovative product concept combining functionality with aesthetic appeal and user-centered design.'
    },
    {
        image: 'pic/13.png',
        title: 'Mechanical Design',
        description: 'An innovative mechanical solution showcasing precision engineering and creative problem-solving capabilities.'
    },
    {
        image: 'pic/14.png',
        title: '3D Modeling',
        description: 'Advanced 3D visualization created using state-of-the-art modeling techniques and tools.'
    },
    {
        image: 'pic/15.png',
        title: 'Product Design',
        description: 'Innovative product concept combining functionality with aesthetic appeal and user-centered design.'
    },
    {
        image: 'pic/16.png',
        title: 'Product Design',
        description: 'Innovative product concept combining functionality with aesthetic appeal and user-centered design.'
    },
    

];

let currentSlide = 0;
const totalImages = 16;  // Total number of images
const slideshow = document.querySelector('.slideshow-container');
const navButtons = document.querySelector('.navigation-buttons');

// Create slides
function createSlides() {

    projects.forEach((project, index) => {
        const slide = document.createElement('div');
        slide.className = `slide ${index === 0 ? 'active' : index === 1 ? 'next' : ''}`;
        slide.innerHTML = `
            <div class="slide-image">
                <img src="${project.image}" alt="Project ${index + 1}">
            </div>
            <div class="slide-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="slide-buttons">
                    <button class="slide-btn">View Details</button>
                    <button class="slide-btn">Learn More</button>
                </div>
            </div>
        `;
        slideshow.appendChild(slide);

        // Create navigation dot
        const dot = document.createElement('button');
        dot.className = `nav-btn ${index === 0 ? 'active' : ''}`;
        dot.onclick = () => goToSlide(index);
        navButtons.appendChild(dot);
    });
}

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.nav-btn');
    
    // Remove current slide classes
    slides[currentSlide].className = 'slide';
    dots[currentSlide].className = 'nav-btn';

    // Calculate new slide index with wrap-around
    currentSlide = (currentSlide + direction + totalImages) % totalImages;

    // Add active class to current slide
    slides[currentSlide].className = 'slide active';
    dots[currentSlide].className = 'nav-btn active';

    // Calculate next and previous slide indices with wrap-around
    const nextSlide = (currentSlide + 1) % totalImages;
    const prevSlide = (currentSlide - 1 + totalImages) % totalImages;

    // Update slide classes for transitions
    slides[nextSlide].className = 'slide next';
    slides[prevSlide].className = 'slide prev';
}

function goToSlide(index) {
    if (index === currentSlide) return; // Don't change if clicking current slide
    const direction = index - currentSlide;
    changeSlide(direction);
}

// Function to handle automatic slide advancement
function autoAdvance() {
    changeSlide(1);  // Always move forward by 1
}

// Auto advance slides
let slideInterval = setInterval(autoAdvance, 5000);

// Pause auto-advance on hover
slideshow.addEventListener('mouseenter', () => clearInterval(slideInterval));
slideshow.addEventListener('mouseleave', () => {
    slideInterval = setInterval(autoAdvance, 5000);
});

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        clearInterval(slideInterval);
        changeSlide(-1);
        slideInterval = setInterval(autoAdvance, 5000);
    } else if (e.key === 'ArrowRight') {
        clearInterval(slideInterval);
        changeSlide(1);
        slideInterval = setInterval(autoAdvance, 5000);
    }
});

// Add touch support for mobile devices
let touchStartX = 0;
let touchEndX = 0;

slideshow.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    clearInterval(slideInterval);
});

slideshow.addEventListener('touchmove', (e) => {
    touchEndX = e.touches[0].clientX;
});

slideshow.addEventListener('touchend', () => {
    const swipeDistance = touchEndX - touchStartX;
    if (Math.abs(swipeDistance) > 50) { // Minimum swipe distance
        if (swipeDistance > 0) {
            changeSlide(-1); // Swipe right, go to previous
        } else {
            changeSlide(1); // Swipe left, go to next
        }
    }
    slideInterval = setInterval(autoAdvance, 5000);
});

// Initialize slides
createSlides();
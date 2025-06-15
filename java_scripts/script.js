// Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu after clicking
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
});

// Testimonials Slider
const testimonials = [
    {
        content: "LadifyX has transformed how our team collaborates. We've seen a 40% increase in productivity since switching.",
        author: "Sarah Johnson",
        role: "Project Manager, TechCorp",
        image: "../assest/author.jpg"
    },
    {
        content: "The intuitive interface and powerful features make project management a breeze. Our team loves it!",
        author: "Michael Chen",
        role: "CTO, InnovateX",
        image: "../assest/author3.jpg"
    },
    {
        content: "Customer support is exceptional. They're always there when we need help or have questions.",
        author: "Emily Rodriguez",
        role: "Team Lead, DesignCo",
        image: "../assest/author2.jpg"
    }
];

let currentTestimonial = 0;
const testimonialSlider = document.querySelector('.testimonials-slider');

function createTestimonialCard(testimonial) {
    return `
        <div class="testimonial-card">
            <div class="testimonial-content">
                <p>${testimonial.content}</p>
            </div>
            <div class="testimonial-author">
                <img src="${testimonial.image}" alt="${testimonial.author}" class="author-image">
                <div class="author-info">
                    <h4>${testimonial.author}</h4>
                    <p>${testimonial.role}</p>
                </div>
            </div>
        </div>
    `;
}

function updateTestimonials() {
    testimonialSlider.innerHTML = testimonials.map((testimonial, index) => {
        const isActive = index === currentTestimonial;
        return `
            <div class="testimonial-card ${isActive ? 'active' : ''}" 
                 style="display: ${isActive ? 'block' : 'none'}">
                ${createTestimonialCard(testimonial)}
            </div>
        `;
    }).join('');
}

// Initialize testimonials
updateTestimonials();

// Auto-rotate testimonials
setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    updateTestimonials();
}, 5000);

// Form Validation and Submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Basic form validation
    const formData = new FormData(contactForm);
    const formValues = Object.fromEntries(formData.entries());
    
    let isValid = true;
    let errorMessage = '';
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formValues.email)) {
        isValid = false;
        errorMessage = 'Please enter a valid email address.';
    }
    
    // Validate required fields
    for (const [key, value] of Object.entries(formValues)) {
        if (!value.trim() && key !== 'company') {
            isValid = false;
            errorMessage = 'Please fill in all required fields.';
            break;
        }
    }
    
    if (!isValid) {
        alert(errorMessage);
        return;
    }
    
    // Simulate form submission
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    try {
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Show success message
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    } catch (error) {
        alert('Sorry, there was an error sending your message. Please try again.');
    } finally {
        submitButton.disabled = false;
        submitButton.textContent = originalText;
    }
});

// Intersection Observer for animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.feature-card, .pricing-card, .testimonial-card, .contact-form, .info-item').forEach(element => {
    observer.observe(element);
});

// Add scroll-based animations
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    
    // Parallax effect for hero section
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        heroImage.style.transform = `translateY(${scrollPosition * 0.1}px)`;
    }
    
    // Fade in header shadow
    const header = document.querySelector('.header');
    if (header) {
        if (scrollPosition > 0) {
            header.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    }
});

// Add CSS class for active navigation link based on scroll position
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelector(`.nav-menu a[href="#${sectionId}"]`)?.classList.add('active');
        } else {
            document.querySelector(`.nav-menu a[href="#${sectionId}"]`)?.classList.remove('active');
        }
    });
}); 


document.addEventListener('DOMContentLoaded', function() {
    // Load testimonials if on testimonials page
    if (window.location.pathname.includes('testimonials.html')) {
        loadTestimonials();
    }

    // Form submission handler for contact page
    if (window.location.pathname.includes('contact.html')) {
        const contactForm = document.querySelector('form');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                alert('Thank you for your message! We will contact you soon.');
                this.reset();
            });
        }
    }
    // Add animation classes when elements come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.service-card, .testimonial-card, .team-member');
elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('fade-in');
            }
        });
    };

    // Run once on load and then on scroll
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
    // Mobile menu toggle functionality will be handled by the navbar component
});

function loadTestimonials() {
    const testimonialsContainer = document.querySelector('.grid.grid-cols-1.md\\:grid-cols-2.lg\\:grid-cols-3.gap-8');
    
    if (testimonialsContainer) {
        const testimonials = [
            {
                name: "Michael R.",
                location: "Gainesville, FL",
                rating: 5,
                text:
                        "Clean Cut transformed our neglected yard into a neighborhood showpiece. Their attention to detail is unmatched.",
image: "http://static.photos/people/200x200/1"
            },
            {
                name: "Sarah L.",
                location: "St. Augustine, FL",
                rating: 5,
                text:
                        "The paver patio Clean Cut installed has become our favorite outdoor living space. Professional from start to finish.",
image: "http://static.photos/people/200x200/2"
            },
            {
                name: "David K.",
                location: "Palm Coast, FL",
                rating: 5,
                text:
                        "After trying several lawn services, we finally found Clean Cut that delivers consistent results. Worth every penny.",
image: "http://static.photos/people/200x200/3"
            },
            {
                name: "Jennifer H.",
                location: "Ocala, FL",
                rating: 5,
                text: "Their irrigation system repair saved my lawn during last summer's drought. Quick response and fair pricing.",
                image: "http://static.photos/people/200x200/4"
            },
            {
                name: "Robert T.",
                location: "Jacksonville, FL",
                rating: 5,
                text: "The landscape lighting they installed has completely transformed our home's curb appeal at night.",
                image: "http://static.photos/people/200x200/5"
            },
            {
                name: "Amanda S.",
                location: "Alachua, FL",
                rating: 5,
                text: "Professional, punctual, and perfectionists. Exactly what we wanted in a lawn care company.",
                image: "http://static.photos/people/200x200/6"
            }
        ];

        testimonials.forEach(testimonial => {
            const stars = Array(testimonial.rating).fill('<i data-feather="star" class="w-5 h-5 fill-current"></i>').join('');
            
            const testimonialCard = document.createElement('div');
            testimonialCard.className = 'bg-white p-8 rounded-lg shadow-md testimonial-card';
            testimonialCard.innerHTML = `
                <div class="testimonial-stars text-secondary">
                    ${stars}
                </div>
<p class="text-gray-700 mb-6">"${testimonial.text}"</p>
                <div class="flex items-center">
                    <img src="${testimonial.image}" alt="Client" class="w-12 h-12 rounded-full mr-4">
                    <div>
                        <h4 class="font-bold text-gray-900">${testimonial.name}</h4>
                        <p class="text-gray-600">${testimonial.location}</p>
                    </div>
                </div>
            `;
            
            testimonialsContainer.appendChild(testimonialCard);
        });

        feather.replace();
    }
}
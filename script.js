// Navbar menu toggle for mobile
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Scroll-triggered animations
const animatedSections = document.querySelectorAll('.hero, .designer-section, .digital-section, .footer-cta');

function animateOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;
    animatedSections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
            section.style.opacity = 1;
            section.style.transform = 'none';
        } else {
            section.style.opacity = 0;
            section.style.transform = 'translateY(40px)';
        }
    });
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('DOMContentLoaded', animateOnScroll);

// Scroll-triggered animation for all .animated elements
function revealOnScroll() {
    const animatedEls = document.querySelectorAll('.animated');
    const observer = new window.IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.15 });
    animatedEls.forEach(el => observer.observe(el));
}
window.addEventListener('DOMContentLoaded', revealOnScroll);

// Service Offers Tab Switching
window.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.service-tab');
    const tabContents = document.querySelectorAll('.service-offers-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const tabName = tab.getAttribute('data-tab');
            tabContents.forEach(content => {
                if (content.getAttribute('data-tab-content') === tabName) {
                    content.style.display = '';
                } else {
                    content.style.display = 'none';
                }
            });
        });
    });
}); 
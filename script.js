// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll animation for elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideIn 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all menu items and feature items
document.querySelectorAll('.menu-item, .feature-item, .contact-item').forEach(element => {
    element.style.opacity = '0';
    observer.observe(element);
});

// Add hover effects to menu items
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05) rotate(1deg)';
    });
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
});

// CTA Button functionality
document.querySelector('.cta-button').addEventListener('click', function() {
    alert('Thank you for your interest! 🍔\n\nOrder feature coming soon!\n\nVisit us: 12:00 PM - 2:00 AM');
});

// Dynamic time display
function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const timeString = `${hours}:${minutes}`;
    
    // Check if cafe is open (12 PM to 2 AM)
    const currentHour = now.getHours();
    const isOpen = currentHour >= 12 || currentHour < 2;
    
    console.log(`Current time: ${timeString} - Cafe is ${isOpen ? 'OPEN' : 'CLOSED'}`);
}

// Update time every minute
setInterval(updateTime, 60000);
updateTime();

// Add parallax effect to hero section
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    const scrollPosition = window.pageYOffset;
    hero.style.backgroundPosition = `0 ${scrollPosition * 0.5}px`;
});

// Mobile menu toggle (if needed for future expansion)
function initMobileMenu() {
    // This can be expanded for mobile hamburger menu
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
        console.log('Mobile view detected');
    }
}

window.addEventListener('resize', initMobileMenu);
initMobileMenu();

// Animate numbers on load
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Page load animation
window.addEventListener('load', function() {
    console.log('Dabbang Cafe Website Loaded! 🔴');
    
    // Add subtle background animation
    const elements = document.querySelectorAll('.animated-element');
    elements.forEach((element, index) => {
        element.style.left = Math.random() * 100 + '%';
        element.style.top = Math.random() * 100 + '%';
    });
});

// Add feedback for interactions
document.querySelectorAll('button, a').forEach(element => {
    element.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
    });
});

// Log cafe info
console.log('%c🔴 Welcome to Dabbang Cafe! 🔴', 'font-size: 20px; color: red; font-weight: bold;');
console.log('%cMore Taste, More Time!', 'font-size: 14px; color: gold; font-weight: bold;');
console.log('Hours: 12:00 PM - 2:00 AM | Perfect for Lunch & Late Nights');

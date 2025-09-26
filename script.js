// Simple Mobile Menu Toggle
function initMobileMenu() {
    const button = document.getElementById('mobile-menu-button');
    const menu = document.getElementById('mobile-menu');
    
    if (button && menu) {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            menu.classList.toggle('hidden');
        });
        
        // Close menu when clicking links
        const links = menu.querySelectorAll('a');
        links.forEach(function(link) {
            link.addEventListener('click', function() {
                menu.classList.add('hidden');
    });
});

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!button.contains(e.target) && !menu.contains(e.target)) {
                menu.classList.add('hidden');
            }
        });
    }
}

// Smooth scrolling
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
                const header = document.querySelector('.header');
                const headerHeight = header ? header.offsetHeight : 0;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
    });
}

// WhatsApp functionality
function initWhatsApp() {
    const whatsappLinks = document.querySelectorAll('[href*="wa.me"], .whatsapp-float');
    whatsappLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const phone = '5511958863800';
            const message = 'Olá! Gostaria de saber mais sobre as aulas da Prof. Keli Patrícia.';
            const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
        });
    });
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initSmoothScrolling();
    initWhatsApp();
});
document.addEventListener('DOMContentLoaded', () => {
    // Load Navbar
    fetch('components/navbar.html')
        .then(response => response.text())
        .then(data => {
            const container = document.getElementById('navbar-container') || document.getElementById('navbar');
            if (container) {
                container.innerHTML = data;
                // Initialize mobile menu after navbar is loaded
                initMobileMenu();
                notifyComponentsLoaded();
            }
        })
        .catch(error => console.error('Error loading navbar:', error));

    // Load Footer
    fetch('components/footer.html')
        .then(response => response.text())
        .then(data => {
            const container = document.getElementById('footer-container') || document.getElementById('footer');
            if (container) {
                container.innerHTML = data;
                notifyComponentsLoaded();
            }
        })
        .catch(error => console.error('Error loading footer:', error));
});

// Dispatch event when components are loaded
function notifyComponentsLoaded() {
    window.dispatchEvent(new CustomEvent('componentsLoaded'));
}

function initMobileMenu() {
    const mobileBtn = document.getElementById('mobile-menu-btn') || document.querySelector('.menu-toggle');
    const navLinks = document.getElementById('nav-links') || document.querySelector('.nav-links');

    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            mobileBtn.classList.toggle('active');
            navLinks.classList.toggle('active');

            // For alternative classes if used
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else if (window.innerWidth <= 768) {
                // navLinks.style.display = 'flex'; // handled by CSS active class usually
            }
        });

        // Close menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileBtn.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }
}

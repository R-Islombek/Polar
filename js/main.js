document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.mobile-menu-toggle');
    const headerNav = document.querySelector('.header-nav');
    
    toggleButton.addEventListener('click', function() {
        this.classList.toggle('active');
        headerNav.classList.toggle('active');
        
        // Toggle body overflow when menu is open
        if (headerNav.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
    
    // Close menu when clicking on a link (optional)
    const navLinks = document.querySelectorAll('.header-link, .header-link-name');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (headerNav.classList.contains('active')) {
                toggleButton.classList.remove('active');
                headerNav.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });
});
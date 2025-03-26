document.addEventListener('DOMContentLoaded', function() {
    // Load navbar
    fetch('/html/components/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('afterbegin', data);
            
            // Highlight current page in navbar
            const currentPage = window.location.pathname.split('/').pop().replace('.html', '');
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                const linkPage = link.getAttribute('href')?.replace('.html', '');
                if (linkPage === currentPage) {
                    link.classList.add('active');
                }
            });
        });

    // Check if user is logged in
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (!isLoggedIn && !window.location.pathname.includes('index.html')) {
        window.location.href = '/index.html';
    }
}); 
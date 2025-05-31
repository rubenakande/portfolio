
        // Smooth scrolling
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const section = document.querySelector(this.getAttribute('href'));
                section.scrollIntoView({ behavior: 'smooth' });
            });
        });

        // Mobile menu toggle
        document.getElementById('menu-toggle').addEventListener('click', () => {
            const menu = document.getElementById('nav-menu');
            menu.classList.toggle('hidden');
        });

        // Form submission
        document.getElementById('contact-form').addEventListener('submit', function (e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && email && message) {
                alert('Message sent! (This is a demo, no real form submission.)');
                this.reset();
            } else {
                alert('Please fill out all fields.');
            }
        });

        // Update current year
        document.getElementById('currentYear').textContent = new Date().getFullYear();

        // Add animation on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate__animated', 'animate__fadeInUp');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });

        document.getElementById('menu-toggle').addEventListener('click', function() {
            const navMenu = document.getElementById('nav-menu');
            navMenu.classList.toggle('show');
        })


        // Hide part of the header on scrolling up
        const header = document.getElementById('header');
    const homeDiv = document.getElementById('home');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop && scrollTop > 50) {
            // Scrolling down and past 50px
            header.classList.add('header-scrolled');
        } else if (scrollTop <= 50) {
            // At or near the top
            header.classList.remove('header-scrolled');
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Prevent negative scroll
    });
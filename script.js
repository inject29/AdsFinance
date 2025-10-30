document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS Library for Scroll Animations
    AOS.init({
        duration: 1000,
        once: true,
        mirror: false,
    });

    // Navbar Scroll Effect: Membuat navbar berubah warna saat di-scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth Scroll for Navigation Links: Scroll halus ke setiap section
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            const offset = navbar.offsetHeight;

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - offset,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Inisialisasi Slick Carousel untuk Testimoni
    // Pastikan jQuery dan Slick sudah ter-link di HTML
    if (typeof jQuery !== 'undefined' && $.fn.slick) {
        $('.testimonial-carousel').slick({
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }

    // Form submission (Placeholder)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Anda bisa mengganti ini dengan pengiriman data form yang sebenarnya ke backend/layanan email
            alert('Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.');
            contactForm.reset();
        });
    }
});

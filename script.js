document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const menuLinks = document.querySelectorAll('.vertical-menu a');

    function activateMenuLink() {
        let currentSection = sections[0];
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section;
            }
        });

        menuLinks.forEach((link) => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === currentSection.id) {
                link.classList.add('active');
            }
        });
    }

    activateMenuLink();
    window.addEventListener('scroll', activateMenuLink);
});


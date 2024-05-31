document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const menuLinks = document.querySelectorAll('.vertical-menu a');
    const textSection = document.querySelector('.text'); 

    function activateMenuLink() {
        const textHeight = textSection.offsetHeight; 
        const textScrollOffset = textSection.scrollTop; 
        const visibleTop = textScrollOffset;
        const visibleBottom = textScrollOffset + textHeight;
    
        sections.forEach(section => {
            const sectionTop = section.offsetTop - textScrollOffset + 500; 
            const sectionBottom = sectionTop + section.offsetHeight;
    
            const isVisible = (sectionBottom > visibleTop && sectionTop < visibleBottom);
            if (isVisible) {
                const sectionId = section.getAttribute('id');
                menuLinks.forEach(link => {
                    const linkId = link.getAttribute('href').substring(1);
                    if (linkId === sectionId) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }
        });
    }
    activateMenuLink();
    textSection.addEventListener('scroll', activateMenuLink);
});
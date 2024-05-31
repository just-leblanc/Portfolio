$(document).ready(function() {
    $('#aboutButton').click(function() {
        $('body').addClass('animate_content');
        setTimeout(function() {
            window.location.href = 'aboutme.html';
        }, 1200); 
    });
});

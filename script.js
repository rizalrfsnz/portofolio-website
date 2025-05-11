document.getElementById('menu-toggle').addEventListener('click', function() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('show'); 
});



const navLinks = document.querySelectorAll('#navbar a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const navbar = document.getElementById('navbar');
        navbar.classList.remove('show'); 
    });
});


document.getElementById('menu-toggle').addEventListener('click', function() {
    this.classList.toggle('active'); 
});

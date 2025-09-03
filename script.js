// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Typing effect for name
const nameElement = document.getElementById('name');
const nameText = 'Shafal Bhatta';
let index = 0;

function typeWriter() {
    if (index < nameText.length) {
        nameElement.innerHTML += nameText.charAt(index);
        index++;
        setTimeout(typeWriter, 150);
    }
}

window.addEventListener('load', typeWriter);

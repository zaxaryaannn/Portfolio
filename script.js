
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Scroll

// ScrollReveal({
//     // reset: true,
//     distance: '80px',
//     duration: 1500,
//     delay: 200 
// });

// ScrollReveal().reveal('.home-content, .heading, .about-content, .about-img', { origin: 'top' });
// ScrollReveal().reveal('.btn, .portfolio-box', { origin: 'bottom' });
// ScrollReveal().reveal('.left-side', { origin: 'left' });
// ScrollReveal().reveal('.home-content #text, .right-side', { origin: 'right' });

// Typing

var i=0,text;
text = "Here I showcase my skills as a front-end developer.";

function Typing() {
    if(i<text.length){
        document.getElementById("text").innerHTML += text.charAt(i);
        i++;
        setTimeout(Typing,100);
    }
}
Typing()

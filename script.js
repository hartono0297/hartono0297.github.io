
// animasi event AOS Libary
AOS.init({
    offset: 100,
    duration: 1000
});


// scroll NavBar event 
window.onscroll = function() {myFunction()};

var navbar = document.querySelector(".navbar ul");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >=sticky) {
        navbar.classList.add("sticky")
    } else 
        navbar.classList.remove("sticky");
    }

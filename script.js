$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing-2", {
        strings: ["ByTheWay"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 2,
                nav: false
            }
        }
    });
    
});

// Email Js keys IDs
const serviceID = 'service_2wp0grj';
const templateID_1 = 'template_kj74ya6';
const templateID_2 = 'template_uogfdtr';

// Suggestion email JS function
function sendSuggest(){
    let params = {
        suggestion : document.getElementById("suggestions").value
    }

    emailjs.send(serviceID, templateID_1, params)
        .then(alert("¡Gracias por tu sugerencia!"))
 }

// Form email JS function 
function sendMail(){
    let params = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value
    }

    emailjs.send(serviceID, templateID_2, params)
        .then(alert("¡Gracias por contactar!"))
 }


document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".services .serv-content .card");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                cards.forEach(card => card.classList.remove("active"));
                entry.target.classList.add("active");
            } else {

                entry.target.classList.remove("active");
            }
        });
    }, { threshold: 0.6 });

    cards.forEach(card => observer.observe(card));
});


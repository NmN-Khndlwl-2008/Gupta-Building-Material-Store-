/*======================================
Gupta Building Material Store
JavaScript
======================================*/

/*======== Loader ========*/

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 1200);
});

/*======== Hero Slider ========*/

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(index){

    slides.forEach(slide=>slide.classList.remove("active"));

    slides[index].classList.add("active");

}

function nextSlide(){

    currentSlide++;

    if(currentSlide>=slides.length){

        currentSlide=0;

    }

    showSlide(currentSlide);

}

setInterval(nextSlide,4000);

/*======== Mobile Menu ========*/

const menuBtn=document.getElementById("menu-btn");

const navbar=document.getElementById("navbar");

menuBtn.addEventListener("click",()=>{

    navbar.classList.toggle("show");

});

/*======== Scroll Progress ========*/

const progressBar=document.getElementById("progress-bar");

window.addEventListener("scroll",()=>{

    const scrollTop=document.documentElement.scrollTop;

    const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

    const progress=(scrollTop/height)*100;

    progressBar.style.width=progress+"%";

});

/*======== Back To Top ========*/

const backToTop=document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        backToTop.style.display="flex";

    }

    else{

        backToTop.style.display="none";

    }

});

backToTop.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/*======== Active Navigation ========*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-120;

        if(pageYOffset>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});

/*======== Reveal Animation ========*/

const revealElements=document.querySelectorAll(

".product-card,.service-card,.why-card,.gallery-grid img,.brand-card,.highlight-box,.faq-item"

);

const observer=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0)";

        }

    });

},{threshold:0.15});

revealElements.forEach(item=>{

    item.style.opacity="0";

    item.style.transform="translateY(40px)";

    item.style.transition=".7s ease";

    observer.observe(item);

});

/*======== Contact Form ========*/

const form=document.querySelector(".contact-form form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert(

"Thank you for contacting Gupta Building Material Store.\n\nWe will get back to you shortly."

);

form.reset();

});

}
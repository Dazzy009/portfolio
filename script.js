// ===============================
// Typing Animation
// ===============================

const typingText = document.querySelector(".typing");

const words = [
    "Computer Science Student",
    "Web Developer",
    "HTML Enthusiast",
    "CSS Designer",
    "JavaScript Learner"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent = currentWord.substring(0, charIndex++);
        
        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1800);

            return;

        }

    }

    else {

        typingText.textContent = currentWord.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);

}

typeEffect();


// ===============================
// Mobile Menu
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({

            behavior:"smooth"

        });

    });

});


// ===============================
// Scroll To Top Button
// ===============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", ()=>{

    if(window.scrollY > 500){

        topBtn.classList.add("show");

    }

    else{

        topBtn.classList.remove("show");

    }

});

topBtn.addEventListener("click", ()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


// ===============================
// Scroll Progress Bar
// ===============================

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", ()=>{

    let scrollTop = document.documentElement.scrollTop;

    let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    let progress = (scrollTop / scrollHeight) * 100;

    progressBar.style.width = progress + "%";

});


// ===============================
// Scroll Reveal Animation
// ===============================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show-animation");

        }

    });

},{
    threshold:0.2
});

document.querySelectorAll(".section, .hero, .glass-card, .card, .timeline-item").forEach(item=>{

    observer.observe(item);

});


// ===============================
// Active Navbar Link
// ===============================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", ()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 120;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link=>{

        link.classList.remove("active-link");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active-link");

        }

    });

});


// ===============================
// Floating Background Animation
// ===============================

const blobs = document.querySelectorAll(".bg-animation span");

blobs.forEach((blob,index)=>{

    blob.style.animationDuration = `${12 + index * 2}s`;

    blob.style.animationDelay = `${index}s`;

});


// ===============================
// Skill Bars Animation
// ===============================

const skillSection = document.querySelector("#skills");

const skillObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            document.querySelectorAll(".fill").forEach(bar=>{

                bar.style.animation = "grow 2s ease forwards";

            });

        }

    });

},{
    threshold:0.4
});

skillObserver.observe(skillSection);


// ===============================
// Navbar Background on Scroll
// ===============================

const navbar = document.querySelector("nav");

window.addEventListener("scroll", ()=>{

    if(window.scrollY > 50){

        navbar.style.background = "rgba(15,23,42,0.85)";
        navbar.style.backdropFilter = "blur(15px)";
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,.25)";

    }

    else{

        navbar.style.background = "transparent";
        navbar.style.boxShadow = "none";

    }

});


// ===============================
// Current Year in Footer (Optional)
// ===============================

const footer = document.querySelector("footer p");

if(footer){

    footer.innerHTML =
    `© ${new Date().getFullYear()} Dazzy | Designed with ❤️ using HTML, CSS & JavaScript`;

}
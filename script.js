// ================================
// SMOOTH SCROLL
// ================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});


// ================================
// NAVBAR SCROLL EFFECT
// ================================
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.style.background = "rgba(13,17,26,0.95)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.4)";
    } else {
        navbar.style.background = "rgba(13,17,26,0.8)";
        navbar.style.boxShadow = "none";
    }
});


// ================================
// ACTIVE NAV LINK HIGHLIGHT
// ================================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});


// ================================
// SCROLL REVEAL (JS fallback)
// ================================
const revealElements = document.querySelectorAll(".animate-scroll");

const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach(el => {
        const boxTop = el.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


// ================================
// BUTTON RIPPLE EFFECT
// ================================
document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", function (e) {
        const circle = document.createElement("span");
        const diameter = Math.max(this.clientWidth, this.clientHeight);

        circle.style.width = circle.style.height = diameter + "px";
        circle.style.left = e.offsetX - diameter / 2 + "px";
        circle.style.top = e.offsetY - diameter / 2 + "px";
        circle.classList.add("ripple");

        const ripple = this.getElementsByClassName("ripple")[0];
        if (ripple) ripple.remove();

        this.appendChild(circle);
    });
});


// ================================
// PARALLAX EFFECT (HERO SECTION)
// ================================
const hero = document.querySelector(".hero-section");

window.addEventListener("mousemove", (e) => {
    const x = (window.innerWidth / 2 - e.pageX) / 25;
    const y = (window.innerHeight / 2 - e.pageY) / 25;

    hero.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});


// ================================
// TYPING EFFECT (JS VERSION)
// ================================
const words = ["Web Developer", "Ethical Hacker", "Full Stack Dev"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

const typingElement = document.querySelector(".typing-words");

function type() {
    if (!typingElement) return;

    currentWord = words[i];

    if (isDeleting) {
        typingElement.innerHTML = currentWord.substring(0, j--);
    } else {
        typingElement.innerHTML = currentWord.substring(0, j++);
    }

    if (!isDeleting && j === currentWord.length) {
        isDeleting = true;
        setTimeout(type, 1000);
    } else if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % words.length;
        setTimeout(type, 300);
    } else {
        setTimeout(type, isDeleting ? 50 : 100);
    }
}

type();


// ================================
// PAGE LOAD ANIMATION
// ================================
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});
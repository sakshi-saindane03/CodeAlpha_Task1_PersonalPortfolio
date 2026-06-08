const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector("#ul-list-of-sections");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;

        if (scrollY >= sectionTop) {
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

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

hiddenElements.forEach((el) => observer.observe(el));

const roles = [
    "Frontend Developer",
    "IT Graduate",
    "Java & SQL Enthusiast"
];

const typingElement = document.getElementById("typing");

let roleIndex = 0;
let charIndex = 0;

function typeText() {
    const currentRole = roles[roleIndex];

    if (charIndex < currentRole.length) {
        typingElement.textContent += currentRole.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 100);
    } else {
        setTimeout(() => {
            eraseText();
        }, 1500);
    }
}

function eraseText() {
    const currentRole = roles[roleIndex];

    if (currentRole.length > 0 && typingElement.textContent.length > 0) {
        typingElement.textContent = typingElement.textContent.slice(0, -1);
        setTimeout(eraseText, 50);
    } else {
        roleIndex = (roleIndex + 1) % roles.length;
        charIndex = 0;
        setTimeout(typeText, 300);
    }
}

typeText();

// Education section animation (left/right slide reveal)
const eduCards = document.querySelectorAll(".hidden-left, .hidden-right");

const eduObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

eduCards.forEach((card) => {
    eduObserver.observe(card);
});
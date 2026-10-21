// =========================
// MOBILE MENU 
// =========================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});


// =========================
// CLOSE MENU AFTER CLICKING A LINK 
// =========================

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
});


// =========================
// FOOTER YEAR
// =========================

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();


// =========================
//  CONTACT FORM 
// =========================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = new FormData(contactForm);

    try{
        const response = await fetch(contactForm.action, {
            method:"POST",
            body: formData,
            headers: {
                "Accept": "application/json"
            }
        } );

        if (response.ok) {
            formMessage.textContent = 
                "Thanks! Your message has been received.";

                contactForm.reset();
        } else {
            formMessage.textContent = 
                "oops! Something went wrong. Please try again.";
        }

    } catch (error) {
        formMessage.textContent = 
            "oops! Something went wrong. Please try again.";
    }
    
})


// =========================
// SCROLL REVEAL ANIMATION
// =========================

const revealElements = document.querySelectorAll(".reveal");

console.log("Reveal elements found:", revealElements.length);

const revealOnScroll = function () {
    revealElements.forEach(function (element) {

        const elementTop = element.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.classList.add("show");
        }
    });
};


// Run animation when scrolling
window.addEventListener("scroll", revealOnScroll);

// Run once when the page first loads 
revealOnScroll();

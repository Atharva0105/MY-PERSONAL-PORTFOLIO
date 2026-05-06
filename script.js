// DARK MODE
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// TYPING EFFECT
const text = ["Business Administration Student", "Problem Solver", "Future Entrepreneur"];
let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function type() {
    if (i < text.length) {
        if (!isDeleting && j <= text[i].length) {
            currentText = text[i].substring(0, j++);
        } else if (isDeleting && j >= 0) {
            currentText = text[i].substring(0, j--);
        }

        document.getElementById("typing").innerHTML = currentText;

        if (j === text[i].length) {
            isDeleting = true;
            setTimeout(type, 1000);
            return;
        }

        if (j === 0) {
            isDeleting = false;
            i++;
            if (i === text.length) i = 0;
        }
    }

    setTimeout(type, isDeleting ? 50 : 100);
}

type();

// SCROLL ANIMATION
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

sections.forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
});

const texts = ["Find me on", "Tap in & listen", "Listen anywhere"];
const typingElement = document.querySelector(".typing");
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
        charIndex--;
        typingElement.textContent = currentText.substring(0, charIndex);
    } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }
    
    let typingSpeed = isDeleting ? 50 : 100;
    
    if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => isDeleting = true, 3000);
        typingSpeed = 3000;
    } else if (isDeleting && charIndex === -1) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        charIndex = 0;
        typingSpeed = 300;
    }
    
    setTimeout(typeEffect, typingSpeed);
}

typeEffect();



window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});
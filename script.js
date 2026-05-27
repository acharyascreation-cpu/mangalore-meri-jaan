// TYPEWRITER EFFECT
const textElement = document.getElementById('typewriter-text');

const names = [
  "Mangalore",
  "ಮಂಗಳೂರು",
  "ಕುಡ್ಲ",
  "Maikala",
  "മംഗലാപുരം",
  "Kodial"
];

let nameIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 150;

function type() {
  const currentName = names[nameIndex];

  if (isDeleting) {
    textElement.textContent = currentName.substring(0, charIndex - 1);
    charIndex--;
    typeSpeed = 80;
  } else {
    textElement.textContent = currentName.substring(0, charIndex + 1);
    charIndex++;
    typeSpeed = 150;
  }

  if (!isDeleting && charIndex === currentName.length) {
    isDeleting = true;
    typeSpeed = 1500;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    nameIndex = (nameIndex + 1) % names.length;
    typeSpeed = 400;
  }

  setTimeout(type, typeSpeed);
}


// NAVBAR TOGGLE
document.addEventListener('DOMContentLoaded', () => {
  type();

  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
});
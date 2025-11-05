
// Animated counter for stats
function animateCounter(element) {

    const target = parseInt(element.dataset.target);
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const counter = setInterval(() => {
        current += step;
        if (current >= target) {
            element.textContent = target;
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Intersection Observer for stats animation
const observerOptions1 = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};
const observer1 = new IntersectionObserver((entries) => {
    const entry1 = entries[0]
    if (entry1.isIntersecting) {
        const statNumbers = entry1.target.querySelectorAll('.stat-number1');
        statNumbers.forEach(number => {
            if (!number.classList.contains('animated')) {
                number.classList.add('animated');
                animateCounter(number);
            }
        });
    }

}, observerOptions1);
const statsSection1 = document.querySelector('.stat-card');
if (statsSection1) {
    observer1.observe(statsSection1);
}





const observerOptions2 = {
    threshold: 0.5,
    rootMargin: '0px 0px -20px 0px'
};
const observer2 = new IntersectionObserver((entries) => {
    const entry = entries[0]
    if (entry.isIntersecting) {
        const statNumbers = entry.target.querySelectorAll('.stat-number2');
        statNumbers.forEach(number => {
            if (!number.classList.contains('animated')) {
                number.classList.add('animated');
                animateCounter(number);
            }
        });
    }

}, observerOptions2);
const statsSection2 = document.querySelector('.stat-card2');
if (statsSection2) {
    observer2.observe(statsSection2);
}





const observerOptions3 = {
    threshold: 0.5,
    rootMargin: '0px 0px -70px 0px'
};
const observer3 = new IntersectionObserver((entries) => {
    const entry = entries[0]
    if (entry.isIntersecting) {
        const statNumbers = entry.target.querySelectorAll('.stat-number3');
        statNumbers.forEach(number => {
            if (!number.classList.contains('animated')) {
                number.classList.add('animated');
                animateCounter(number);
            }
        });
    }

}, observerOptions3);
const statsSection3 = document.querySelector('.stat-card3');
if (statsSection3) {
    observer3.observe(statsSection3);
}




const observerOptions4 = {
    threshold: 0.5,
    rootMargin: '0px 0px -70px 0px'
};
const observer4 = new IntersectionObserver((entries) => {
    const entry = entries[0]
    if (entry.isIntersecting) {
        const statNumbers = entry.target.querySelectorAll('.stat-number4');
        statNumbers.forEach(number => {
            if (!number.classList.contains('animated')) {
                number.classList.add('animated');
                animateCounter(number);
            }
        });
    }

}, observerOptions4);
const statsSection4 = document.querySelector('.stat-card4');
if (statsSection4) {
    observer4.observe(statsSection4);
}


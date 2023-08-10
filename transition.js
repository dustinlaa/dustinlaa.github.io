const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('showDown');
        } else {
            entry.target.classList.remove('showDown');
        }
    });
});
const hiddenElements = document.querySelectorAll('.hiddenDown');
hiddenElements.forEach((el) => observer.observe(el));


const observer2 = new IntersectionObserver((entries2) => {
    entries2.forEach((entry2) => {
        console.log(entry2)
        if (entry2.isIntersecting) {
            entry2.target.classList.add('showLeft');
        } else {
            entry2.target.classList.remove('showLeft');
        }
    });
});
const hiddenElements2 = document.querySelectorAll('.hiddenLeft');
hiddenElements2.forEach((el2) => observer2.observe(el2));
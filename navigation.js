
function slide() {
    const sliding = document.querySelectorAll('.slidein');

    for (let i = 0; i < sliding.length; i++) {
        const windowHeight = window.innerHeight;
        console.log(windowHeight)
        const elementTop = sliding[i].getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            sliding[i].classList.add("activeSlide");
        } else {
            sliding[i].classList.remove("activeSlide");
        }
    }
}

window.addEventListener("scroll", slide);
slide();

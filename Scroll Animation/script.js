const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxPosition);

checkBoxPosition();

function checkBoxPosition() {
    const windowHeight = window.innerHeight / 5 * 4;
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        if(boxTop < windowHeight) {
            box.classList.add("show");
        } else {
            box.classList.remove("show");
        }
    })
}

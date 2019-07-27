const changeBtn = document.querySelector('.changeBtn');
const bodyBg = document.querySelector('body');

changeBtn.addEventListener('click', changeColor);

const colors = ['yellow', 'green', 'red', '#3B5998']

function changeColor() {
    const random = Math.floor(Math.random() * colors.length);
    bodyBg.style.backgroundColor = colors[random];
}
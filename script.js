let text = document.getElementById('text');
let text2 = document.getElementById('text2');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

const containerHeight = document.querySelector('.custom-container').offsetHeight;

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    text.style.marginTop = value * 1.0 + 'px';
    text2.style.marginTop = value * 1.0 + 'px';
    leaf.style.top = value * -1.0 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill5.style.left = value * 1.5 + 'px';
    hill4.style.left = value * -1.5 + 'px';
});

let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

const containerHeight = document.querySelector('.custom-container').offsetHeight;

window.addEventListener('scroll', () => {
    let value = window.scrollY;
<<<<<<< HEAD
    text.style.marginTop = value * 1.0 + 'px';
=======
    let maxScroll = 1200; //Scroll limit

    text.style.marginTop = Math.min(value * 2.0, maxScroll) + 'px';
>>>>>>> c5831338e252569b9f580a548fafadf9cd00bb26
    leaf.style.top = value * -1.0 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill5.style.left = value * 1.5 + 'px';
    hill4.style.left = value * -1.5 + 'px';
});

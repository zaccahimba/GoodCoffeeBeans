const carousel = document.querySelector('#randomFlavorOfTheDay');
const images = document.querySelector('#coffee'); 

const next = carousel.querySelector('.next');
const prev = carousel.querySelector('.prev');
let index = 0;
let currentImage;

const image = [
    './images/butterscotch-latte.jpg',
    './images/peppermint_mocha_latte.jpg',
    './images/spicy-pumpkin-latte.jpg'
];

// TODO: create another querySelector, array, and function for the title. 

function navigate(direction) {
    index = index + direction;
    if (index < 0) {
        index = images.length - 1;
    } else if (index > images.length - 1) {
        index = 0;
    }
    currentImage = image[index];
    images.setAttribute('src', currentImage); 
    //TODO: add an .style to fix size of images
}

next.addEventListener('click', () => navigate(1)); 
prev.addEventListener('click', () => navigate(-1));






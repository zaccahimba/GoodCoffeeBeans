const carousel = document.querySelector('#randomFlavorOfTheDay');
const images = document.querySelector('#coffee'); 
const coffeeName = document.querySelector('#coffeeName');

// const next = carousel.querySelector('.next');
// const prev = carousel.querySelector('.prev');
// let index = 0;

const coffeeNames = [
    'Butterscotch Latte',
    'Peppermint Mocha',
    'Spicy Pumpkin Latte',
    'Irish Coffee',
    'Vienna Coffee',
    'Cuban Coffee',
    'Caramel Macchiato'
]


const coffeeImage = [
    './images/butterscotch-latte.jpg',
    './images/peppermint_mocha_latte.jpg',
    './images/spicy-pumpkin-latte.jpg',
    './images/irishCoffee.jpg',
    './images/viennaCoffee.jpg',
    './images/cubanCoffee.jpg',
    './images/caramel_macchiato.jpg'
];

const todayCoffee = [{
    name: 'Butterscotch Latte',
    image: './images/butterscotch-latte.jpg'
},
{ 
    name:  'Peppermint Mocha',
    image: './images/peppermint_mocha_latte.jpg'
},
{
    name: 'Spicy Pumpkin Latte',
    image: './images/spicy-pumpkin-latte.jpg'
},
{
    name:   'Irish Coffee',
    image: './images/irishCoffee.jpg'
},
{
    name: 'Vienna Coffee',
    image: './images/viennaCoffee.jpg'
},
{
    name: 'Cuban Coffee',
    image: './images/cubanCoffee.jpg'
},
{
    name: 'Caramel Macchiato',
    image: './images/caramel_macchiato.jpg'
}
]

// TODO: create another querySelector, array, and function for the title. 

function getRandomCoffee () {
    let randomCoffee = Math.floor (Math.random () * todayCoffee.length);
    return todayCoffee[randomCoffee];
}
const coffee1 = getRandomCoffee();

coffee1.name;
coffee1.image;

images.setAttribute('src', coffee1.image);
coffeeName.textContent = coffee1.name;

function navigate(direction) {
    index = index + direction;
    if (index < 0) {
        index = coffeeNames.length - 1;
    } else if (index > coffeeName.length - 1) {
        index = 0;
    }

    images.setAttribute('src', coffeeImage[index]);
    coffeeName.textContent = coffeeNames[index];
};



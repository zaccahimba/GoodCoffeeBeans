//Global variables queried from index.html
const Savebutton1 = document.querySelector('#saveC')
const Savebutton2 = document.querySelector('#save')
const modalclosebutton = document.querySelector('#close1')
const modalclosebutton2 = document.querySelector('#close2')

//Function to store the coffee form data in local storage
function storeC() {
    const coffeelog1 = cI()
    const coffeename = document.querySelector('#coffee-name')
    const date = document.querySelector('#date')
    const coffeeshop = document.querySelector('#cs-name')
    const variety = document.querySelector('#c-v')
    const price = document.querySelector('#price')
    const comments = document.querySelector('#comments')
    const brand = document.querySelector ('#c-b')
   
    const rA = []
    const modalE = {
        name: coffeename.value,
        date: date.value,
        coffeeShop: coffeeshop.value,
        brand: brand.value,
        variety: variety.value,
        price: price.value,
        comments: comments.value,
    }
    if (coffeelog1 === null) {
        rA.push(modalE)
        localStorage.setItem('form', JSON.stringify(rA))
    } else {

        for (let i = 0; i < coffeelog1.length; i++) {
            rA.push(coffeelog1[i])
        }
        rA.push(modalE)
        localStorage.setItem('form', JSON.stringify(rA))
    }
    modalclosebutton2.click()
    reload()
}

//Function to reload the webpage
function reload() {
  location.reload()
}

//Function to pull the array of coffee form information objects from local storage
function cI() {
  const log1 = JSON.parse(localStorage.getItem("form"))
  return log1
}

//Function to store the recipe in local storage
function storeR() {
  const recipeform = rI()
  const rn = document.querySelector('#recipe-name')
  const ing = document.querySelector('#ingredient-list')
  const ins = document.querySelector('#instructions-text')
  const recipes = JSON.parse(localStorage.getItem('recipes'))
  const rA = []
  const modalE = {
      name: rn.value,
      ingredients: ing.value,
      instructions: ins.value
  }
  if (recipeform === null) {
      rA.push(modalE)
      localStorage.setItem('recipes', JSON.stringify(rA))
  } else {

      for (let i = 0; i < recipeform.length; i++) {
          rA.push(recipeform[i])
      }
      rA.push(modalE)
      localStorage.setItem('recipes', JSON.stringify(rA))
  }
  modalclosebutton.click()
  reload()
}

//Function to pull the array of recipe information objects from local storage
function rI() {
  const log2 = JSON.parse(localStorage.getItem("recipes"))
  return log2
}

// Event listeners for the relevant buttons
Savebutton1.addEventListener('click', storeC)
Savebutton2.addEventListener('click', storeR)


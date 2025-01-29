// Global variables queried from coffee_list.html
const sb = document.querySelector('#save')
const cb = document.querySelector('#close')
const del = document.querySelector('#delete-msg')
const deleteIt = document.querySelector('#del-yes')
const cb2 = document.querySelector('#no')

// Function to call filled coffee forms from local storage
function cI() {
    const log1 = JSON.parse(localStorage.getItem("form"))
    return log1
  }

// Function to build the coffee cards and append them to the DOM
function buildC() {
    let logs = cI()
    if (logs === null) {
        return 
    } else {
    for (i = 0; i < logs.length; i++) {
        const name = logs[i].name
        const date = logs[i].date
        const shop = logs[i].coffeeShop
        const brand = logs[i].brand
        const beanVar = logs[i].variety
        const price = logs[i].price
        const comments = logs[i].comments
        const sec1 = document.getElementById('s1')
        const cb = document.createElement('div')
        cb.classList.add('card')
        cb.classList.add('border-light')
        cb.classList.add('m-2')
        cb.classList.add('text-center')
        cb.setAttribute('style', 'width: 20rem; max-height: fit-content;')
        const h = document.createElement('h4')
        h.classList.add('card-header')
        h.textContent = name
        const b = document.createElement('div')
        b.classList.add('card-body')
        const h5 = document.createElement('h5')
        h5.classList.add('card-title')
        h5.textContent = date
        const ul = document.createElement('ul')
        ul.classList.add('list-group')
        ul.classList.add('list-group-flush')
        const li1 = document.createElement('li')
        li1.classList.add('list-group-item')
        li1.textContent = `Coffee Shop: ${shop}`
        const li2 = document.createElement('li')
        li2.classList.add('list-group-item')
        li2.textContent = `Coffee Brand: ${brand}`
        const li3 = document.createElement('li')
        li3.classList.add('list-group-item')
        li3.textContent = `Coffee Bean Variety: ${beanVar}`
        const li4 = document.createElement('li')
        li4.classList.add('list-group-item')
        li4.textContent = `Price: ${price}`
        const li6 = document.createElement('li')
        li6.classList.add('list-group-item')
        const bq = document.createElement('blockquote')
        bq.classList.add('blockquote')
        bq.classList.add('mb-0')
        bq.textContent = comments
        const arB = document.createElement('button')
        arB.setAttribute('type', 'button')
        arB.setAttribute('data-bs-toggle', 'modal')
        arB.setAttribute('data-bs-target', '#add-recipe')
        arB.classList.add('btn')
        arB.classList.add('btn-primary')
        arB.classList.add('m-1')
        arB.textContent = 'Add Recipe'
        b.appendChild(h5)
        ul.appendChild(li1)
        ul.appendChild(li2)
        ul.appendChild(li3)
        ul.appendChild(li4)
        ul.appendChild(li6)
        b.appendChild(ul)
        b.appendChild(arB)
        cb.appendChild(h)
        cb.appendChild(b)
        sec1.appendChild(cb)
    }
}
}
buildC()

// Function to store the completed recipe forms if the user wants to add a recipe from a coffee card
function storeR() {
    const rn = document.querySelector('#recipe-name')
    const ing = document.querySelector('#ingredient-list')
    const ins = document.querySelector('#instructions-text')
    const recipes = rI()
    const rA = []
    const modalE = {
        name: rn.value,
        ingredients: ing.value,
        instructions: ins.value
    }
    if (recipes === null) {
        rA.push(modalE)
        localStorage.setItem('recipes', JSON.stringify(rA))
    } else {

        for (let i = 0; i < recipes.length; i++) {
            rA.push(recipes[i])
        }
        rA.push(modalE)
        localStorage.setItem('recipes', JSON.stringify(rA))
    }
    cb.click()
    reload()
}


// Function to call filled recipe forms from local storage
function rI() {
    const log2 = JSON.parse(localStorage.getItem("recipes"))
    return log2
  }

// Function to store the recipe number the user wants to delete
function storeD() {
    const ds = document.querySelector('#del-num')
    const dv = Number(ds.value)
    return dv
}

// Function to remove the recipe that the user has chosen to delete from the local storage array
function deleteRecipe() {
    const value = storeD()
    const newV = value - 1
    let recs = rI()
    const rArray = []
    for (i = 0; i < recs.length; i++) {
        const item = recs[i]
        rArray.push(item)
    }
    rArray.splice(newV, 1)
    localStorage.setItem('recipes', JSON.stringify(rArray))
    cb2.click()
    reload()
}

// Function to build the recipe cards and append them to the DOM
function buildR() {
    let logs2 = rI()
    if (logs2 === null) {
        return
    } else {
    for (i = 0; i < logs2.length; i++) {
        const j = i + 1
        const name = logs2[i].name
        const ingredients = logs2[i].ingredients
        const instructions = logs2[i].instructions
        const sec2 = document.querySelector('#s2')
        const cb = document.createElement('div')
        cb.classList.add('card')
        cb.classList.add('border-light')
        cb.classList.add('m-2')
        cb.setAttribute('style', 'width: 20rem; max-height: fit-content;')
        const h = document.createElement('h4')
        h.classList.add('card-header')
        h.textContent = `${j}.  ${name}`
        const b = document.createElement('div')
        b.classList.add('card-body')
        const ul = document.createElement('ul')
        ul.classList.add('list-group')
        ul.classList.add('list-group-flush')
        const li1 = document.createElement('li')
        li1.classList.add('list-group-item')
        const pre1 = document.createElement('pre')
        pre1.textContent = ingredients
        const li2 = document.createElement('li')
        li2.classList.add('list-group-item')
        const pre2 = document.createElement('pre')
        pre2.textContent = instructions
        cb.appendChild(h)
        cb.appendChild(b)
        b.appendChild(ul)
        ul.appendChild(li1)
        li1.appendChild(pre1)
        ul.appendChild(li2)
        li2.appendChild(pre2)
        sec2.appendChild(cb)
    }
}
}

buildR()

// Function to trigger a browser page reload
function reload() {
    location.reload()
}

// Event listeners for the relevant buttons
del.addEventListener('click', storeD)
deleteIt.addEventListener('click', deleteRecipe)
sb.addEventListener('click', storeR)
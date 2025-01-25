// const addRec = document.querySelectorAll(`#a${formV}`)
// const viewRec = document.querySelectorAll(`#v${formV}`)
const sb = document.querySelector('#save')
const cb = document.querySelector('#close')
const db = document.querySelector('#delete')


function cI() {
    const log1 = JSON.parse(localStorage.getItem("form"))
    return log1
  }

function buildC() {
    let logs = cI()
    for (i = 0; i < logs.length; i++) {
        const name = logs[i].name
        const date = logs[i].date
        const shop = logs[i].coffeeShop
        const brand = logs[i].brand
        const beanVar = logs[i].variety
        const price = logs[i].price
        const picture = logs[i].image
        const comments = logs[i].comments
        const main = document.querySelector('#s1')
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
        const li5 = document.createElement('li')
        li5.classList.add('list-group-item')
        li5.textContent = `Picture URL: ${picture}`
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
        arB.setAttribute('id', `a${i}`)
        arB.classList.add('btn')
        arB.classList.add('btn-primary')
        arB.classList.add('m-1')
        arB.textContent = 'Add Recipe'
        // const vrB = document.createElement('button')
        // vrB.setAttribute('type', 'button')
        // vrB.setAttribute('data-bs-toggle', 'modal')
        // vrB.setAttribute('data-bs-target', '#view-recipe')
        // vrB.setAttribute('id', `v${i}`)
        // vrB.classList.add('btn')
        // vrB.classList.add('btn-primary')
        // vrB.classList.add('m-1')
        // vrB.textContent = 'View Recipe'
        cb.appendChild(h)
        cb.appendChild(b)
        b.appendChild(h5)
        b.appendChild(ul)
        ul.appendChild(li1)
        ul.appendChild(li2)
        ul.appendChild(li3)
        ul.appendChild(li4)
        ul.appendChild(li5)
        ul.appendChild(li6)
        b.appendChild(arB)
        // b.appendChild(vrB)
        main.appendChild(cb)
    }
}
buildC()

const rA = []

function storeR() {
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
    buildR()
}

function rI() {
    const log2 = JSON.parse(localStorage.getItem("recipes"))
    return log2
  }

function buildR() {
    let logs2 = rI()
    for (i = 0; i < logs2.length; i++) {
        const name = logs2[i].name
        const ingredients = logs2[i].ingredients
        const instructions = logs2[i].instructions
        const main = document.querySelector('#s2')
        const cb = document.createElement('div')
        cb.classList.add('card')
        cb.classList.add('border-light')
        cb.classList.add('m-2')
        cb.setAttribute('style', 'width: 20rem; max-height: fit-content;')
        const h = document.createElement('h4')
        h.classList.add('card-header')
        h.textContent = name
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
        const db = document.createElement('button')
        db.classList.add('btn')
        db.classList.add('btn-outline-danger')
        db.setAttribute('id', 'delete')
        db.textContent = 'Delete'
        cb.appendChild(h)
        cb.appendChild(b)
        b.appendChild(ul)
        b.appendChild(db)
        ul.appendChild(li1)
        li1.appendChild(pre1)
        ul.appendChild(li2)
        li2.appendChild(pre2)
        main.appendChild(cb)
    }
}
buildR()
// function delR() {
//     const di = event.target.parentNode
//     di.setAttribute('style', 'display: none')
// }


sb.addEventListener('click', storeR)
// db.addEventListener('click', delR)
// addRec.addEventListenr('click', addRecipe)
// viewRec.addEventListenr('click', viewRecipe)
// const forms = []
// const info = {name: 'Espresso', date: '1/25/25', coffeeShop: 'Scooters', brand: 'Folgers', variety: 'Columbian', price: '$7', image: 'n/a', comments: 'It was very delicious.'}
// forms.push(info)
// localStorage.setItem('form', JSON.stringify(forms))
// const rec = []
// const reci = {name: 'Mocha Breve', ingredients: '-coffee -heavy cream -chocolate syrup', instructions: 'Make coffee and blend it all together.'}
// rec.push(reci)
// localStorage.setItem('recipes', JSON.stringify(rec))
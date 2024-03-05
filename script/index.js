import { allProducts } from "../allProducts.js"

let products = allProducts


// Table

const table = document.createElement('table')
const thead = document.createElement('thead')
const tbody = document.createElement('tbody')

table.setAttribute('width', '100%')
table.setAttribute('border', '1px')

table.appendChild(thead)
table.appendChild(tbody)

const theadRow = document.createElement('tr')
thead.appendChild(theadRow)

const tableHeading = ['S/N', 'Name of Product', 'Description', 'Price']


tableHeading.forEach(heading => {
    const th = document.createElement('th')
    th.innerText = heading
    theadRow.appendChild(th)
})
const displayProducts = () => {
    products.forEach((product, index) => {
        const tbodyRow = document.createElement('tr')
        tbodyRow.className = 'row'

        Object.keys(product).forEach(key => {
            const td = document.createElement('td')
            // product[key] - is used to get the value from the product using the key
            td.innerText = key === 'id' ? index + 1 : product[key]
            tbodyRow.appendChild(td)
        })
        const deleteBtn = document.createElement('button')
        deleteBtn.innerText = ' delete'
        tbodyRow.appendChild(deleteBtn)

        deleteBtn.addEventListener('click', () => { deleteRow(product.id) })

        tbody.appendChild(tbodyRow)
    })

}

displayProducts()

const removeDisplayProduct = () => {
    const tableRow = document.querySelectorAll('.row')

    tableRow.forEach(row => {
        tbody.removeChild(row)
    })
}

const deleteRow = (id) => {
    products = products.filter(product => product.id !== id)
    removeDisplayProduct()
    displayProducts()
}


document.body.appendChild(table)


//form 

const form = document.createElement('form')

const productNameContainer = document.createElement('div')
const productNameLabel = document.createElement('label')
productNameLabel.innerText = 'Name of Product'
const productNameInput = document.createElement('input')
productNameInput.type = 'text'
productNameInput.className = 'name'
productNameContainer.appendChild(productNameLabel)
productNameContainer.appendChild(productNameInput)
form.appendChild(productNameContainer)

const productDescriptionContainer = document.createElement('div')
const productDescriptionLabel = document.createElement('label')
productDescriptionLabel.innerText = 'Description of Product'
const productDescriptionInput = document.createElement('textarea')
productDescriptionInput.className = 'description'
productDescriptionContainer.appendChild(productDescriptionLabel)
productDescriptionContainer.appendChild(productDescriptionInput)
form.appendChild(productDescriptionContainer)

const productPriceContainer = document.createElement('div')
const productPriceLabel = document.createElement('label')
productPriceLabel.innerText = 'Price of Product'
const productPriceInput = document.createElement('input')
productPriceInput.type = 'number'
productPriceInput.className = 'price'
productPriceContainer.appendChild(productPriceLabel)
productPriceContainer.appendChild(productPriceInput)
form.appendChild(productPriceContainer)

const errMsg = document.createElement('p')
form.appendChild(errMsg)

const submitBtn = document.createElement('button')
submitBtn.innerText = 'Add Product'
submitBtn.type = 'submit'
form.appendChild(submitBtn)


document.body.appendChild(form)

const addProduct = () => {
    errMsg.innerText = ''
    if (productNameInput.value === '' || productDescriptionInput.value === '' || productPriceInput.value === '') {
        errMsg.innerText = 'All fields must be filled'
    } else {
        const data = {
            id: products.length + 1,
            name: productNameInput.value,
            description: productDescriptionInput.value,
            price: productPriceInput.value
        }

        products.push(data)

        productNameInput.value = ''
        productDescriptionInput.value = ''
        productPriceInput.value = ''

        console.log(data)
        console.log(products)
        removeDisplayProduct()
        displayProducts()

    }
}

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    addProduct()
})








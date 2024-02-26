let products = [

    {
        id: 2,
        name: 'Washing Machine',
        description: 'For dry cleaning clothes and beddings',
        price: '500'
    },
    {
        id: 3,
        name: 'Screen',
        description: 'For viewing content',
        price: '300'
    },
    {
        id: 4,
        name: '	Keyboard',
        description: 'Typing',
        price: '50'
    },
    {
        id: 5,
        name: 'Phone',
        description: 'Making Calls',
        price: '1150'
    },
    {
        id: 6,
        name: 'Marker',
        description: 'Writing',
        price: '50'
    },
    {
        id: 7,
        name: 'Table',
        description: 'Placing items',
        price: '50'
    },
    {
        id: 8,
        name: 'Chair',
        description: 'Sitting',
        price: '5'
    },
    {
        id: 9,
        name: 'Cap',
        description: 'For providing shade',
        price: '2'
    },
    {
        id: 10,
        name: 'Electricity',
        description: 'For providing power',
        price: '500'
    },
]


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

products.forEach((product, index) => {
    const tbodyRow = document.createElement('tr')

    Object.keys(product).forEach(key => {
        const td = document.createElement('td')
        // product[key] - is used to get the value from the product using the key
        td.innerText = key === 'id' ? index + 1 : product[key]
        tbodyRow.appendChild(td)
    })
    tbody.appendChild(tbodyRow)
})



document.body.appendChild(table)
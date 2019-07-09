const root = document.getElementById('root')

fetch('./assdata.json')
    .then(res => {
        return res.json()
    })
    .then(data => {
        for (const columnName in data) {
            const cell = createCellWith(columnName)

            const columnObject = document.createElement('div')
            columnObject.className = 'column'
            columnObject.appendChild(cell)
            root.appendChild(columnObject)

            for (const row in data[columnName]) {
                const cell = createCellWith(data[columnName][row])
                columnObject.appendChild(cell)
            }
        }
    })


function createCellWith(content) {
    const parent = document.createElement('div')
    parent.className = 'cell'
    const child = document.createTextNode(content)
    parent.appendChild(child)
    return parent
}
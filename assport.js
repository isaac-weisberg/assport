const root = document.getElementById('root')

fetch('./assdata.json')
    .then(res => {
        return res.json()
    })
    .then(data => {
        const primeRow = "%%"
        const firstKey = Object.keys(data)[0]
        const keysInsideFirstKey = Object.keys(data[firstKey])
        const rowKeysColumn = [primeRow].concat(keysInsideFirstKey)
        const otherColumns = Object.keys(data)
            .map(key => {
                return Object.keys(data[key])
                    .map(rowKey => {
                        return data[key][rowKey]
                    })
            })

        const columns = [rowKeysColumn].concat(otherColumns)
        return columns
    })
    .then(columns => {
        for (const column of columns) {
            const columnObject = createColumn()
            for (const row of column) {
                const cell = createCellWith(row)
                columnObject.appendChild(cell)
            }
            root.appendChild(columnObject)
        }
    })

function createColumn() {
    const columnObject = document.createElement('div')
    columnObject.className = 'column'
    return columnObject
}

function createCellWith(content) {
    const parent = document.createElement('div')
    parent.className = 'cell'
    const child = document.createTextNode(content)
    parent.appendChild(child)
    return parent
}
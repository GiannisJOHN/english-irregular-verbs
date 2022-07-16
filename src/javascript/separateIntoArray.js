

function separateIntoArray(categoryName, theObject) {
    let words = []
    for (let element of Object.values(theObject)) {
        if (element.category == categoryName) {
            words.push(element)
        }
    }
    return words
}

export default separateIntoArray
module.exports = {
  checkExistAndRemove: (array, element) => {
    const index = array.findIndex(_element => _element === element)
    if (index > -1) array.splice(index, 1)
    return index > -1
  },
  matchAndRemove: (array, matchText) => {
    const index = array.findIndex(_element => _element.includes(matchText))
    const matchedElement = array[index]
    if (matchedElement !== undefined) array.splice(index, 1)
    return matchedElement
  },
}

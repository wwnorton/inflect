'use strict'

module.exports.removeElement = (el, keepChildren) => {
    return new Promise((resolve, reject) => {
        if (keepChildren) {
            while (el.firstChild) {
                el.parentNode.insertBefore(el.firstChild, el)
            }
        }
        el.parentNode.removeChild(el)
        resolve()
    })
}
import { restaurant } from "./globals"

export const menu = (function() {

    const renderMenu = function() {
        restaurant.innerHTML = ''
        const menuContainer = document.createElement('div')

        const tmp = document.createElement('p')
        tmp.innerHTML = 'menupage'
        menuContainer.append(tmp)
        restaurant.append(menuContainer)
    }

    return {renderMenu}
})();

const menuItem = function(itemName, image) {
    const item = document.createElement('div')
    item.className = 'dish-container'
}
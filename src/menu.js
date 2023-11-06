import { restaurant } from "./globals"

export const menu = (function() {

    //menu item factory
    const addMenuItem = function(itemName, imagePath, description) {
        const item = document.createElement('div')
        item.className = 'dish-container'
    
        const name = document.createElement('h3')
        name.innerHTML = itemName
        item.append(name)
    
        const img = document.createElement('img')
        img.setAttribute('src', imagePath)
        img.setAttribute('alt', itemName)
        item.append(img)

        const desc = document.createElement('p')
        desc.innerHTML = description
        item.append(desc)
        
        return item
    }

    //render the menu to html
    const renderMenu = function() {
        restaurant.innerHTML = ''
        const menuContainer = document.createElement('div')
    
        for (let index = 0; index < menuList.length; index++) {
            menuContainer.append(menuList[index])
        }
        console.log(menuContainer)
        restaurant.append(menuContainer)
    }

    //list of meu items
    const menuList = [
        addMenuItem('test', '.././src/assets/images/res_pic.jpg', 'testing desc'),
        addMenuItem('another test', '.././src/assets/images/res_pic.jpg', 'anopther test for this')
]

    return {renderMenu}

})();
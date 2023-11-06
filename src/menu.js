import { restaurant } from "./globals"

export const menu = (function() {

    //menu item factory
    const addMenuItem = function(itemName, price, imagePath, description) {
        const item = document.createElement('div')
        item.className = 'dish-container'
    
        const title = document.createElement('h3')
        title.innerHTML = `${itemName} ($${price})`
        item.append(title)
    
        const itemImgContainer = document.createElement('div')
        itemImgContainer.className = 'item-img-container'


        const img = document.createElement('img')
        img.setAttribute('src', imagePath)
        img.setAttribute('alt', itemName)
        img.className = 'item-img'
        itemImgContainer.append(img)
        item.append(itemImgContainer)

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
        addMenuItem('test', 4.99, '.././src/assets/images/res_pic.jpg', 'testing desc'),
        addMenuItem('another test', 5.45, '.././src/assets/images/res_pic.jpg', 'anopther test for this')
]

    return {renderMenu}

})();
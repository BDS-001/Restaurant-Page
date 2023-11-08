import { restaurant } from "./globals"

export const homepage = (function() {
    const renderHomepage = function() {
        restaurant.innerHTML = ''
        const homepage = document.createElement('div')
        homepage.className = 'homepage'

        const header = document.createElement('h1')
        header.innerHTML = 'The Code & Byte Bistro Grand Opening!'
        homepage.append(header)
    
        const image = document.createElement('img')
        image.setAttribute('src', '.././src/assets/images/res_pic.jpg')
        image.setAttribute('alt', 'restaurant')
        homepage.append(image)
    
        const description = document.createElement('p')
        description.innerHTML = 'this restaurant is so great is has really good food. the staff are nice, the decore is nice, everything in the place is nice!'
        homepage.append(description)
    
        restaurant.append(homepage)
    }

    return {renderHomepage}
})()
import { restaurant } from "./globals";

export const about = (function() {

    const renderAbout = function() {
        restaurant.innerHTML = ''
        const aboutContainer = document.createElement('div')

        const tmp = document.createElement('p')
        tmp.innerHTML = 'aboutpage'
        aboutContainer.append(tmp)
        restaurant.append(aboutContainer)
    }

    return {renderAbout}
})();
import { restaurant } from "./globals";

export const about = (function() {

    const renderAbout = function() {
        restaurant.innerHTML = ''
        const aboutContainer = document.createElement('div')

        const tmp = document.createElement('p')
        tmp.innerHTML = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, expedita quisquam minus iusto quo at, suscipit ea, odit amet quia rem est ut hic consequuntur error. Molestiae quasi id maxime.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, expedita quisquam minus iusto quo at, suscipit ea, odit amet quia rem est ut hic consequuntur error. Molestiae quasi id maxime.'
        aboutContainer.append(tmp)
        restaurant.append(aboutContainer)
    }

    const _contact = function() {
        const contact = document.createElement('div')

        const phone = document.createElement('h3')
        phone.innerHTML = '999-999-9999'
        contact.append(phone)

        const email = document.createElement('h3')
        email.innerHTML = 'contact@bitandbytebistro.com'
        contact.append(phone)
    }

    return {renderAbout}
})();
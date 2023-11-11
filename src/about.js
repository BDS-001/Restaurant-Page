import { restaurant } from "./globals";

export const about = (function() {

    const renderAbout = function() {
        restaurant.innerHTML = ''
        const aboutContainer = document.createElement('div')
        aboutContainer.className = 'about-container'

        const tmp = document.createElement('p')
        tmp.innerHTML = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, expedita quisquam minus iusto quo at, suscipit ea, odit amet quia rem est ut hic consequuntur error. Molestiae quasi id maxime.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, expedita quisquam minus iusto quo at, suscipit ea, odit amet quia rem est ut hic consequuntur error. Molestiae quasi id maxime.'
        aboutContainer.append(tmp)
        aboutContainer.append(_contact())
        restaurant.append(aboutContainer)
    }

    const _contact = function() {
        const contact = document.createElement('div')

        const title = document.createElement('h1')
        title.innerHTML = 'Contact Information'
        contact.append(title)

        const phone = document.createElement('h3')
        phone.innerHTML = 'Phone: 999-999-9999'
        contact.append(phone)

        const email = document.createElement('h3')
        email.innerHTML = 'Email: contact@bitandbytebistro.com'
        contact.append(email)

        const address = document.createElement('h3')
        address.innerHTML = 'Address: 123 realstreet rd'
        contact.append(address)

        return contact
    }

    return {renderAbout}
})();
export default function header() {
    const body = document.querySelector('body')
    const headerBar = document.createElement('div')
    headerBar.className = 'header'

    const homepage = document.createElement('button')
    homepage.id = 'home'
    homepage.innerHTML = 'HOME'
    const menu = document.createElement('button')
    menu.id = 'menu'
    menu.innerHTML = 'MENU'
    const about = document.createElement('button')
    about.id = 'about'
    about.innerHTML = 'ABOUT'

    headerBar.append(homepage)
    headerBar.append(menu)
    headerBar.append(about)

    body.prepend(headerBar)
}
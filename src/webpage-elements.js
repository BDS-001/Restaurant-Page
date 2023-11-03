export default function restaurantHomepage() {
    const webpage = document.querySelector('#content')
    console.log(webpage)

    const header = document.createElement('h1')
    header.innerHTML = 'The Code & Byte Bistro Grand Opening!'
    webpage.append(header)

    const image = document.createElement('img')
    image.setAttribute('src', '.././src/assets/images/res_pic.jpg')
    image.setAttribute('alt', 'restaurant')
    webpage.append(image)

    const description = document.createElement('p')
    description.innerHTML = 'this restaurant is so great is has really good food. the staff are nice, the decore is nice, everything in the place is nice!'
    webpage.append(description)

}
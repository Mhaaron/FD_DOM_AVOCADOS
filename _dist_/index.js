/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
/* window
    .fetch(URL)
    .then(respuesta => respuesta.json())
    .then(responseData => {
        responseData.data.forEach(item => {
            console.log(item)
        });
    }) */


const BASEURL = 'https://platzi-avo.vercel.app';
const APPNODE = document.querySelector('#app')

/* Función para el formato de moneda seleccionada */
const formatPrice = (price) => {
    const newPrice = new window.Intl.NumberFormat('en-EN', {
        style: "currency",
        currency: 'USD'
    }).format(price)

    return newPrice
}

/* INTL (Internationalization)
1.- Formato fechas
2.- Formato monedas
*/

const response = await window.fetch(`${BASEURL}/api/avo`)
const responseJson = await response.json()

const arrayItems = []

responseJson.data.forEach(element => {
    const image = document.createElement('img')
    image.src = `${BASEURL}${element.image}`
    image.className = 'bg-cover'

    const title = document.createElement('h2')
    /* Aplicando clases de Tailwind CSS */
    title.className = 'text-3xl text-green-800 font-serif'

    if (element.name === 'Maluma Hass Avocado') {
        title.textContent = 'Morso Has Avocado'
    } else {
        title.textContent = element.name
    }


    
    /* Otras maneras */
    /* title.style.fontSize = '3rem' */
    /* title.style = 'font-size: 2rem;' */

    const price = document.createElement('div')
    price.className = 'text-3xl text-green-800 font-serif'
    price.textContent = formatPrice(element.price)

    const container = document.createElement('div')
    container.append(image, title, price)
    container.className = 'shadow-md w-64 h-96 p-10'

    arrayItems.push(container)
})

APPNODE.className = 'grid grid-flow-col grid-cols-3 grid-rows-3 gap-4 justify-items-center'

APPNODE.append(...arrayItems)

export function drawAdvertisement (nodeElement, advertisement) {
    
    const sale = advertisement.isSale?'Venta':'Compra'
    const photo = advertisement.photo?`<img src="${advertisement.photo}" alt="Foto de ${advertisement.name}">`:'';
    const username = advertisement.user.username

    const date = advertisement.updatedAt
    const year = date[0]+date[1]+date[2]+date[3]
    const month = date[5]+date[6]
    const day = date[8]+date[9]
    
    nodeElement.innerHTML = `
    <article>
        <h2>${advertisement.title}</h2>
        ${photo}
        <p>${advertisement.description}</p>
        <p>${sale}</p>
        <p>Precio: ${advertisement.price}€</p>
        <p>Creador del anuncio: ${username}</p>
        <p>Fecha de subida: ${day} - ${month} - ${year}</p>
    </article>`
}

export function drawUserAdvertisementNav (nodeElement) {
    const newNav = document.createElement ('nav')

    newNav.innerHTML = `<button class="removeButton">Eliminar Anuncio</button>`

    nodeElement.appendChild (newNav)
}
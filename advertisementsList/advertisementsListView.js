
export function drawAdvertisements (advertisements, nodoAdvertisements) {
    advertisements.map(advertisement => {
        const newLink = document.createElement ('a')
        newLink.setAttribute ('href', `./advertisementDetail.html?id=${advertisement.id}`)
       nodoAdvertisements.appendChild(newLink)

        const newArticle = document.createElement('article');
        
        const sale = advertisement.isSale?'Venta':'Compra'
        const photo = advertisement.photo?`<img src="${advertisement.photo}" alt="Foto de ${advertisement.name}">`:'';
        
        const date = advertisement.updatedAt
        const year = date[0]+date[1]+date[2]+date[3]
        const month = date[5]+date[6]
        const day = date[8]+date[9]

        newArticle.innerHTML = `
        <h3>${advertisement.title}</h3>
        ${photo}
        <p>${advertisement.description}</p>
        <p>${sale}</p>
        <p>Precio: ${advertisement.price}€</p>
        <p>Fecha de subida: ${day} - ${month} - ${year}</p>`

        newLink.appendChild (newArticle)
    })
}

export function drawEmptyAdvertisements (nodeElement) {

    nodeElement.innerHTML = `
    <h2> Lo sentimos, ahora mismo no hay ningún anuncio </h2>`
}


export function listAdvertisements (advertisements, nodoAdvertisements) {
    advertisements.map(advertisement => {
        const newArticle = document.createElement('article');

        const sale = advertisement.sale?'Venta':'Compra'
        const photo = advertisement.photo?`<img src="${advertisement.photo}" alt="Foto de ${advertisement.name}">`:'';
        let newtags = []
        advertisement.tags.map (tag => {newtags.push(`#${tag}`)})

        newArticle.innerHTML = `
        <h3>${advertisement.name}</h3>
        <p>${sale}</p>
        <p>Precio: ${advertisement.price}</p>
        ${photo}
        <p>${newtags}</p>`

        nodoAdvertisements.appendChild (newArticle)
    })
}
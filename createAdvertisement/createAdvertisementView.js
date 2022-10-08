export function drawCreateAdvertisementForm (nodeElement) {
    nodeElement.innerHTML = ''+
    '<div id="advertisementTitleContainer">'+
    '<label for="advertisementTitle">Nombre del producto</label>'+
    '<input type="text" id="advertisementTitle" class="required" name="advertisementTitle">'+
'</div>'+
'<div id="advertisementDescriptionContainer">'+
    '<label for="advertisementDescription">Descripción</label>'+
    '<textarea type="text" id="advertisementDescription" class="required" name="advertisementDescription"></textarea>'+
'</div>'+
'<div id="advertisementPriceContainer">'+
    '<label for="advertisementPrice">Precio</label>'+
    '<input type="number" id="advertisementPrice" class="required" name="advertisementPrice">'+
'</div>'+
'<div id="advertisementSaleBuyContainer">'+
    '<div>'+
        '<legend>¿Compras o vendes?</legend>'+
    '</div>'+
    '<div id="advertisementSaleContainer">'+
        '<label for="advertisementSale">Venta</label>'+
        '<input type="radio" name="advertisementSaleBuy" id="advertisementSale">'+
    '</div>'+

    '<div id="advertisementBuyContainer">'+
        '<label for="advertisementBuy">Compra</label>'+
        '<input type="radio" name="advertisementSaleBuy" id="advertisementBuy">'+
    '</div>'+
'</div>'+
'<div id="advertisementPhotoContainer">'+
    '<label for="advertisementPhoto">Puedes añadir un link con la foto de tu producto</label>'+
    '<input type="url" id="advertisementPhoto" name="advertisementPhoto">'+
'</div>'+
'<div id="buttonContainer">'+
    '<button type="submit" disabled id="buttonAdvertisementForm">Crear Anuncio</button>'+
'</div>'
}


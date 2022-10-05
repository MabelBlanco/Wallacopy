export function drawLoginRegisterNav (navElement) {
    navElement.innerHTML = '<div><a href="./login-register.html?select=login">Entrar</a></div>'+
                            '<div><a href="./login-register.html?select=register">Registrarse</a></div>'
}

export function drawLogOut (navElement) {
    const sectionElement = document.createElement('section')
    sectionElement.innerHTML = '<button id="logOut">Cerrar Sesión</button>'
    navElement.appendChild(sectionElement)
}

export function drawCreateAdvertisement (navElement) {
    const sectionElement = document.createElement('section')
    sectionElement.innerHTML = '<a href="./createAdvertisement.html" id="createAdvertisement">Crear Anuncio</a>'
    navElement.appendChild(sectionElement)
}
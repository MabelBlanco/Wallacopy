export function drawLoginRegisterNav (navElement) {
    navElement.innerHTML = '<div><a href="./login-register.html?select=login">Entrar</a></div>'+
                            '<div><a href="./login-register.html?select=register">Registrarse</a></div>'
}

export function drawLogOut (navElement) {
    navElement.innerHTML = '<button id="logOut">Cerrar Sesión</button>'
}
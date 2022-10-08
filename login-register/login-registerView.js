export function drawLoginForm (nodeElement) {
    nodeElement.innerHTML = `
    <form class="login-register" id="login">
    <h2>Entrar</h2>
    <div class="usernameContainer">
        <label for="loginUsername">Nombre de usuario:</label>
        <input type="text" name="loginUsername" id="loginUsername">
    </div>
    <div class="passwordContainer">
        <label for="loginPassword">Contraseña:</label>
        <input type="text" name="loginPassword" id="loginPassword">
    </div>
    <button type="submit" form="login">Entrar</button>
    </form>`
}

export function drawRegisterForm (nodeElement) {
    nodeElement.innerHTML = `
    <form class="login-register" id="register">
        <h2>Registrarse</h2>
        <div class="usernameContainer">
            <label for="registerUsername">Nombre de usuario:</label>
            <input type="text" name="registerUsername" id="registerUsername">
        </div>
        <div class="passwordContainer">
            <label for="registerPassword">Contraseña:</label>
            <input type="text" name="registerPassword" id="registerPassword">
        </div>
        <div class="passwordContainer">
            <label for="registerPasswordConfirm">Confirmar contraseña:</label>
            <input type="text" name="registerPasswordConfirm" id="registerPasswordConfirm">
        </div>
        <button type="submit" disabled id="registerButton">Registrarse</button>
    </form>`
}

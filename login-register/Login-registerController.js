import { loginUser, registerUser } from "./Login-registerModel.js"
import { pubSub } from "../PubSub.js"



export class LoginController{

    constructor (nodeElement) {
        this.loginElement = nodeElement

        this.subscribeToLoginEvent()
        
    }

    subscribeToLoginEvent () {
        this.loginElement.addEventListener ('submit', async (event) => {
            event.preventDefault()

            await this.login()

            window.location.assign('./')
        })
    }

    async login () {

        try {
            const formData = new FormData (this.loginElement)
            const username = formData.get('loginUsername')
            const password = formData.get ('loginPassword')
            const token = await loginUser(username, password)
            localStorage.setItem('token', token)

        } catch (error) {
            location.reload ()
        }
    }
}

export class RegisterController {

    constructor(nodeElement) {
        this.registerElement = nodeElement

        this.subscribeToRegisterEvent ()

        this.subscribeToValidationRegister()
    }

    subscribeToRegisterEvent () {
        this.registerElement.addEventListener ('submit', async (event) => {
            event.preventDefault()

            const validation = this.validatePassword()

            if (validation) {
                await this.register()
            }
        })
    }

    async register() {
        try {
            const formData = new FormData (this.registerElement)
            const username = formData.get ('registerUsername')
            const password = formData.get ('registerPassword')
            await registerUser(username, password)
            pubSub.publish(pubSub.TOPICS.NOTIFICATION_USER, 'El usuario se ha creado correctamente')
            // And then we do login too
            const token = await loginUser(username, password)
            localStorage.setItem('token', token)

        } catch (error) {
            pubSub.publish(pubSub.TOPICS.NOTIFICATION_ERROR, 'La creación de usuario ha fallado')
            console.log (error)
        }
    }

    subscribeToValidationRegister () {
        const arrayInputs = Array.from (this.registerElement.querySelectorAll('input'))

        const registerButton = this.registerElement.querySelector('#registerButton')

        arrayInputs.forEach (input => {
            input.addEventListener ('input', () => {
                const inputsHaveValue = arrayInputs.every (input => input.value)

                if (inputsHaveValue) {
                    registerButton.removeAttribute('disabled')
                } else {
                    registerButton.setAttribute('disabled', '')
                }
            })
        })

        
    }

    validatePassword () {
        const passwordInput = this.registerElement.querySelector ('#registerPassword')
        const confirmInput = this.registerElement.querySelector ('#registerPasswordConfirm')
        const minLength = 6
        const regExp = new RegExp (/^[A-Za-z0-9]+$/g)

        if (passwordInput.value !== confirmInput.value) {
            pubSub.publish(pubSub.TOPICS.NOTIFICATION_ERROR, 'La contraseña y su confirmación no son iguales')
            return false
        } else if (passwordInput.value.length < minLength) {
            pubSub.publish(pubSub.TOPICS.NOTIFICATION_ERROR, 'La contraseña debe tener al menos 6 caracteres')
            return false
        } else if (!regExp.test(passwordInput.value)) {
            pubSub.publish (pubSub.TOPICS.NOTIFICATION_ERROR, 'La contraseña debe contener SOLO letras y números')
            return false
        } else if (!passwordInput.value.match (/\d/)){
            pubSub.publish(pubSub.TOPICS.NOTIFICATION_ERROR, 'La contraseña debe contener al menos un número')
            return false
        } else {
            return true
        }
    }
}
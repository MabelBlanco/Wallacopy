import { loginUser, registerUser } from "./Login-registerModel.js"
import { pubSub } from "../utils/PubSub.js"
import { drawLoginForm, drawRegisterForm} from "./login-registerView.js"



export class LoginController{

    constructor (nodeElement) {
        this.loginContainerElement = nodeElement.querySelector('.formContainer')
        this.spinnerElement = nodeElement.querySelector('.spinner')
        
        this.showLoginForm()
        
        this.loginElement = this.loginContainerElement.querySelector('#login')

        this.subscribeToLoginEvent()
        
    }

    showLoginForm() {
        this.spinnerElement.classList.add('displayNone')
        drawLoginForm(this.loginContainerElement)
    }

    subscribeToLoginEvent () {
        this.loginElement.addEventListener ('submit', async (event) => {
            event.preventDefault()

            this.spinnerElement.classList.remove ('displayNone')
            this.loginElement.classList.add ('displayNone')

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
        this.registerContainerElement = nodeElement.querySelector('.formContainer')
        this.spinnerElement = nodeElement.querySelector ('.spinner')
        
        this.showRegisterForm()
        
        this.registerElement = nodeElement.querySelector('#register')

        this.subscribeToRegisterEvent ()

        this.subscribeToValidationRegister()
    }

    showRegisterForm () {
        this.spinnerElement.classList.add('displayNone')
        drawRegisterForm(this.registerContainerElement)
    }

    subscribeToRegisterEvent () {
        this.registerElement.addEventListener ('submit', async (event) => {
            event.preventDefault()

            const validation = this.validatePassword()

            if (validation) {
                this.spinnerElement.classList.remove('displayNone')
                this.registerElement.classList.add ('displayNone')
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
            // Then we do login too
            const token = await loginUser(username, password)
            localStorage.setItem('token', token)
            //And redirect to index.html
            window.location.assign('./')

        } catch (error) {
            pubSub.publish(pubSub.TOPICS.NOTIFICATION_ERROR, 'La creación de usuario ha fallado')
            location.reload()
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
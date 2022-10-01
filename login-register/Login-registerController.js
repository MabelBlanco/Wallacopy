import { loginUser } from "./Login-registerModel.js"
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
    }
}
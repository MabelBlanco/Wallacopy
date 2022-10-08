import {Header} from "../header/headerController.js"
import { NotificationController } from "../notification/notificationController.js"
import { LoginController, RegisterController } from "./Login-registerController.js"

document.addEventListener ('DOMContentLoaded', () => {
    // Here we save if the user wants to login or register
    const params = new URLSearchParams(location.search)
    const selection = params.get('select')

    const headerElement = document.querySelector('header')
    const headerController = new Header (headerElement)
    
    const notificationController = new NotificationController ()
    
    
    
    if (selection === 'login') {
        const loginElement = document.querySelector('.login-registerContainer')
        const loginController = new LoginController (loginElement)
        
    } else {
        const registerElement = document.querySelector('.login-registerContainer')
        const registerController = new RegisterController (registerElement)
        
    }
})
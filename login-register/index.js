import {Header} from "../header/headerController.js"
import { NotificationController } from "../notification/notificationController.js"
import { LoginController, RegisterController } from "./Login-registerController.js"

document.addEventListener ('DOMContentLoaded', () => {

    const headerElement = document.querySelector('header')
    const headerController = new Header (headerElement)

    const loginElement = document.querySelector('#login')
    const loginController = new LoginController (loginElement)

    const registerElement = document.querySelector('#register')
    const registerController = new RegisterController (registerElement)

    const notificationController = new NotificationController ()
})
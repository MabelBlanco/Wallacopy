import {Header} from "../header/headerController.js"
import { NotificationController } from "../notification/notificationController.js"
import { LoginController } from "./Login-registerController.js"

document.addEventListener ('DOMContentLoaded', () => {

    const headerElement = document.querySelector('header')
    const headerController = new Header (headerElement)

    const loginElement = document.querySelector('#login')
    const loginController = new LoginController (loginElement)

    const notificationController = new NotificationController ()
})
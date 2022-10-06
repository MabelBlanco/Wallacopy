import {Header} from "../header/headerController.js"
import { NotificationController } from "../notification/notificationController.js"
import { pubSub } from "../PubSub.js"
import { CreateAdvertisementController } from "./CreateAdvertisementController.js"

document.addEventListener ('DOMContentLoaded', () => {

    const headerElement = document.querySelector('header')
    const headerController = new Header (headerElement)
    
    const notificationController = new NotificationController ()
    //We check the user is login
    const token = localStorage.getItem('token')

    if (token) {
        // draw form to create advertisement
        const createAdvertisementElement = document.querySelector('#createAdvertisementForm')
        const createAdvertisementController = new CreateAdvertisementController(createAdvertisementElement)
    } else {
        pubSub.publish(pubSub.TOPICS.NOTIFICATION_ERROR, 'Lo sentimos, pero debes estar logado para acceder a esta función')
        window.location.assign('./')
    }
})
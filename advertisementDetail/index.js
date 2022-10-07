import {Header} from "../header/headerController.js"
import { NotificationController } from "../notification/notificationController.js"
import { AdvertisementDetailController } from "./AdvertisementDetailController.js"

document.addEventListener('DOMContentLoaded', () => {
    
    const headerElement = document.querySelector('header')
    const headerController = new Header (headerElement)

    const notificationController = new NotificationController ()

    const params = new URLSearchParams(location.search)
    const advertisementId = params.get('id')

    const advertisementDetailElement = document.querySelector('.advertisementDetail')
    const advertisementDetailController = new AdvertisementDetailController (advertisementDetailElement, advertisementId)


})
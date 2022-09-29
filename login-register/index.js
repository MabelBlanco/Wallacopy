import {Header} from "../header/headerController.js"

document.addEventListener ('DOMContentLoaded', () => {

    const headerElement = document.querySelector('header')
    const headerController = new Header (headerElement)
})
import { controllerListAdvertisements } from "./advertisements/advertisementsController.js";

const titleElement = document.head.children[3]
const bodyElement = document.body

const newParraf = document.createElement ('p');
newParraf.innerHTML = `<h1> ${titleElement.textContent} </h1>`
bodyElement.appendChild (newParraf)

document.addEventListener('DOMContentLoaded', () => {
    
    const advertisementsListElement = document.querySelector('.advertisementsList')
  
    const advertisementsListController = controllerListAdvertisements(advertisementsListElement)
  
  })
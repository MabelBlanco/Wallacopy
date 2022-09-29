import { controllerListAdvertisements } from "./advertisements/advertisementsController.js";
import { Header } from "./header/headerController.js";

document.addEventListener('DOMContentLoaded', () => {
  
  const headerElement = document.querySelector('header')
  const headerController = new Header (headerElement)
  
  const advertisementsListElement = document.querySelector('.advertisementsList')
  const advertisementsListController = controllerListAdvertisements(advertisementsListElement)
  
})
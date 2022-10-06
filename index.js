import { AdvertisementsListController } from "./advertisementsList/advertisementsListController.js";
import { Header } from "./header/headerController.js";

document.addEventListener('DOMContentLoaded', () => {
  
  const headerElement = document.querySelector('header')
  const headerController = new Header (headerElement)
  
  const advertisementsListElement = document.querySelector('.advertisementsList')
  const advertisementsListController = new AdvertisementsListController (advertisementsListElement)
  
})
import { getAdvertisements } from "./advertisementsListModel.js";
import { drawAdvertisements } from "./advertisementsListView.js";

export class AdvertisementsListController {
    constructor (nodeElement) {
        this.sectionAdvertisementsElement = nodeElement
        this.spinnerElement = this.sectionAdvertisementsElement.querySelector('.spinner')

        this.showAdvertisements()
        
    }

    async showAdvertisements () {
        const advertisements = await getAdvertisements()

        this.spinnerElement.style.display = 'none'

        drawAdvertisements (advertisements, this.sectionAdvertisementsElement)
    }
}

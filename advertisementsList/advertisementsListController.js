import { getAdvertisements } from "./advertisementsListModel.js";
import { drawAdvertisements, drawEmptyAdvertisements } from "./advertisementsListView.js";

export class AdvertisementsListController {
    constructor (nodeElement) {
        this.sectionAdvertisementsElement = nodeElement
        this.spinnerElement = this.sectionAdvertisementsElement.querySelector('.spinner')

        this.showAdvertisements()
        
    }

    async showAdvertisements () {
        const advertisements = await getAdvertisements()
        
        this.spinnerElement.style.display = 'none'
        
        const testAdvertisement = advertisements[0]
        if (testAdvertisement) {

            drawAdvertisements (advertisements, this.sectionAdvertisementsElement)
        } else {
            drawEmptyAdvertisements(this.sectionAdvertisementsElement)
        }

    }
}

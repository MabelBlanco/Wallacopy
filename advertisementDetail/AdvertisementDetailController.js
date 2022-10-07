import { getAdvertisementId } from "./advertisementDetailModel.js"
import { drawAdvertisement } from "./advertisementDetailView.js"

export class AdvertisementDetailController {
    constructor(nodeElement, paramId) {
        this.advertisementDetailElement = nodeElement

        this.advertisementId = paramId

        this.showAdvertisement()
    }

    async showAdvertisement () {
        const advertisement = await getAdvertisementId (this.advertisementId)
        
        if (advertisement){
            drawAdvertisement(this.advertisementDetailElement, advertisement)

        } else {
            window.location.assign('./')
        }
    }
}
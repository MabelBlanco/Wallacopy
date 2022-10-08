import { decodeToken } from "../utils/decodeToken.js"
import { pubSub } from "../utils/PubSub.js"
import { deleteAdvertisement, getAdvertisementId } from "./advertisementDetailModel.js"
import { drawAdvertisement, drawUserAdvertisementNav } from "./advertisementDetailView.js"

export class AdvertisementDetailController {
    constructor(nodeElement, paramId) {
        this.advertisementDetailElement = nodeElement

        this.advertisementId = paramId

        this.showAdvertisement()
    }

    async showAdvertisement () {
        const advertisement = await getAdvertisementId (this.advertisementId)
        this.advertisement = advertisement
        
        if (advertisement){
            drawAdvertisement(this.advertisementDetailElement, advertisement)
            //We test if the actual user is the same that the advertisement creator
            const sameUser = this.testUserCreator()
            
            if (sameUser) {
                drawUserAdvertisementNav(this.advertisementDetailElement)
                this.subscribeToRemoveButton()
            }

        } else {
            window.location.assign('./')
        }
    }

    testUserCreator () {
        const userAdvertisementId = this.advertisement.userId

        const tokenActualUser = localStorage.getItem('token')

        if (tokenActualUser) {
            const tokenData = decodeToken(tokenActualUser)

            if (tokenData.userId === userAdvertisementId) {
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    }

    subscribeToRemoveButton() {
        const removeButton = this.advertisementDetailElement.querySelector ('.removeButton')

        removeButton.addEventListener('click', () => {
            this.removeAdvertisement()
        })
    }

    async removeAdvertisement() {
        const response = window.confirm('¿Seguro que quieres borrar el anuncio?')

        if (response) {
            try {
                await deleteAdvertisement(this.advertisement.id)
                pubSub.publish(pubSub.TOPICS.NOTIFICATION_USER, 'El anuncio ha sido borrado correctamente')
                window.location.assign('./')
            } catch (error) {
                pubSub.publish(pubSub.TOPICS.NOTIFICATION_ERROR, 'No se ha podido realizar el borrado del anuncio.')
            }
        }
    }


}
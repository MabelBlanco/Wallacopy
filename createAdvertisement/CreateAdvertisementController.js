import { pubSub } from "../PubSub.js"
import { drawCreateAdvertisementForm } from "./createAdvertisementView.js"
import {createAdvertisement} from "./createAdvertisementModel.js"

export class CreateAdvertisementController {
    constructor(nodeElement) {
        this.createAdvertisementFormElement = nodeElement

        this.createAdvertisementForm()

        this.validateAdvertisementForm()

        this.subscribeToCreateAdvertisement()
    }

    createAdvertisementForm() {

        const advertisementForm = drawCreateAdvertisementForm(this.createAdvertisementFormElement)
    }
    //To confirm the inputs required aren't empty.
    validateAdvertisementForm() {
        const requiredInputsArray = Array.from (this.createAdvertisementFormElement.querySelectorAll('.required'))
        const buttonAdvertisementForm = this.createAdvertisementFormElement.querySelector('#buttonAdvertisementForm')

        requiredInputsArray.forEach(input => {
            input.addEventListener('input', (event) => {
                const requiredInputsFilled = requiredInputsArray.every(input => input.value)

                if (requiredInputsFilled) {
                    buttonAdvertisementForm.removeAttribute('disabled')
                } else {
                    buttonAdvertisementForm.setAttribute('disabled', '')
                }
            })
        })
    }
    //With this, we confirm that the user choose sale or buy
    validateSale () {
        const requiredRadioArray = [
            this.createAdvertisementFormElement.querySelector('#advertisementSale'),
            this.createAdvertisementFormElement.querySelector('#advertisementBuy')]
        
        const selected = requiredRadioArray.find (radio => radio.checked)
        
        if (selected) {
            if (selected.id === 'advertisementSale') {
                return true
            } else {
                return false
            }
        } else {
            pubSub.publish(pubSub.TOPICS.NOTIFICATION_ERROR, 'Debes elegir si quieres vender o comprar')
            return 'empty'
        }
    }

    subscribeToCreateAdvertisement () {
        this.createAdvertisementFormElement.addEventListener ('submit', async (event) => {
            event.preventDefault()

            const formData = new FormData (this.createAdvertisementFormElement)
            
            const title = formData.get('advertisementTitle')
            const description = formData.get ('advertisementDescription')
            const price = formData.get('advertisementPrice')
            const photo = formData.get ('advertisementPhoto')
            const isSale = this.validateSale()

            if (isSale !== 'empty') {
                const advertisement = {title, description, price, isSale, photo}
    
                const newAdvertisement = await createAdvertisement (advertisement)
                pubSub.publish(pubSub.TOPICS.NOTIFICATION_USER, 'El anuncio ha sido creado correctamente')
                window.location.assign('./')

            }


        })
    }
}
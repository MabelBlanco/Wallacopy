import { pubSub } from "../utils/PubSub.js"

export class NotificationController {
    constructor () {

        this.subscribeNotifications()
    }

    subscribeNotifications () {
        pubSub.subscribe (pubSub.TOPICS.NOTIFICATION_ERROR, (error) => {
            this.notificationError(error)
        })

        pubSub.subscribe (pubSub.TOPICS.NOTIFICATION_USER, (info) => {
            this.notificationUser(info)
        })
    }

    notificationError(error) {
        window.alert(error)
    }

    notificationUser (info) {
        window.alert (info)
    }
}
import { pubSub } from "../PubSub.js"

export class NotificationController {
    constructor () {

        this.subscribeNotificationError()
    }

    subscribeNotificationError () {
        pubSub.subscribe (pubSub.TOPICS.NOTIFICATION_ERROR, (error) => {
            this.notificationError(error)
        })
    }

    notificationError(error) {
        window.alert(error)
    }
}
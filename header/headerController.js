import { drawLoginRegisterNav, drawLogOut } from "./headerView.js"

export class Header {

    constructor (nodeElement) {
        this.nodeHeaderElement = nodeElement
        
        this.testingTitle()

        this.showLoginRegisterNav()

        this.subscribeToLogOutEvent()
    }

    testingTitle () {
        // Test to introduce title in body with a variable.
        const titleElement = this.nodeHeaderElement.querySelector ('#title')
        titleElement.innerHTML = document.title
      }

   showLoginRegisterNav () {
    const token = localStorage.getItem ('token')
    const loginRegisterNavElement = this.nodeHeaderElement.querySelector ('#login-register-nav')

    if (!token) {
        drawLoginRegisterNav(loginRegisterNavElement)
    } else {
        drawLogOut(loginRegisterNavElement)
    }
   }

   subscribeToLogOutEvent() {
    const logOutButton = this.nodeHeaderElement.querySelector('#logOut')

    if (logOutButton) {
        logOutButton.addEventListener('click', (event) => {
            localStorage.removeItem('token')
            location.reload()
        })

    }
   }

}
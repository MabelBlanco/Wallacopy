import { drawLoginRegisterNav } from "./headerView.js"

export class Header {

    constructor (nodeElement) {
        this.nodeHeaderElement = nodeElement
        
        this.testingTitle()

        this.showLoginRegisterNav()
    }

    testingTitle () {
        // Test to introduce title in body with a variable.
        const titleElement = this.nodeHeaderElement.querySelector ('#title')
        titleElement.innerHTML = document.title
      }

   showLoginRegisterNav () {
    const token = localStorage.getItem ('token')

    if (!token) {
        const loginRegisterNavElement = this.nodeHeaderElement.querySelector ('#login-register-nav')
        drawLoginRegisterNav(loginRegisterNavElement)
    }
   } 

}
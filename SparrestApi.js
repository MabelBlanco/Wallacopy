import { pubSub } from "./PubSub.js"

class SparrestApi {

    baseUrl = 'http://localhost:8000'

    endpoints = {
        login: '/auth/login',
        register: '/auth/register',
        advertisements: '/api/advertisements'
    }

    async post(endpoint, body) {
      try {
        const token = localStorage.getItem('token')
        const response = await fetch(`${this.baseUrl}${endpoint}`, {
          method: 'POST',
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }
        })
    
        const data = await response.json()

        if (!response.ok) {
          throw new Error (data.message)
        } else {
          return data;

        }
    

      } catch (error) {
        if (error.message === 'Wrong username/password') {
          pubSub.publish (pubSub.TOPICS.NOTIFICATION_ERROR, 'Lo sentimos.\nEl nombre de usuario o la contraseña son incorrectos.')

        } else {
          pubSub.publish (pubSub.TOPICS.NOTIFICATION_ERROR, 'No se ha podido conectar con la base de datos.\nInténtelo de nuevo más tarde')

        }
      }
        
      }
}

export const sparrestApi = new SparrestApi()
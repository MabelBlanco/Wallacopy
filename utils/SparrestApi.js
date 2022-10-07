import { pubSub } from "./PubSub.js"

class SparrestApi {

    baseUrl = 'http://localhost:8000'

    endpoints = {
        login: '/auth/login',
        register: '/auth/register',
        advertisements: '/api/advertisements'
    }

    async get (endpoint) {
      try {
        const response = await fetch (`${this.baseUrl}${endpoint}`)

        if (!response.ok) {
          throw new Error ('No se han encontrado resultados')
        } else {
          const data = await response.json ()
          return data
        }

      } catch (error) {
        if (error.message === 'No se han encontrado resultados') {
          pubSub.publish(pubSub.TOPICS.NOTIFICATION_ERROR, 'No se han encontrado resultados para su consulta')
        } else {
          pubSub.publish (pubSub.TOPICS.NOTIFICATION_ERROR, 'No se ha podido conectar con la base de datos.\nInténtelo de nuevo más tarde')

        }
      }
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
    
  async delete (endpoint) {

    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      })
  
      const data = await response.json()

      if (!response.ok) {
        throw new Error ('Borrado no realizado')
      } else {
        return data;

      }
      
    } catch (error) {
      if (error.message === 'Borrado no realizado') {
        pubSub.publish (pubSub.TOPICS.NOTIFICATION_ERROR, 'Lo sentimos.\nNo se ha podido realizar el borrado.')

      } else {
        pubSub.publish (pubSub.TOPICS.NOTIFICATION_ERROR, 'No se ha podido conectar con la base de datos.\nInténtelo de nuevo más tarde')

      }
    }
  }
}

export const sparrestApi = new SparrestApi()
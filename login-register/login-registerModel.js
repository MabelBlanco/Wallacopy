import { sparrestApi } from "../utils/SparrestApi.js"

export async function loginUser (username, password) {

    const body = {username, password}

    const response = await sparrestApi.post(sparrestApi.endpoints.login, body)

    const tokenResponse = response.accessToken

    return tokenResponse
}

export async function registerUser (username, password) {

    const body = {username, password}

    const response = await sparrestApi.post (sparrestApi.endpoints.register, body)

    return response
}
import { sparrestApi } from "../SparrestApi.js"

export async function loginUser (username, password) {

    const body = {username, password}

    const response = await sparrestApi.post(sparrestApi.endpoints.login, body)

    const tokenResponse = response.accessToken

    return tokenResponse
}
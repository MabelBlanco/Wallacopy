import { sparrestApi } from "../utils/SparrestApi.js"

export async function getAdvertisements () {
    const advertisements = await sparrestApi.get(sparrestApi.endpoints.advertisements)
    return advertisements
}
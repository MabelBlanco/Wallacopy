import { sparrestApi } from "../utils/SparrestApi.js";

export async function createAdvertisement (advertisement) {
    
    const response = await sparrestApi.post(sparrestApi.endpoints.advertisements, advertisement)
    return response
}
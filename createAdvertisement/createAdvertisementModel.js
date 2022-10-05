import { pubSub } from "../PubSub.js";
import { sparrestApi } from "../SparrestApi.js";

export async function createAdvertisement (advertisement) {
    
    const response = await sparrestApi.post(sparrestApi.endpoints.advertisements, advertisement)
    return response
}
import { sparrestApi } from "../utils/SparrestApi.js";

export async function getAdvertisementId (id) {
    const advertisement = await sparrestApi.get(`${sparrestApi.endpoints.advertisements}/${id}?_expand=user`)
    return advertisement
}
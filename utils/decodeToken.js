export function decodeToken(token) {
    try {
        const stringifiedToken = atob(token.split(".")[1]);
        const decodedToken = JSON.parse(stringifiedToken);
        return decodedToken
    } catch (error) {
        return null
    }
}
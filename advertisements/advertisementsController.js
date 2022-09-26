import { initialAdvertisements } from "./advertisementsModel.js";
import { listAdvertisements } from "./advertisementsView.js";

export function controllerListAdvertisements (sectionAdvertisementsElement) {
    const advertisements = initialAdvertisements;

    const nodoAdvertisements = sectionAdvertisementsElement;

    listAdvertisements (advertisements, nodoAdvertisements)
}
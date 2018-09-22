import { IMana } from "../interfaces/IMana";
import { place, playerCardType } from "../types/types";

export interface IPlayerCard {
    id: number;
    type: playerCardType;
    mana?: IMana[];
    place: place;
    playerId?: number;
    position: number;
    selected?: boolean;
}

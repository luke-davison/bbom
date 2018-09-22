import { IMana } from "../interfaces/IMana";
import { place, playerCardType } from "../types/types";

export interface IPlayerCardOptions {
    type: playerCardType;
    place: place;
    mana?: IMana[];
    playerId?: number;
}

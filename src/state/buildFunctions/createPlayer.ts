import { IPlayer } from "../interfaces/IPlayer";
import { IPlayerCard } from "../interfaces/IPlayerCard";

import { getStartingDeck } from './getStartingDeck';
import { ISupportSlot } from "../interfaces/ISupportSlot";

export function createPlayer(num: number): IPlayer {
    const deck: IPlayerCard[] = getStartingDeck(num);
    const supports: ISupportSlot[] = [{}, {}, {}]
    return {deck, discards: [], hand: [], supports}
}


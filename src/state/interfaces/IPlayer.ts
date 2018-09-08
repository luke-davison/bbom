import { PlayerCard } from "../classes/PlayerCard";
import { ICharacter } from "./ICharacter";

export interface IPlayer {
    id: number;
    icon: number;
    character: ICharacter;
    hand: PlayerCard[];
    deck: PlayerCard[];
    discards: PlayerCard[];
    supports: PlayerCard[];
}

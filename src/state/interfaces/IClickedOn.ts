import { Player } from "../classes/Player";
import { PlayerCard } from "../classes/PlayerCard";
import { cardType } from "../types/cardType";
import { ICurse } from "./ICurse";
import { ISpell } from "./ISpell";

export interface IClickedOn {
    type: cardType;
    curse?: ICurse;
    card?: PlayerCard;
    player?: Player;
    spell?: ISpell;
    curses?: ICurse[];
    cards?: PlayerCard[];
}

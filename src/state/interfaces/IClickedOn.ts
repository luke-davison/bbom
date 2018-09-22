import { IPlayerCard } from "../classes/IPlayerCard";
import { Player } from "../classes/Player";
import { cardType } from "../types/types";
import { ICurse } from "./ICurse";
import { ISpell } from "./ISpell";

export interface IClickedOn {
    type: cardType;
    curse?: ICurse;
    card?: IPlayerCard;
    player?: Player;
    spell?: ISpell;
    curses?: ICurse[];
    cards?: IPlayerCard[];
}

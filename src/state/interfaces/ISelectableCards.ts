import { Player } from "../classes/Player";
import { cardType } from "../types/cardType";
import { mana } from "../types/mana";

export interface ISelectableCards {
    cardTypes: cardType[];
    players?: Player[];
    manaTypes?: mana[];
    manaValues?: number[];
    singleSelect?: boolean;
    any?: boolean;
}

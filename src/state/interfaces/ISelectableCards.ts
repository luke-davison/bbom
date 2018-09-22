import { Player } from "../classes/Player";
import { cardType, mana } from "../types/types";

export interface ISelectableCards {
    cardTypes: cardType[];
    players?: Player[];
    manaTypes?: mana[];
    manaValues?: number[];
    singleSelect?: boolean;
    any?: boolean;
}

import { IMana } from './IMana';

type playerCardType = "mana" | "madness" | "other";

export class IPlayerCard {
    type: playerCardType;
    mana?: IMana;
}
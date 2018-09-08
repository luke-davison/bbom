import { PlayerCard } from "../classes/PlayerCard";
import { IMana } from "../interfaces/IMana";

interface IManaQuantity {
    mana: IMana;
    quantity: number;
}

export function getStartingDeck(manaQuantities: IManaQuantity[]): PlayerCard[] {
    const deck: PlayerCard[] = [];
    manaQuantities.forEach((manaQuantity) => {
        for (let i = 0; i < manaQuantity.quantity; i++) {
            deck.push(new PlayerCard("mana", [manaQuantity.mana]));
        }
    });
    return deck;
}

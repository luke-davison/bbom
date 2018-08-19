import { IPlayerCard } from '../interfaces/IPlayerCard';
import { IMana } from '../interfaces/IMana';

interface IManaQuantity {
    mana: IMana;
    quantity: number
}

export function getStartingDeck(manaQuantities: Array<IManaQuantity>): IPlayerCard[] {
    const deck: IPlayerCard[] = [];
    manaQuantities.forEach(manaQuantity => {
        for (let i = 0; i < manaQuantity.quantity; i++) {
            deck.push({type: "mana", mana: [manaQuantity.mana]})
        }
    })
    return deck;
}
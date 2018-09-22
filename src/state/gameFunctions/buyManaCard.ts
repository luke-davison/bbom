import { IPlayerCard } from "../classes/IPlayerCard";
import { IMana } from "../interfaces/IMana";

export function buyManaCard(manaCards: IPlayerCard[], mana: IMana): IPlayerCard | null {
  for (let i = 0; i < manaCards.length; i++) {
    const card = manaCards[i];
    if (card && card.mana && card.mana[0].type === mana.type && card.mana[0].value === mana.value) {
      return manaCards.splice(i, 1)[0];
    }
  }
  return null;
}

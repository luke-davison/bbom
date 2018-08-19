import { IPlayerCard } from "../interfaces/IPlayerCard";

export function getManaCards(): IPlayerCard[] {
  const total2ValueCards = 10;
  const total3ValueCards = 8;
  const manaCards: IPlayerCard[] = [];
  for (let i: number = 0; i < total2ValueCards; i++) {
    manaCards.push({type: "mana", mana: [{type: "air", value: 2}]});
    manaCards.push({type: "mana", mana: [{type: "earth", value: 2}]});
    manaCards.push({type: "mana", mana: [{type: "fire", value: 2}]});
    manaCards.push({type: "mana", mana: [{type: "water", value: 2}]});
  }
  for (let i: number = 0; i < total3ValueCards; i++) {
    manaCards.push({type: "mana", mana: [{type: "air", value: 3}]});
    manaCards.push({type: "mana", mana: [{type: "earth", value: 3}]});
    manaCards.push({type: "mana", mana: [{type: "fire", value: 3}]});
    manaCards.push({type: "mana", mana: [{type: "water", value: 3}]});
  }
  return manaCards;
}
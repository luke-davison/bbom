import { playerCards } from "../classes/PlayerCards";

export function getManaCards(): void {
  const total2ValueCards = 10;
  const total3ValueCards = 8;
  for (let i: number = 0; i < total2ValueCards; i++) {
    playerCards.add({type: "mana", place: "forPurchase", mana: [{type: "air", value: 2}]});
    playerCards.add({type: "mana", place: "forPurchase", mana: [{type: "earth", value: 2}]});
    playerCards.add({type: "mana", place: "forPurchase", mana: [{type: "fire", value: 2}]});
    playerCards.add({type: "mana", place: "forPurchase", mana: [{type: "water", value: 2}]});
  }
  for (let i: number = 0; i < total3ValueCards; i++) {
    playerCards.add({type: "mana", place: "forPurchase", mana: [{type: "air", value: 3}]});
    playerCards.add({type: "mana", place: "forPurchase", mana: [{type: "earth", value: 3}]});
    playerCards.add({type: "mana", place: "forPurchase", mana: [{type: "fire", value: 3}]});
    playerCards.add({type: "mana", place: "forPurchase", mana: [{type: "water", value: 3}]});
  }
}

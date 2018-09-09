import { Player } from "../classes/Player";
import { PlayerCard } from "../classes/PlayerCard";
import { buyManaCard } from "../gameFunctions/buyManaCard";

export function getManaCards(players: Player[]): PlayerCard[] {
  const total2ValueCards = 10;
  const total3ValueCards = 8;
  const manaCards: PlayerCard[] = [];
  for (let i: number = 0; i < total2ValueCards; i++) {
    manaCards.push(new PlayerCard("mana", [{type: "air", value: 2}]));
    manaCards.push(new PlayerCard("mana", [{type: "earth", value: 2}]));
    manaCards.push(new PlayerCard("mana", [{type: "fire", value: 2}]));
    manaCards.push(new PlayerCard("mana", [{type: "water", value: 2}]));
  }
  for (let i: number = 0; i < total3ValueCards; i++) {
    manaCards.push(new PlayerCard("mana", [{type: "air", value: 3}]));
    manaCards.push(new PlayerCard("mana", [{type: "earth", value: 3}]));
    manaCards.push(new PlayerCard("mana", [{type: "fire", value: 3}]));
    manaCards.push(new PlayerCard("mana", [{type: "water", value: 3}]));
  }
  removeStartingCardsFromManaDeck(manaCards, players);
  return manaCards;
}

function removeStartingCardsFromManaDeck(manaCards: PlayerCard[], players: Player[]): void {
  players.forEach((player) => {
    player.deck.forEach((manaCard) => {
        if (manaCard.mana && manaCard.mana[0].value > 1) {
          buyManaCard(manaCards, manaCard.mana[0]);
        }
      });
  });
}

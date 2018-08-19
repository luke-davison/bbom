import { IGame } from "../interfaces/IGame";
import { IPlayerCard } from "../interfaces/IPlayerCard";
import { getMadness } from "./getMadness";
import { getManaCards } from "./getManaCards";
import { getPlayers } from "./getPlayers";
import { IPlayer } from "../interfaces/IPlayer";
import { buyManaCard } from "../gameFunctions/buyManaCard";

export function createGame(playerCount: number): IGame {
  const madness = getMadness(playerCount);
  const manaCards = getManaCards();
  const players = getPlayers(playerCount);
  removeStartingCardsFromManaDeck(manaCards, players);
  return {madness, manaCards, players, cardsRemoved: []}
}

function removeStartingCardsFromManaDeck(manaCards: IPlayerCard[], players: IPlayer[]): void {
  players.forEach(player => {
    player.deck.forEach(manaCard => {
        if (manaCard.mana && manaCard.mana[0].value > 1) {
          buyManaCard(manaCards, manaCard.mana[0])
        }
      })
  })
}


import { playerCards } from "../classes/PlayerCards";

export function getMadness(playerCount: number): void {
  for (let i: number = 0; i < playerCount * 5 + 10; i++) {
    playerCards.add({type: "madness", place: "madnessPile"});
  }
}

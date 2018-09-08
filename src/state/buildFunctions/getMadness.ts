import { PlayerCard } from "../classes/PlayerCard";

export function getMadness(playerCount: number): PlayerCard[] {
  const madness: PlayerCard[] = [];
  for (let i: number = 0; i < playerCount * 5 + 10; i++) {
    madness.push(new PlayerCard("madness"));
  }
  return madness;
}

import { IPlayerCard } from "../interfaces/IPlayerCard";

export function getMadness(playerCount: number): IPlayerCard[] {
  const madness: IPlayerCard[] = [];
  for (let i: number = 0; i < playerCount * 5 + 10; i++) {
    madness.push({type: "madness"});
  }
  return madness;
}
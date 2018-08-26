import { IPlayer } from "./IPlayer";
import { IPlayerCard } from "./IPlayerCard";

export class Game {
  players: IPlayer[];
  madness: IPlayerCard[];
  cardsRemoved: IPlayerCard[];
  manaCards: IPlayerCard[];
  currentTurn: number;
}
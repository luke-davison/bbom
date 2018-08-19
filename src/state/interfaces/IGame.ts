import { IPlayer } from "./IPlayer";
import { IPlayerCard } from "./IPlayerCard";


export interface IGame {
  players: IPlayer[];
  madness: IPlayerCard[];
  cardsRemoved: IPlayerCard[];
  manaCards: IPlayerCard[];
}
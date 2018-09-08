import { getMadness } from "../buildFunctions/getMadness";
import { getManaCards } from "../buildFunctions/getManaCards";
import { getPlayers } from "../buildFunctions/getPlayers";
import { IPlayer } from "../interfaces/IPlayer";
import { PlayerCard } from "./PlayerCard";

export class Game {
  public players: IPlayer[];
  public madness: PlayerCard[];
  public cardsRemoved: PlayerCard[] = [];
  public manaCards: PlayerCard[];
  public currentTurn: number;

  constructor(playerCount: number) {
    this.madness = getMadness(playerCount);
    this.players = getPlayers(playerCount);
    this.manaCards = getManaCards(this.players);
    this.currentTurn = Math.floor(Math.random() * playerCount);
  }
}

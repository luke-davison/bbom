import { observable } from "mobx";

import { buildBook } from "../buildFunctions/buildBook";
import { getMadness } from "../buildFunctions/getMadness";
import { getManaCards } from "../buildFunctions/getManaCards";
import { getPlayers } from "../buildFunctions/getPlayers";
import { IMonster } from "../interfaces/IMonster";
import { Player } from "./Player";
import { PlayerCard } from "./PlayerCard";

export class Game {
  @observable public players: Player[] = [];
  @observable public madness: PlayerCard[] = [];
  @observable public cardsRemoved: PlayerCard[] = [];
  @observable public manaCards: PlayerCard[] = [];
  @observable public currentTurn: number;
  @observable public monsters: IMonster[] = [];

  constructor(playerCount: number) {
    this.madness = getMadness(playerCount);
    this.players = getPlayers(playerCount);
    this.manaCards = getManaCards(this.players);
    this.currentTurn = Math.floor(Math.random() * playerCount);
    this.monsters = buildBook();
  }
}

export const game = new Game(3);

import { computed, observable } from "mobx";

import { buildBook } from "../buildFunctions/buildBook";
import { getAvailableSpells } from "../buildFunctions/getAvailableSpells";
import { getCurse } from "../buildFunctions/getCurse";
import { getManaCards } from "../buildFunctions/getManaCards";
import { getPlayers } from "../buildFunctions/getPlayers";
import { getRoundDifficulty } from "../buildFunctions/getRoundDifficulty";
import { ICurse } from "../interfaces/ICurse";
import { IMonster } from "../interfaces/IMonster";
import { ISpell } from "../interfaces/ISpell";
import { IPlayerCard } from "./IPlayerCard";
import { Player } from "./Player";
import { playerCards } from "./PlayerCards";

export class Game {
  @observable public players: Player[] = [];
  @observable public monsters: IMonster[] = [];
  @observable public curses: ICurse[][] = [[], [], [], [], []];
  @observable public difficulty: number;
  @observable public spells: ISpell[] = [];

  @observable public currentTurn: number = 1;
  @observable public currentRound: number = 1;
  @observable public currentPlayer: Player;
  @observable public currentAction: Player;
  @observable public instructionText: string = "";

  constructor(playerCount: number) {
    getManaCards();
    this.players = getPlayers(playerCount);
    this.currentTurn = Math.floor(Math.random() * playerCount);
    this.monsters = buildBook();
    this.spells = getAvailableSpells();
    this.currentPlayer = this.players[0];
    this.currentAction = this.players[0];
    setTimeout(this.newRound.bind(this), 2000);
  }

  @computed public get madness(): IPlayerCard[] {
    return playerCards.getDeck("madnessPile");
  }

  @computed public get removed(): IPlayerCard[] {
    return playerCards.getDeck("removed");
  }

  @computed public get forPurchase(): IPlayerCard[] {
    return playerCards.getDeck("forPurchase");
  }

  public setupCurses(): void {
    this.curses = [[], [], [], [], []];
    const monster = this.monsters[0];
    let column: number = 1;
    let pastSecond: boolean = false;
    const roundDifficulty = getRoundDifficulty(this.currentRound, this.difficulty);
    if (roundDifficulty) {
      for (let i = 0; i < roundDifficulty; i++) {
        this.curses[column].push(getCurse("multicolor"));
        increaseColumn();
      }
    }
    monster.curseTypes.forEach((curseType) => {
      this.curses[column].push(getCurse(curseType));
      increaseColumn();
    });

    function increaseColumn(): void {
      if (column === 2 && !pastSecond) {
        pastSecond = true;
      } else {
        column++;
      }
    }
  }

  public newRound(): void {
    this.setupCurses();
    this.monsters[0].abilityFunction(() => {
      this.instructionText = "Begin";
    });
  }
}

export const game = observable(new Game(3));

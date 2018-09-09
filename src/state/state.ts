import { observable } from "mobx";
import { Game, game } from "./classes/Game";

export class State {
    @observable public game: Game;
    constructor() {
        this.game = game;
    }
}

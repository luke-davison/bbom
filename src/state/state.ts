import { observable } from "mobx";
import { Game } from "./classes/Game";

@observable
export class State {
    public game: Game;
    constructor() {
        this.game = new Game(3);
    }
}

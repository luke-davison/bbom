import { observable } from "mobx";

import { Game, game } from "./classes/Game";
import { IPlayerCard } from "./classes/IPlayerCard";
import { IClickedOn } from "./interfaces/IClickedOn";
import { ISelectableCards } from "./interfaces/ISelectableCards";
import { status } from "./types/types";

export class State {
    @observable public game: Game;
    @observable public clickedOn: IClickedOn;
    @observable public selectedCards: IPlayerCard[] = [];
    @observable public selectableCards: ISelectableCards;
    @observable public status: status = "free";
    constructor() {
        this.game = game;
        this.click = this.click.bind(this);
    }

    public click(clickedOn: IClickedOn) {
        if (this.status === "free") {
            if (clickedOn.type === "availableSpell" || clickedOn.type === "curse" || clickedOn.type === "elementCard") {
                this.clickedOn = clickedOn;
                this.status = "payingMana";
            }
            if (clickedOn.card && clickedOn.card.type === "madness"
            && (clickedOn.type === "supportedCard" || (clickedOn.type === "handCard" && clickedOn.player
            && clickedOn.player.id === this.game.currentPlayer.id))) {
                this.clickedOn = clickedOn;
                this.status = "payingMana";
                alert("clicked on valid madness");
            }
            if (clickedOn.type === "spell" && clickedOn.player && clickedOn.player.id === this.game.currentPlayer.id) {
                this.clickedOn = clickedOn;
                this.status = "payingMana";
                alert("clicked on valid spell");
            }
        }
    }
}

export const state = new State();

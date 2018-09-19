import { observable } from "mobx";

import { Game, game } from "./classes/Game";
import { PlayerCard, playerCards } from "./classes/PlayerCard";
import { IClickedOn } from "./interfaces/IClickedOn";
import { status } from "./types/status";

export class State {
    @observable public game: Game;
    @observable public clickedOn: IClickedOn;
    @observable public selectedCards: PlayerCard[] = [];
    @observable public allowMultiSelect: boolean;
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

    public deselectAll(keepSelectable?: boolean): void {
        playerCards.forEach((card) => card.deselect());
        if (!keepSelectable) {
            playerCards.forEach((card) => card.removeSelectable());
        }
    }
}

export const state = new State();

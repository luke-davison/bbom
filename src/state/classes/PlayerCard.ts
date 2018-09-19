import { observable } from "mobx";

import { game } from "../classes/Game";
import { IMana } from "../interfaces/IMana";
import { state } from "../State";

export type playerCardType = "mana" | "madness" | "other";
export type selectable = "no" | "single" | "multi";
let id: number = 0;

export const playerCards: PlayerCard[] = [];

export class PlayerCard {
    @observable public id: number;
    @observable public type: playerCardType;
    @observable public mana?: IMana[];

    constructor(type: playerCardType, mana?: IMana[]) {
        this.id = id++;
        this.type = type;
        if (mana) {
            this.mana = mana;
        }
        this.moveTo = this.moveTo.bind(this);
        playerCards.push(this);
    }

    public moveTo(newArray: PlayerCard[]): void {
        const checkPile = (arr: PlayerCard[]) => {
            arr.forEach((card, i) => card.id === this.id && arr.splice(i, 1));
        };
        game.players.forEach((player) => {
            checkPile(player.hand);
            checkPile(player.deck);
            checkPile(player.discards);
            checkPile(player.supports);
        });
        checkPile(game.madness);
        checkPile(game.manaCards);
        checkPile(game.cardsRemoved);
        newArray.push(this);
    }
}

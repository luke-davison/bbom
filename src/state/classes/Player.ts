import { computed, observable } from "mobx";

import { getStartingDeck } from "../buildFunctions/getStartingDeck";
import { getStartingSpells } from "../buildFunctions/getStartingSpells";
import { ICharacter } from "../interfaces/ICharacter";
import { ISpell } from "../interfaces/ISpell";
import { IPlayerCard } from "./IPlayerCard";
import { playerCards } from "./PlayerCards";

export class Player {
    @observable public id: number;
    @observable public icon: number;
    @observable public character: ICharacter;
    @observable public spells: ISpell[];
    @observable public handSize: number;

    constructor(id: number, character: ICharacter) {
        this.id = id;
        this.icon = id; // temporary
        this.character = character;
        getStartingDeck(this);
        this.spells = getStartingSpells();
        this.handSize = 6;
        this.drawUpTo();
    }

    @computed public get deck(): IPlayerCard[] {
        return playerCards.getDeck("deck", this.id);
    }

    @computed public get discards(): IPlayerCard[] {
        return playerCards.getDeck("discard", this.id);
    }

    @computed public get supports(): IPlayerCard[] {
        return playerCards.getDeck("support", this.id);
    }

    @computed public get hand(): IPlayerCard[] {
        return playerCards.getDeck("hand", this.id);
    }

    @computed public get topCard(): IPlayerCard | null {
        return playerCards.topCard("deck", this.id);
    }

    public drawFromDeck(): IPlayerCard {
        if (!this.topCard) {
            this.resetDeck();
        }
        const card: any = this.topCard;
        return card;
    }

    public resetDeck(): void {
        const madness = playerCards.topCard("madnessPile");
        if (madness) {
            this.addToDeck(madness);
            while (this.discards.length) {
                this.addToDeck(this.discards[0]);
            }
            playerCards.shuffle("deck", this.id);
        }
    }

    public drawUpTo(handSize?: number): void {
        if (!handSize) {
            handSize = this.handSize;
        }
        while (this.hand.length < handSize) {
            playerCards.moveTo(this.drawFromDeck(), "hand", this.id);
        }
    }

    public addToDeck(card: IPlayerCard): void {
        playerCards.moveTo(card, "deck", this.id);
    }

    public addToHand(card: IPlayerCard): void {
        playerCards.moveTo(card, "hand", this.id);
    }

    public addToDiscard(card: IPlayerCard): void {
        playerCards.moveTo(card, "discard", this.id);
    }

    public addToSupport(card: IPlayerCard): void {
        playerCards.moveTo(card, "support", this.id);
    }
}

import { observable } from "mobx";

import { place as placeType } from "../types/types";
import { IPlayerCard } from "./IPlayerCard";
import { IPlayerCardOptions } from "./IPlayerCardOptions";

export class PlayerCards {
    @observable public cards: IPlayerCard[] = [];
    @observable private id: number = 0;

    constructor() {
        this.getDeck = this.getDeck.bind(this);
        this.addToTop = this.addToTop.bind(this);
        this.moveTo = this.moveTo.bind(this);
        this.shuffle = this.shuffle.bind(this);
        this.topCard = this.topCard.bind(this);
    }

    public add(options: IPlayerCardOptions): IPlayerCard {
        const id = this.id++;
        const type = options.type;
        const place = options.place;
        const newCard: IPlayerCard = {id, type, place, position: 0};
        if (options.mana) {
            newCard.mana = options.mana;
        }
        if (options.playerId) {
            newCard.playerId = options.playerId;
        }
        this.cards.push(newCard);
        this.addToTop(newCard);
        return newCard;
    }

    public getDeck(place: placeType, playerId?: number): IPlayerCard[] {
        const deck = this.cards.filter((card) => {
            return card.place === place && (!playerId || card.playerId === playerId);
        });
        deck.sort((cardA, cardB) => cardA.position - cardB.position);
        return deck;
    }

    public addToTop(card: IPlayerCard): void {
        const deck = this.getDeck(card.place, card.playerId);
        if (deck.length) {
            card.position = deck[deck.length - 1].position + 1;
        } else {
            card.position = 0;
        }
    }

    public moveTo(card: IPlayerCard, place: placeType, playerId?: number): void {
        card.place = place;
        card.playerId = playerId;
        this.addToTop(card);
    }

    public shuffle(place: placeType, playerId?: number): void {
        const deck = this.getDeck(place, playerId);
        while (deck.length) {
            const r = Math.floor(Math.random() * deck.length);
            deck[r].position = deck.length;
            deck.splice(r, 1);
        }
    }

    public topCard(place: placeType, playerId?: number): IPlayerCard | null {
        return this.cards.reduce((topCard: IPlayerCard | null, card) => {
            if (card.place === place
            && (!playerId || card.playerId === playerId)
            && (!topCard || card.position > topCard.position)) {
                topCard = card;
            }
            return topCard;
        }, null);
    }
}

export const playerCards = new PlayerCards();

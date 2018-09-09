import { getStartingSpells } from "../buildFunctions/getStartingSpells";
import { shuffle } from "../buildFunctions/shuffle";
import { ICharacter } from "../interfaces/ICharacter";
import { ISpell } from "../interfaces/ISpell";
import { game } from "./Game";
import { PlayerCard } from "./PlayerCard";

export class Player {
    public id: number;
    public icon: number;
    public character: ICharacter;
    public hand: PlayerCard[] = [];
    public deck: PlayerCard[];
    public discards: PlayerCard[] = [];
    public supports: PlayerCard[] = [];
    public spells: ISpell[];
    public handSize: number;

    constructor(id: number, character: ICharacter) {
        this.id = id;
        this.icon = id; // temporary
        this.character = character;
        this.deck = Array.from(character.startingDeck);
        shuffle(this.deck);
        this.spells = getStartingSpells();
        this.handSize = 6;
        this.drawUpTo();
    }

    public drawACardFromDeck(): PlayerCard | undefined {
        if (!this.deck.length) {
            const madness = game.madness.pop();
            if (madness) {
                this.discards.push(madness);
            }
            this.deck = this.discards;
            this.discards = [];
            shuffle(this.deck);
        }
        return this.deck.pop();
    }

    public drawUpTo(handSize?: number): void {
        if (!handSize) {
            handSize = this.handSize;
        }
        if (this.hand.length <= handSize) {
            for (let i = this.hand.length; i < handSize; i++) {
                const card = this.drawACardFromDeck();
                if (card) {
                    this.hand.push(card);
                }
            }
        }
    }
}

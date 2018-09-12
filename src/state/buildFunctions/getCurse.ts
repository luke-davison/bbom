import { ICurse } from "../interfaces/ICurse";
import { IMana } from "../interfaces/IMana";
import { mana } from "../types/mana";
import { shuffle } from "./shuffle";

const curseCopies: ICurseCopies[] = [
    {
        ability: "Each player receives 1 Madness in their discard pile.",
        copies: [
            {type: "water", number: 4},
            {type: "earth", number: 4},
            {type: "air", number: 4},
            {type: "fire", number: 4},
        ],
    },
    {
        ability: "Each player discards 1 Earth card.",
        copies: [{type: "water", number: 1}, {type: "fire", number: 1}],
    },
    {
        ability: "Each player discards 1 Fire card.",
        copies: [{type: "water", number: 1}, {type: "air", number: 1}],
    },
    {
        ability: "Each player destroys the top card of their deck.",
        copies: [
            {type: "water", number: 1},
            {type: "earth", number: 1},
            {type: "air", number: 1},
            {type: "fire", number: 1},
        ],
    },
    {
        ability: "Each player places the top 2 cards of their deck in their discard pile.",
        copies: [
            {type: "water", number: 1},
            {type: "earth", number: 1},
            {type: "air", number: 1},
            {type: "fire", number: 2},
        ],
    },
    {
        ability: "Each player receives 1 Madness on top of their deck.",
        copies: [{type: "water", number: 1}, {type: "multicolor", number: 1}],
    },
    {
        ability: "Each player places the top 3 cards of their deck in their discard pile.",
        copies: [{type: "earth", number: 1}],
    },
    {
        ability: "Each player discards 1 Water card.",
        copies: [{type: "earth", number: 1}, {type: "air", number: 1}],
    },
    {
        ability: "Each player discards 1 Air card.",
        copies: [{type: "earth", number: 1}, {type: "fire", number: 1}],
    },
    {
        ability: "Each player places the top card of their deck into the discard pile of the player on their right.",
        copies: [{type: "air", number: 1}],
    },
    {
        ability: "Each player destroys one value-2 card of their choice.",
        copies: [{type: "fire", number: 1}],
    },
    {
        ability: `Each player flips 1 of their Spells face-down
            (these Spells flip face-up as soon as this Curse is removed from play).`,
        copies: [{type: "multicolor", number: 1}],
    },
    {
        ability: `Add 1 Earth token on all other Curses.  Players must spend 1 additional Earth to destroy them.
            Remove the Earth tokens if this Curse is destroyed.`,
        copies: [{type: "multicolor", number: 1}],
    },
    {
        ability: `Add 1 Air token on all other Curses.  Players must spend 1 additional Air to destroy them.
            Remove the Air tokens if this Curse is destroyed.`,
        copies: [{type: "multicolor", number: 1}],
    },
    {
        ability: `Add 1 Fire token on all other Curses.  Players must spend 1 additional Fire to destroy them.
            Remove the Fire tokens if this Curse is destroyed.`,
        copies: [{type: "multicolor", number: 1}],
    },
    {
        ability: `Add 1 Water token on all other Curses.  Players must spend 1 additional Water to destroy them.
            Remove the Water tokens if this Curse is destroyed.`,
        copies: [{type: "multicolor", number: 1}],
    },
    {
        ability: "Each player discards their hand, then draws 5 cards.",
        copies: [{type: "multicolor", number: 1}],
    },
    {
        ability: `Shuffle all destroyed Element and Madness cards.  Starting with the active player,
            deal them in clockwise order to the discard pile of each player (maximum 3 per player).`,
        copies: [{type: "multicolor", number: 1}],
    },
    {
        ability: "Each player discards one value-2 card of their choice.",
        copies: [{type: "multicolor", number: 1}],
    },
    {
        ability: "Each player discards their entire deck.",
        copies: [{type: "multicolor", number: 1}],
    },
    {
        ability: "Destroy 4 Madness from the Madness stack.",
        copies: [{type: "multicolor", number: 1}],
    },
    {
        ability: "Each player discards all cards from their Support.",
        copies: [{type: "multicolor", number: 1}],
    },
];

interface ICurseCopies {
    ability: string;
    copies: ICurseCopy[];
}

interface ICurseCopy {
    type: mana;
    number: number;
}

function getCurseDeck(): ICurse[] {
    const curses: ICurse[] = [];
    curseCopies.forEach((curseCopy) => {
        curseCopy.copies.forEach((copy) => {
            for (let i = 0; i < copy.number; i++) {
                const curseMana: IMana[] = [];
                if (copy.type === "multicolor") {
                    curseMana.push({type: "air", value: 1});
                    curseMana.push({type: "water", value: 1});
                    curseMana.push({type: "fire", value: 1});
                    curseMana.push({type: "earth", value: 1});
                } else {
                    curseMana.push({type: copy.type, value: 4});
                }
                curses.push({ability: curseCopy.ability, mana: curseMana});
            }
        });
    });
    return curses;
}

const curseDeck = getCurseDeck();

export function getCurse(manaType: mana): ICurse {
    const choices: number[] = [];
    for (let i = 0; i < curseDeck.length; i++) {
        choices.push(i);
    }
    shuffle(choices);
    while (choices.length) {
        const choice = choices.pop();
        if (choice) {
            if (manaType === "multicolor") {
                if (curseDeck[choice].mana.length === 4) {
                    return curseDeck.splice(choice, 1)[0];
                }
            } else {
                if (curseDeck[choice].mana[0].type === manaType && curseDeck[choice].mana.length === 1) {
                    return curseDeck.splice(choice, 1)[0];
                }
            }
        }
    }
    return curseDeck.splice(0, 1)[0]; // this should never happen
}

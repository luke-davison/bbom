import { ISpell } from "../interfaces/ISpell";

const spells: ISpell[] = [
    {
        ability: "Take (1) Action using only cards from the support pool, without discarding them.",
        cost: [{type: "air", value: 3}],
        name: "Avatar",
    },
    {
        ability: "Each other player chooses (1) card from their discard pile and puts it in their hand.",
        cost: [{type: "air", value: 3}],
        name: "Daydream",
    },
    {
        ability: `(1) other player refreshes all their Spells, then takes 1 Action using their cards,
            without discarding them.`,
        cost: [{type: "air", value: 3}],
        name: "Illusion",
    },
    {
        ability: "(1) other player draws up to six cards to their hand.",
        cost: [{type: "air", value: 2}],
        name: "Levitation",
    },
    {
        ability: "Exchange (1) card with another player.",
        cost: [{type: "air", value: 2}],
        name: "Tornado",
    },
    {
        ability: "Each player discards (1) card from their hand, then draws (1) card.",
        cost: [{type: "air", value: 2}],
        name: "Eye of the Tornado",
    },
    {
        ability: "Give (1) card from your hand or from the support pool to another player's hand.",
        cost: [{type: "air", value: 1}],
        name: "Breath",
    },
    {
        ability: "(1) other player takes 1 Action, then draws 1 card.",
        cost: [{type: "air", value: 1}],
        name: "Mental Control",
    },
    {
        ability: "Receive (1) card in your hand from another player's hand, or from the support pool.",
        cost: [{type: "air", value: 1}],
        name: "Aspiration",
    },
    {
        ability: "Each player discards all Madness card from their hand, then draws (1) card per Madness discarded.",
        cost: [{type: "water", value: 3}],
        name: "Ice Cocoon",
    },
    {
        ability: "Each player places (1) card in support, then draws (1) card.",
        cost: [{type: "water", value: 3}],
        name: "Arctic Circle",
    },
    {
        ability: "Each player who has at least one free support slot draws (1) card then puts it in support.",
        cost: [{type: "water", value: 3}],
        name: "Tsunami",
    },
    {
        ability: "(1) other player draws 1 card, then places 1 card from their hand in support.",
        cost: [{type: "water", value: 2}],
        name: "Ice Touch",
    },
    {
        ability: "Destroy (1) card from the support pool, then replace it with (1) higher-value card.",
        cost: [{type: "water", value: 2}],
        name: "Glaciation",
    },
    {
        ability: "(1) other player shuffles their hand, support, and discard pile into their deck, then draws 5 cards.",
        cost: [{type: "water", value: 2}],
        name: "Raining Frogs",
    },
    {
        ability: "(1) player shuffles their discard pile and support into their deck.",
        cost: [{type: "water", value: 1}],
        name: "Torrential Rain",
    },
    {
        ability: "Place (1) card from your discard pile in support.",
        cost: [{type: "water", value: 1}],
        name: "Frost Mirror",
    },
    {
        ability: "Place (1) card from your hand in support, then draw (1) card.",
        cost: [{type: "water", value: 1}],
        name: "Cool Head",
    },
    {
        ability: "Place (1) value-3 card on top of your deck.",
        cost: [{type: "earth", value: 3}],
        name: "Flowering",
    },
    {
        ability: "Each player draws (1) card.",
        cost: [{type: "earth", value: 3}],
        name: "Telekinesis",
    },
    {
        ability: "Cure all Madness in the support pool, then draw (2) cards",
        cost: [{type: "earth", value: 3}],
        name: "Earthquake",
    },
    {
        ability: `(1) player may destroy an identical pair of Element cards from their hand
            and/or the support pool, then add one value-2 card of the same Element to their hand.`,
        cost: [{type: "earth", value: 2}],
        name: "Bark Skin",
    },
    {
        ability: "Place (1) value-2 card on top of your deck.",
        cost: [{type: "earth", value: 2}],
        name: "Taking Root",
    },
    {
        ability: "One other player draws (2) cards.",
        cost: [{type: "earth", value: 2}],
        name: "Abundance",
    },
    {
        ability: "Choose (1) card from your discard pile, then place it on top of your deck.",
        cost: [{type: "earth", value: 1}],
        name: "Sands of Time",
    },
    {
        ability: "(1) other player chooses 1 card from their discard pile, then places it on top of their deck.",
        cost: [{type: "earth", value: 1}],
        name: "Essence of the Earth",
    },
    {
        ability: `Destroy (1) card from your hand or the support pool,
        then receive (1) higher-value card to your discard pile.`,
        cost: [{type: "earth", value: 1}],
        name: "Stone Skin",
    },
    {
        ability: "Each player cures (1) Madness from their hand or the support pool.",
        cost: [{type: "fire", value: 3}],
        name: "Circle of Fire",
    },
    {
        ability: "Cure (1) Madness from your hand, then receive (1) value-3 Element in your discard pile.",
        cost: [{type: "fire", value: 3}],
        name: "Aura of Fire",
    },
    {
        ability: "(1) other player cures all Madness from their hand.",
        cost: [{type: "fire", value: 3}],
        name: "Purification",
    },
    {
        ability: "One player cures (1) Madness from their hand, then draws (1) card.",
        cost: [{type: "fire", value: 2}],
        name: "Regeneration",
    },
    {
        ability: "Heal up to (2) Madness from your discard pile or support.",
        cost: [{type: "fire", value: 2}],
        name: "Cauterization",
    },
    {
        ability: "Draw (2) cards, then cure (1) Madness from your hand or support.",
        cost: [{type: "fire", value: 2}],
        name: "Adrenaline",
    },
    {
        ability: "Discard (1) Madness.  Then, for each Madness you discarded, draw 2 cards.",
        cost: [{type: "fire", value: 1}],
        name: "Warm-blooded",
    },
    {
        ability: "Destroy (1) card from your discard pile.",
        cost: [{type: "fire", value: 1}],
        name: "Concentration",
    },
    {
        ability: "One player can discard (1) card, then draw (1) card.",
        cost: [{type: "fire", value: 1}],
        name: "Power of the Inferno",
    },
];

export function getAvailableSpells(): ISpell[] {
    const availableSpells: ISpell[] = [];
    const types: string[] = ["fire", "water", "air", "earth"];
    const values: number[] = [1, 2, 3];
    types.forEach((type) => {
        values.forEach((value) => {
            const filteredSpells = spells.filter((spell) => {
                return spell.cost[0].type === type && spell.cost[0].value === value;
            });
            if (filteredSpells.length) {
                const r = Math.floor(Math.random() * filteredSpells.length);
                availableSpells.push(filteredSpells[r]);
            }
        });
    });
    return availableSpells;
}

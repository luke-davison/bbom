import { ISpell } from "../interfaces/ISpell";

export function getStartingSpells(): ISpell[] {
    return [
        {
            ability: "Destroy (1) card from your hand.",
            cost: [{type: "fire", value: 1}],
            name: "Combustion",
        },
        {
            ability: "One other player takes (1) action.",
            cost: [{type: "air", value: 1}],
            name: "Telepath",
        },
        {
            ability: "Place (1) card from your hand in support.",
            cost: [{type: "water", value: 1}],
            name: "Ice",
        },
        {
            ability: "Draw (1) card",
            cost: [{type: "earth", value: 1}],
            name: "Growth",
        },
    ];
}

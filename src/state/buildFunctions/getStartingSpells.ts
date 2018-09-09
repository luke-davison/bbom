import { ISpell } from "../interfaces/ISpell";

export function getStartingSpells(): ISpell[] {
    return [
        {name: "Combustion", cost: [{type: "fire", value: 1}]},
        {name: "Telepath", cost: [{type: "air", value: 1}]},
        {name: "Ice", cost: [{type: "water", value: 1}]},
        {name: "Growth", cost: [{type: "earth", value: 1}]},
    ];
}

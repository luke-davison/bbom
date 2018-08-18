import { IPlayerCard } from '../interfaces/IPlayerCard';

export function getStartingDeck(num: number): IPlayerCard[] {
    switch (num) {
        default:
            return [
                {type: "mana", mana: {earth: 2}},
                {type: "mana", mana: {earth: 1}},
                {type: "mana", mana: {earth: 1}},
                {type: "mana", mana: {air: 1}},
                {type: "mana", mana: {air: 1}},
                {type: "mana", mana: {air: 1}},
                {type: "mana", mana: {fire: 1}},
                {type: "mana", mana: {fire: 1}},
                {type: "mana", mana: {fire: 1}},
                {type: "mana", mana: {water: 1}},
                {type: "mana", mana: {water: 1}},
                {type: "mana", mana: {water: 1}},
            ];
    }
}
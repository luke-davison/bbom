import { IPlayerCard } from "../interfaces/IPlayerCard";

export function choose(cards: IPlayerCard[], num: number, callback: (cards: IPlayerCard[]) => any): void {
    console.log("choosing");
    // callback(cards[0]);
}
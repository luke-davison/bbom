import { PlayerCard } from "../classes/PlayerCard";

export function choose(
    message: string,
    cards: PlayerCard[],
    num: number,
    callback: (chosen: PlayerCard[]) => any): void {
    const arr: PlayerCard[] = [];
    while (cards.length) {
        const card = cards.pop();
        if (card) {
            arr.push(card);
        }
    }
    if (arr.length <= num) {
        return callback(arr);
    }
    choose(message, arr, num, (chosen: PlayerCard[]) => {
        while (arr) {
            const card = arr.pop();
            if (card) {
                cards.push(card);
            }
        }
        return callback(chosen);
    });
}

export function chooseFiltered(
    message: string,
    cards: PlayerCard[],
    num: number,
    filter: (card: PlayerCard) => boolean,
    callback: (cards: PlayerCard[]) => any,
): void {
    const arr: PlayerCard[] = [];
    const arr2: PlayerCard[] = [];
    while (cards.length) {
        const card = cards.pop();
        if (card) {
            if (filter(card)) {
                arr.push(card);
            } else {
                arr2.push(card);
            }
        }
    }
    while (arr2) {
        const card = arr2.pop();
        if (card) {
            cards.push(card);
        }
    }
    if (arr.length <= num) {
        return callback(arr);
    }
    choose(message, arr, num, (chosen: PlayerCard[]) => {
        while (arr) {
            const card = arr.pop();
            if (card) {
                cards.push(card);
            }
        }
        return callback(chosen);
    });
}

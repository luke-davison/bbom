import { IPlayerCard } from "../interfaces/IPlayerCard";

export function choose(message: string, cards: IPlayerCard[], num: number, callback: (chosen: IPlayerCard[]) => any): void {
    const arr: IPlayerCard[] = [];
    while (cards.length) {
        const card = cards.pop();
        if (card) {
            arr.push(card);
        }
    }
    if (arr.length <= num) {
        return callback(arr);
    }
    choose(message, arr, num, (chosen: IPlayerCard[]) => {
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
    cards: IPlayerCard[],
    num: number,
    filter: (card: IPlayerCard) => boolean,
    callback: (cards: IPlayerCard[]) => any
): void {
    const arr: IPlayerCard[] = [];
    const arr2: IPlayerCard[] = [];
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
    choose(message, arr, num, (chosen: IPlayerCard[]) => {
        while (arr) {
            const card = arr.pop();
            if (card) {
                cards.push(card);
            }
        }
        return callback(chosen);
    });
}
export function shuffle(cards: any[]): any[] {
    const arr: any[] = Array.from(cards);
    while (cards.length) {
        cards.pop();
    }
    while (arr.length) {
        const r = Math.floor(Math.random() * arr.length);
        cards.push(arr.splice(r, 1)[0]);
    }
    return cards;
}

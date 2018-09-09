import { IMonster } from "../interfaces/IMonster";
import { getMonsters } from "./getMonsters";

export function buildBook(numberOfMonsters?: number): IMonster[] {
    if (!numberOfMonsters) {
        numberOfMonsters = 6;
    }
    const book: IMonster[] = [];
    const monsters: IMonster[] = Array.from(getMonsters());
    while (book.length < numberOfMonsters) {
        const r = Math.floor(Math.random() * monsters.length);
        if ((book.length === 0 && monsters[r].inital) || (book.length > 0 && !monsters[r].inital)) {
            const monster = monsters.splice(r, 1)[0];
            book.unshift(monster);
        }
    }
    return book;
}

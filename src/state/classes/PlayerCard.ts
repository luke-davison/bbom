import { IMana } from "../interfaces/IMana";

type playerCardType = "mana" | "madness" | "other";

export class PlayerCard {
    public type: playerCardType;
    public mana?: IMana[];
    public selected?: boolean;

    constructor(type: playerCardType, mana?: IMana[]) {
        this.type = type;
        if (mana) {
            this.mana = mana;
        }
        // this.select = this.select.bind(this);
    }

    public select(): void {
        this.selected = !this.selected;
    }
}

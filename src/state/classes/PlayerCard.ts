import { observable } from "mobx";

import { IMana } from "../interfaces/IMana";

type playerCardType = "mana" | "madness" | "other";

export class PlayerCard {
    @observable public type: playerCardType;
    @observable public mana?: IMana[];
    @observable public selected?: boolean;

    constructor(type: playerCardType, mana?: IMana[]) {
        this.type = type;
        if (mana) {
            this.mana = mana;
        }
        this.select = this.select.bind(this);
    }

    public select(): void {
        this.selected = !this.selected;
    }
}

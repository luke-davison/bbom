import { IMana } from "./IMana";

export interface ISpell {
    name: string;
    cost: IMana;
    active: boolean;
    effect: () => any;
}

import { IMana } from "./IMana";

export interface ISpell {
    name: string;
    cost: IMana[];
    used?: boolean;
}

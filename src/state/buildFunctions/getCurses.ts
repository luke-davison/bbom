import { ICurse } from "../interfaces/ICurse";
import { ICurseDecks } from "../interfaces/ICurseDecks";

export function getCurses(): ICurseDecks {
    const air: ICurse[] = [];
    const earth: ICurse[] = [];
    const fire: ICurse[] = [];
    const multicolor: ICurse[] = [];
    const water: ICurse[] = [];

    return {air, earth, fire, multicolor, water};
}

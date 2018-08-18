import { ICurseDecks } from "../interfaces/ICurseDecks";
import { ICurse } from "../interfaces/ICurse";


export function getCurses(): ICurseDecks {
    const air: ICurse[] = []
    const earth: ICurse[] = [];
    const fire: ICurse[] = [];
    const multicolor: ICurse[] = [];
    const water: ICurse[] = [];

    return {air, earth, fire, multicolor, water};
}
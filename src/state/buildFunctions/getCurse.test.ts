import { ICurse } from "../interfaces/ICurse";
import { getCurse } from "./getCurse";

describe("getCurse", () => {
    it("air curse is returned when requested (1)", () => {
        const curse: ICurse = getCurse("air");
        expect(curse.mana[0].type).toBe("air");
        expect(curse.mana[0].value).toBe(4);
    });
    it("air curse is returned when requested (2)", () => {
        const curse: ICurse = getCurse("air");
        expect(curse.mana[0].type).toBe("air");
        expect(curse.mana[0].value).toBe(4);
    });
    it("air curse is returned when requested (3)", () => {
        const curse: ICurse = getCurse("air");
        expect(curse.mana[0].type).toBe("air");
        expect(curse.mana[0].value).toBe(4);
    });
    it("air curse is returned when requested (4)", () => {
        const curse: ICurse = getCurse("air");
        expect(curse.mana[0].type).toBe("air");
        expect(curse.mana[0].value).toBe(4);
    });
    it("fire curse is returned when requested (1)", () => {
        const curse: ICurse = getCurse("fire");
        expect(curse.mana[0].type).toBe("fire");
        expect(curse.mana[0].value).toBe(4);
    });
    it("fire curse is returned when requested (2)", () => {
        const curse: ICurse = getCurse("fire");
        expect(curse.mana[0].type).toBe("fire");
        expect(curse.mana[0].value).toBe(4);
    });
    it("fire curse is returned when requested (3)", () => {
        const curse: ICurse = getCurse("fire");
        expect(curse.mana[0].type).toBe("fire");
        expect(curse.mana[0].value).toBe(4);
    });
    it("fire curse is returned when requested (4)", () => {
        const curse: ICurse = getCurse("fire");
        expect(curse.mana[0].type).toBe("fire");
        expect(curse.mana[0].value).toBe(4);
    });
});

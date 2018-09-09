import { PlayerCard } from "../classes/PlayerCard";
import { shuffle } from "./shuffle";

describe("shuffle", () => {
    it("deck array is still the same length", () => {
        const arr: PlayerCard[] = [new PlayerCard("mana")];
        shuffle(arr);
        expect(arr.length).toBe(1);
      });
    it("deck array is still the same length x 3", () => {
        const arr: PlayerCard[] = [new PlayerCard("mana"), new PlayerCard("mana"), new PlayerCard("mana")];
        shuffle(arr);
        expect(arr.length).toBe(3);
      });
});

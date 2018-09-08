import { PlayerCard } from "../classes/PlayerCard";
import { choose} from "./choose";

const emptyArray: PlayerCard[] = [];

it("returns an array", () => {
    choose("Choose", emptyArray, 1, (chosen) => {
        expect(Array.isArray(chosen)).toBe(true);
    });
  });

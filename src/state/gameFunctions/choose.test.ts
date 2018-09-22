import { IPlayerCard } from "../classes/IPlayerCard";
import { choose} from "./choose";

const emptyArray: IPlayerCard[] = [];

it("returns an array", () => {
    choose("Choose", emptyArray, 1, (chosen) => {
        expect(Array.isArray(chosen)).toBe(true);
    });
  });

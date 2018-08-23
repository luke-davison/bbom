import { choose, chooseFiltered} from "./choose";
import { IPlayerCard } from "../interfaces/IPlayerCard";

const emptyArray: IPlayerCard[] = [];

it("returns an array", () => {
    choose("Choose", emptyArray, 1, (chosen) => {
        expect(Array.isArray(chosen)).toBe(true);
    });
  });
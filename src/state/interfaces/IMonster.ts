import { mana } from "../types/mana";

export interface IMonster {
  name: string;
  abilityText: string;
  winText?: string;
  loseText?: string;
  curseTypes: mana[];
  inital?: boolean;
  abilityFunction: (callback: () => void) => void;
}

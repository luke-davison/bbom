import { IMana } from "./IMana";

export interface IMonster {
  name: string;
  abilityText: string;
  winText: string;
  loseText: string;
  curseTypes: IMana[];
}
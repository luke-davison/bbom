import { IManaQuantity } from "./IManaQuanity";

export interface ICharacter {
  name: string;
  abilityText: string;
  startingDeck: IManaQuantity[];
  supportSlots: number;
  maxSpells: number;
}

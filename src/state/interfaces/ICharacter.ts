import { IPlayerCard } from "./IPlayerCard";

export interface ICharacter {
  name: string;
  abilityText: string;
  startingDeck: IPlayerCard[];
  supportSlots: number;
  maxSpells: number;
}
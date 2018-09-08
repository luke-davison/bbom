import { PlayerCard } from "../classes/PlayerCard";

export interface ICharacter {
  name: string;
  abilityText: string;
  startingDeck: PlayerCard[];
  supportSlots: number;
  maxSpells: number;
}

import { IPlayer } from "../interfaces/IPlayer";
import { IPlayerCard } from "../interfaces/IPlayerCard";
import { ICharacter } from "../interfaces/ICharacter";
import { getCharacters } from "./getCharacters";

export function getPlayers(playerCount: number): IPlayer[] {
  const characters: ICharacter[] = getCharacters();
  const players: IPlayer[] = [];
  for (let i: number = 0; i < playerCount; i++) {
    const r = Math.floor(Math.random() * characters.length);
    const character: ICharacter = characters.splice(r, 1)[0];
    const deck: IPlayerCard[] = Array.from(character.startingDeck);
    players.push({character, deck, discards: [], hand: [], supports: []})
  }
  return players;
}
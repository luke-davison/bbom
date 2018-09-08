import { PlayerCard } from "../classes/PlayerCard";
import { ICharacter } from "../interfaces/ICharacter";
import { IPlayer } from "../interfaces/IPlayer";
import { getCharacters } from "./getCharacters";

export function getPlayers(playerCount: number): IPlayer[] {
  const characters: ICharacter[] = getCharacters();
  const players: IPlayer[] = [];
  for (let i: number = 0; i < playerCount; i++) {
    const id: number = players.length;
    const r = Math.floor(Math.random() * characters.length);
    const character: ICharacter = characters.splice(r, 1)[0];
    const deck: PlayerCard[] = Array.from(character.startingDeck);
    players.push({id, icon: id, character, deck, discards: [], hand: [], supports: []});
  }
  return players;
}

import { Player } from "../classes/Player";
import { ICharacter } from "../interfaces/ICharacter";
import { getCharacters } from "./getCharacters";

export function getPlayers(playerCount: number): Player[] {
  const characters: ICharacter[] = getCharacters();
  const players: Player[] = [];
  for (let id: number = 1; id <= playerCount; id++) {
    const r = Math.floor(Math.random() * characters.length);
    const character: ICharacter = characters.splice(r, 1)[0];
    players.push(new Player(id, character));
  }
  return players;
}

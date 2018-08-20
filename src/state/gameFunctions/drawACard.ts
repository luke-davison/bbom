import { IPlayer } from "../interfaces/IPlayer";
import { IPlayerCard } from "../interfaces/IPlayerCard";
import { IGame } from "../interfaces/IGame";
import { shuffle } from "../buildFunctions/shuffle";

export function drawACard(game: IGame, player: IPlayer): IPlayerCard | undefined {
    if (!player.deck.length) {
        const madness = game.madness.pop();
        if (madness) {
            player.discards.push(madness);
        }
        while (player.discards.length) {
            const card = player.discards.pop();
            if (card) {
                player.deck.push(card);
            }
        }
        shuffle(player.deck);
    }
    return player.deck.pop();
}
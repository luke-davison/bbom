import { shuffle } from "../buildFunctions/shuffle";
import { Game } from "../classes/Game";
import { PlayerCard } from "../classes/PlayerCard";
import { IPlayer } from "../interfaces/IPlayer";

export function drawACard(game: Game, player: IPlayer): PlayerCard | undefined {
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

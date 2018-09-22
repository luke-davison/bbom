import { Player } from "../classes/Player";
import { playerCards } from "../classes/PlayerCards";

export function getStartingDeck(player: Player) {
    player.character.startingDeck.forEach((manaQuantity) => {
        for (let i = 0; i < manaQuantity.quantity; i++) {
            if (manaQuantity.mana.value === 1) {
                playerCards.add({type: "mana", place: "deck", mana: [manaQuantity.mana], playerId: player.id});
            } else {
                const card = playerCards
                    .getDeck("forPurchase")
                    .find((c) => {
                        return !!c.mana && c.mana[0].type === manaQuantity.mana.type
                        && c.mana[0].value === manaQuantity.mana.value && !c.playerId;
                });
                if (card) {
                    playerCards.moveTo(card, "deck", player.id);
                }
            }
        }
        playerCards.shuffle("deck", player.id);
    });
}

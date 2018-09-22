
import { game } from "../classes/Game";
import { playerCards } from "../classes/PlayerCards";

export function eachPlayerDiscardsDeck(callback: () => any): void {
    game.players.forEach((player) => {
        while (player.deck.length) {
            player.addToDiscard(player.deck[0]);
        }
    });
    callback();
}

export function eachPlayerGetsMadnessIntoHand(callback: () => any): void {
    game.players.forEach((player) => {
        const madness = playerCards.topCard("madnessPile");
        if (madness) {
            player.addToHand(madness);
        }
    });
    callback();
}

export function eachPlayerWithMadnessGetsMadnessIntoHand(callback: () => any): void {
    game.players.forEach((player) => {
        if (player.hand.find((card) => card.type === "madness")
        || player.supports.find((card) => card.type === "madness")) {
            const madness = playerCards.topCard("madnessPile");
            if (madness) {
                player.addToHand(madness);
            }
        }
    });
    callback();
}

export function eachPlayerGetsMadnessOnDeck(callback: () => any): void {
    game.players.forEach((player) => {
        const madness = playerCards.topCard("madnessPile");
        if (madness) {
            player.addToDeck(madness);
        }
    });
    callback();
}

export function eachPlayerDiscardsSupport(callback: () => any): void {
    game.players.forEach((player) => {
        while (player.supports.length) {
            player.addToDiscard(player.supports[0]);
        }
    });
    callback();
}

export function returnDestroyedCards(callback: () => any): void {
    playerCards.shuffle("removed");
    let i: number = 0;
    while (i < 3 * game.players.length && game.removed.length) {
        const playerNumber = i + game.currentTurn;
        while (playerNumber >= game.players.length) {
            i -= game.players.length;
        }
        const player = game.players[playerNumber];
        const card = game.removed[0];
        if (card) {
            player.addToDiscard(card);
        }
    }
    callback();
}

export function destroyMadness(num: number, callback: () => any): void {
    for (let i = 0; i < num; i++) {
        const madness = playerCards.topCard("madnessPile");
        if (madness) {
            playerCards.moveTo(madness, "removed");
        }
    }
    callback();
}

export function destroyAllSupportedCards(callback: () => any): void {
    game.players.forEach((player) => {
        while (player.supports.length) {
            playerCards.moveTo(player.supports[0], "removed");
        }
    });
    callback();
}

export function eachPlayerDiscardsHandAndDraws(num: number, callback: () => any): void {
    game.players.forEach((player) => {
        while (player.hand.length) {
            player.addToDiscard(player.hand[0]);
        }
        player.drawUpTo(num);
    });
    callback();
}

export function eachPlayerDiscardsTopCardsOfDeck(num: number, callback: () => any): void {
    game.players.forEach((player) => {
        for (let i: number = 0; i < num; i++) {
            const card = player.topCard;
            if (card) {
                player.addToDiscard(card);
            }
        }
    });
    callback();
}

export function eachPlayerGetsMadnessIntoDiscard(callback: () => any): void {
    game.players.forEach((player) => {
        const madness = playerCards.topCard("madnessPile");
        if (madness) {
            player.addToDiscard(madness);
        }
    });
    callback();
}

export function eachPlayerGetsMadnessIntoSupport(callback: () => any): void {
    game.players.forEach((player) => {
        const madness = playerCards.topCard("madnessPile");
        if (madness) {
            player.addToSupport(madness);
        }
    });
    callback();
}

export function eachPlayerDestroysTopCardsOfDeck(num: number, callback: () => any): void {
    game.players.forEach((player) => {
        for (let i = 0; i < num; i++) {
            const card: any = player.topCard;
            if (card) {
                player.addToDiscard(card);
            }
        }
    });
    callback();
}

// export function eachPlayerDiscardsCards(num: number, callback: () => any): void {
//     const players = Array.from(game.players);
//     playerDiscardsCards();
//     function playerDiscardsCards(): void {
//         if (players.length) {
//             const player = players.pop();
//             if (player) {
//                 choose(player.hand, num, (cards: IPlayerCard[]) => {
//                     cards.forEach(card => player.discards.push(card));
//                     playerDiscardsCards();
//                 });
//             }
//         }
//     }
// }

// export function eachPlayerDiscardsTypeOfCard(num: number, callback: () => any): void {
//     const players = Array.from(game.players);
//     playerDiscardsCards();

//     function playerDiscardsCards(): void {
//         if (players.length) {
//             const player = players.pop();
//             if (player) {
//                 choose(player.hand, num, (cards: IPlayerCard[]) => {
//                     cards.forEach(card => player.discards.push(card));
//                     playerDiscardsCards();
//                 });
//             }
//         }
//     }
// }

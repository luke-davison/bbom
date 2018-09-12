
import { shuffle } from "../buildFunctions/shuffle";

import { game } from "../classes/Game";

export function eachPlayerDiscardsDeck(callback: () => any): void {
    game.players.forEach((player) => {
        while (player.deck.length) {
            const card = player.deck.pop();
            if (card) {
                player.discards.push(card);
            }
        }
    });
    callback();
}

export function eachPlayerGetsMadnessIntoHand(callback: () => any): void {
    game.players.forEach((player) => {
        if (game.madness.length) {
            const card = game.madness.pop();
            if (card) {
                player.hand.push(card);
            }
        }
    });
    callback();
}

export function eachPlayerWithMadnessGetsMadnessIntoHand(callback: () => any): void {
    game.players.forEach((player) => {
        if (game.madness.length) {
            if (player.hand.find((card) => card.type === "madness")
            || player.supports.find((card) => card.type === "madness")) {
                const card = game.madness.pop();
                if (card) {
                    player.hand.push(card);
                }
            }
        }
    });
    callback();
}

export function eachPlayerGetsMadnessOnDeck(callback: () => any): void {
    game.players.forEach((player) => {
        if (game.madness.length) {
            const card = game.madness.pop();
            if (card) {
                player.deck.push(card);
            }
        }
    });
    callback();
}

export function eachPlayerDiscardsSupport(callback: () => any): void {
    game.players.forEach((player) => {
        while (player.supports.length) {
            const card = player.supports.pop();
            if (card) {
                player.discards.push(card);
            }
        }
    });
    callback();
}

export function returnDestroyedCards(callback: () => any): void {
    shuffle(game.cardsRemoved);
    let i: number = 0;
    while (i < 3 * game.players.length && game.cardsRemoved.length) {
        const playerNumber = i + game.currentTurn;
        while (playerNumber >= game.players.length) {
            i -= game.players.length;
        }
        const player = game.players[playerNumber];
        const card = game.cardsRemoved.pop();
        if (card) {
            player.discards.push(card);
        }
    }
    callback();
}

export function destroyMadness(num: number, callback: () => any): void {
    for (let i = 0; i < num; i++) {
        if (game.madness) {
            const card = game.madness.pop();
            if (card) {
                game.cardsRemoved.push(card);
            }
        }
    }
    callback();
}

export function destroyAllSupportedCards(callback: () => any): void {
    game.players.forEach((player) => {
        while (player.supports) {
            const card = player.supports.pop();
            if (card) {
                game.cardsRemoved.push(card);
            }
        }
    });
    callback();
}

export function eachPlayerDiscardsHandAndDraws(num: number, callback: () => any): void {
    game.players.forEach((player) => {
        while (player.hand.length) {
            const card = player.hand.pop();
            if (card) {
                player.discards.push(card);
            }
        }
        player.drawUpTo(num);
    });
    callback();
}

export function eachPlayerDiscardsTopCardsOfDeck(num: number, callback: () => any): void {
    game.players.forEach((player) => {
        for (let i: number = 0; i < num; i++) {
            if (player.deck.length) {
                const card = player.deck.pop();
                if (card) {
                    player.discards.push(card);
                }
            }
        }
    });
    callback();
}

export function eachPlayerGetsMadnessIntoDiscard(callback: () => any): void {
    game.players.forEach((player) => {
        if (game.madness.length) {
            const card = game.madness.pop();
            if (card) {
                player.discards.push(card);
            }
        }
    });
    callback();
}

export function eachPlayerGetsMadnessIntoSupport(callback: () => any): void {
    game.players.forEach((player) => {
        if (game.madness.length && player.supports.length < player.character.supportSlots) {
            const card = game.madness.pop();
            if (card) {
                player.supports.push(card);
            }
        }
    });
    callback();
}

export function eachPlayerDestroysTopCardsOfDeck(num: number, callback: () => any): void {
    game.players.forEach((player) => {
        for (let i = 0; i < num; i++) {
            if (player.deck.length) {
                const card = player.deck.pop();
                if (card) {
                    game.cardsRemoved.push(card);
                }
            }
        }
    });
    callback();
}

export function eachPlayerDiscardsCards(num: number, callback: () => any): void {
    const players = Array.from(game.players);
    playerDiscardsCards();
    function playerDiscardsCards(): void {
        if (players.length) {
            // const player = players.pop();
            // if (player) {
            //     choose(player.hand, num, (cards: IPlayerCard[]) => {
            //         cards.forEach(card => player.discards.push(card));
            //         playerDiscardsCards();
            //     });
            // }
        }
    }
}

export function eachPlayerDiscardsTypeOfCard(num: number, callback: () => any): void {
    const players = Array.from(game.players);
    playerDiscardsCards();

    function playerDiscardsCards(): void {
        if (players.length) {
            const player = players.pop();
            if (player) {
                // choose(player.hand, num, (cards: IPlayerCard[]) => {
                //     cards.forEach(card => player.discards.push(card));
                //     playerDiscardsCards();
                // });
            }
        }
    }
}

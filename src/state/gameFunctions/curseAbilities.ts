
import { shuffle } from "../buildFunctions/shuffle";
import { Game } from "../interfaces/Game";
import { drawACard } from "./drawACard";

export function eachPlayerDiscardsDeck(game: Game): void {
    game.players.forEach((player) => {
        while (player.deck.length) {
            const card = player.deck.pop();
            if (card) {
                player.discards.push(card);
            }
        }
    });
}

export function eachPlayerGetsMadnessOnDeck(game: Game): void {
    game.players.forEach((player) => {
        if (game.madness.length) {
            const card = game.madness.pop();
            if (card) {
                player.deck.push(card);
            }
        }
    });
}

export function eachPlayerDiscardsSupport(game: Game): void {
    game.players.forEach((player) => {
        while (player.supports.length) {
            const card = player.supports.pop();
            if (card) {
                player.discards.push(card);
            }
        }
    });
}

export function returnDestroyedCards(game: Game): void {
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
}

export function destroyMadness(game: Game, num: number): void {
    for (let i = 0; i < num; i++) {
        if (game.madness) {
            const card = game.madness.pop();
            if (card) {
                game.cardsRemoved.push(card);
            }
        }
    }
}

export function eachPlayerDiscardsHandAndDraws(game: Game, num: number): void {
    game.players.forEach((player) => {
        while (player.hand.length) {
            const card = player.hand.pop();
            if (card) {
                player.discards.push(card);
            }
        }
        for (let i = 0; i < num; i++) {
            const card = drawACard(game, player);
            if (card) {
                player.hand.push(card);
            }
        }
    });
}

export function eachPlayerDiscardsTopCardsOfDeck(game: Game, num: number): void {
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
}

export function eachPlayerGetsMadnessIntoDiscard(game: Game): void {
    game.players.forEach((player) => {
        if (game.madness.length) {
            const card = game.madness.pop();
            if (card) {
                player.discards.push(card);
            }
        }
    });
}

export function eachPlayerDestroysTopCardsOfDeck(game: Game, num: number): void {
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
}

export function eachPlayerDiscardsCards(game: Game, num: number): void {
    const players = Array.from(game.players);
    playerDiscardsCards();
    function playerDiscardsCards(): void {
        if (players.length) {
            const player = players.pop();
            // if (player) {
            //     choose(player.hand, num, (cards: IPlayerCard[]) => {
            //         cards.forEach(card => player.discards.push(card));
            //         playerDiscardsCards();
            //     });
            // }
        }
    }
}

export function eachPlayerDiscardsTypeOfCard(game: Game, num: number): void {
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

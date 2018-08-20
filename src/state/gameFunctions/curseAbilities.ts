import { IGame } from "../interfaces/IGame";
import { shuffle } from "../buildFunctions/shuffle";
import { drawACard } from "./drawACard";

export function eachPlayerDiscardsDeck(game: IGame): void {
    game.players.forEach(player => {
        while (player.deck.length) {
            const card = player.deck.pop();
            if (card) {
                player.discards.push(card)
            }
        }
    })
}

export function eachPlayerGetsMadnessOnDeck(game: IGame): void {
    game.players.forEach(player => {
        if (game.madness.length) {
            const card = game.madness.pop();
            if (card) {
                player.deck.push(card)
            }
        }
    })
}

export function eachPlayerDiscardsSupport(game: IGame): void {
    game.players.forEach(player => {
        while (player.supports.length) {
            const card = player.supports.pop();
            if (card) {
                player.discards.push(card)
            }
        }
    })
}

export function returnDestroyedCards(game: IGame): void {
    shuffle(game.cardsRemoved);
    let i: number = 0;
    while (i < 3 * game.players.length && game.cardsRemoved.length) {
        let playerNumber = i + game.currentTurn;
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

export function destroyMadness(game: IGame, num: number): void {
    for (let i = 0; i < num; i++) {
        if (game.madness) {
            const card = game.madness.pop();
            if (card) {
                game.cardsRemoved.push(card);
            }
        }
    }
}

export function eachPlayerDiscardsHandAndDraws(game: IGame, num: number): void {
    game.players.forEach(player => {
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
    })
}

export function eachPlayerDiscardsTopCardsOfDeck(game: IGame, num: number): void {
    game.players.forEach(player => {
        for (let i = 0; i < num; i++) {
            if (player.deck.length) {
                const card = player.deck.pop();
                if (card) {
                    player.discards.push(card);
                }
            }
        }
    })
}

export function eachPlayerGetsMadnessIntoDiscard(game: IGame): void {
    game.players.forEach(player => {
        if (game.madness.length) {
            const card = game.madness.pop();
            if (card) {
                player.discards.push(card)
            }
        }
    })
}

export function eachPlayerDestroysTopCardsOfDeck(game: IGame, num: number): void {
    game.players.forEach(player => {
        for (let i = 0; i < num; i++) {
            if (player.deck.length) {
                const card = player.deck.pop();
                if (card) {
                    game.cardsRemoved.push(card);
                }
            }
        }
    })
}
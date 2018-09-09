import { IMonster } from "../interfaces/IMonster";

// export interface IMonster {
//   name: string;
//   abilityText: string;
//   winText?: string;
//   loseText?: string;
//   curseTypes: IMana[];
//   inital: boolean;
// }

export function getMonsters(): IMonster[] {
  return [
    {
      abilityText: "Each player places the top 2 cards of their deck in their discard pile.",
      curseTypes: ["air", "water", "fire"],
      inital: true,
      name: "Red bee thing",
    },
    {
      abilityText: "Each player discards 1 card.",
      curseTypes: ["water", "earth", "air"],
      inital: true,
      name: "Green square blob thing",
    },
    {
      abilityText: "Each player receives 1 Madness in their support.",
      curseTypes: ["earth", "fire", "water"],
      inital: true,
      name: "Angry blue ghost thing",
    },
    {
      abilityText: "Destroy as many Madness from the Madness stack as the number of players.",
      curseTypes: ["fire", "air", "earth"],
      inital: true,
      name: "Multiple-eyed toadstool thing",
    },
    {
      abilityText: "Each player adds 1 Madness to their hand.",
      curseTypes: ["water", "fire", "air"],
      loseText: "Destroy 4 Madness from the Madness stack.",
      name: "Green cloaked mastermind thing",
      winText: "One player of your choice gains any 1 Spell in the Library.",
    },
    {
      abilityText: "One player of your choice discards all cards from their hand.",
      curseTypes: ["earth", "air", "fire"],
      loseText: "Each player destroys the top 2 cards of their deck.",
      name: "Orange toenail thing",
      winText: "Each player who has a free support slot places the top card of their deck in their support.",
    },
    {
      abilityText: "Each player discards one value-3 card.",
      curseTypes: ["fire", "air", "water"],
      loseText: "All players discard all Earth cards from their hands and support pool.",
      name: "Green goblin thing with key",
      winText: "Each player draws 1 card.",
    },
    {
      abilityText: "Destroy all cards in the support pool.",
      curseTypes: ["water", "earth", "fire"],
      loseText: "All players discard all Air cards from their hands and support pool.",
      name: "Green griffin thing",
      winText: "Each player chooses up to 2 cards from their discard pile and places them on top of their deck.",
    },
    {
      abilityText: "Each player who has at least 1 Madness in hand or support adds 1 Madness to their hand.",
      curseTypes: ["earth", "fire", "water"],
      loseText: "One player discards all their support cards, then receives 3 Madness into their support.",
      name: "Two aqua martian things",
      winText: "Each player may destroy as many cards from their hand as desired then draw the same number of cards.",
    },
    {
      abilityText: "Each player discards 2 cards.",
      curseTypes: ["air", "earth", "water"],
      loseText: "Each player receives 1 Madness into their discard pile.",
      name: "Red spider thing",
      winText: `Each player may destroy 1 card from their discard pile.  A
        player who does receives 1 higher-value card of the same Element into their hand.`,
    },
    {
      abilityText: "Each player destroys the first 2 cards of their deck.",
      curseTypes: ["earth", "air", "water"],
      loseText: "All players discard all Fire cards from their hands and support pool.",
      name: "Fire golem thing",
      winText: "Each player receives one value-2 card into their discard pile.",
    },
    {
      abilityText: "Destroy a total of 3 Spells of the players' choice from all players' Spells.",
      curseTypes: ["fire", "water", "earth"],
      loseText: "Each player places 1 Madness in their discard pile.",
      name: "Green flytrap plant thing",
      winText: "Each player cures all Madness from their discard pile.",
    },
    {
      abilityText: `Place 1 Madness under each Curse.  The player who destroys the Curse places the Madness
        in their discard pile`,
      curseTypes: ["air", "water", "fire"],
      loseText: `Shuffle all destroyed Element and Madness cards.  Starting with the active player, deal them
        in clockwise order to the discard piles of each player (maximum 3 per player)`,
      name: "Red sorcerer thing",
      winText: "Cure all Madness in the support pool.",
    },
    {
      abilityText: "Each player places 1 Madness on top of their deck.",
      curseTypes: ["water", "air", "earth"],
      loseText: "Each player discards their hand, then draws 5 cards.",
      name: "Red samurai thing",
      winText: "Each player cures 1 or 2 Madness from their hand and/or the support pool.",
    },
    {
      abilityText: "Each player places all Madness from their discard pile and support on top of their deck.",
      curseTypes: ["fire", "earth", "air"],
      loseText: "All players discard all Water cards from their hands and support pool.",
      name: "Green octopus thing",
      winText: `Each player may discard one value-1 card.  A player who does receives one value-3 card of the
        same Element on top of their deck.`,
    },
    {
      abilityText: "Each player discards their entire deck.",
      curseTypes: ["air", "fire", "earth"],
      loseText: "Each player discard one value-2 card.",
      name: "Red dragon thing",
      winText: `Each player who has a free support slot chooses 1 card from their discard pile and places it
        in their support.`,
    },
  ];
}

export function getFinalPageText(): IMonster {
  return {
    abilityText: "Each player places 1 Madness on top of their deck when this Monster arrives",
    curseTypes: [],
    loseText: "You lose.",
    name: "Final page",
    winText: "You win.",
  };
}

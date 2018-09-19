import { ICharacter } from "../interfaces/ICharacter";
import { getStartingDeck } from "./getStartingDeck";

export function getCharacters(): ICharacter[] {
  const characters: ICharacter[] = [
    getMaleAirMage(),
    getFemaleAirMage(),
    getMaleEarthMage(),
    getFemaleEarthMage(),
    getMaleFireMage(),
    getFemaleFireMage(),
    getMaleWaterMage(),
    getFemaleWaterMage(),
  ];
  return characters;
}

function getFemaleFireMage(): ICharacter {
  const name = "Female Fire Mage";
  const abilityText = "During your turn you can refresh 1 exhausted Spell in front of you or another player.";
  const supportSlots = 3;
  const maxSpells = 5;
  const startingDeck = getStartingDeck([
    {mana: {type: "fire", value: 2}, quantity: 1},
    {mana: {type: "air", value: 1}, quantity: 2},
    {mana: {type: "earth", value: 1}, quantity: 4},
    {mana: {type: "fire", value: 1}, quantity: 3},
    {mana: {type: "water", value: 1}, quantity: 2},
  ]);
  return {name, abilityText, supportSlots, maxSpells, startingDeck};
}

function getFemaleAirMage(): ICharacter {
  const name = "Female Air Mage";
  const abilityText = "Draw 1 card each time you destroy 1 Curse";
  const supportSlots = 3;
  const maxSpells = 5;
  const startingDeck = getStartingDeck([
    {mana: {type: "air", value: 2}, quantity: 1},
    {mana: {type: "air", value: 1}, quantity: 2},
    {mana: {type: "earth", value: 1}, quantity: 1},
    {mana: {type: "fire", value: 1}, quantity: 4},
    {mana: {type: "water", value: 1}, quantity: 4},
  ]);
  return {name, abilityText, supportSlots, maxSpells, startingDeck};
}

function getFemaleWaterMage(): ICharacter {
  const name = "Female Water Mage";
  const abilityText = "You can have up to 4 cards in Support";
  const supportSlots = 4;
  const maxSpells = 5;
  const startingDeck = getStartingDeck([
    {mana: {type: "water", value: 2}, quantity: 1},
    {mana: {type: "air", value: 1}, quantity: 4},
    {mana: {type: "earth", value: 1}, quantity: 2},
    {mana: {type: "fire", value: 1}, quantity: 2},
    {mana: {type: "water", value: 1}, quantity: 3},
  ]);
  return {name, abilityText, supportSlots, maxSpells, startingDeck};
}

function getFemaleEarthMage(): ICharacter {
  const name = "Female Earth Mage";
  const abilityText = "During your turn you can exchange 2 cards in your hand with 2 cards in Support";
  const supportSlots = 3;
  const maxSpells = 5;
  const startingDeck = getStartingDeck([
    {mana: {type: "earth", value: 2}, quantity: 1},
    {mana: {type: "air", value: 1}, quantity: 4},
    {mana: {type: "earth", value: 1}, quantity: 1},
    {mana: {type: "fire", value: 1}, quantity: 3},
    {mana: {type: "water", value: 1}, quantity: 3},
  ]);
  return {name, abilityText, supportSlots, maxSpells, startingDeck};
}

function getMaleFireMage(): ICharacter {
  const name = "Male Fire Mage";
  const abilityText = "During your turn you can discard 1 Madness from your hand and draw 1 card";
  const supportSlots = 3;
  const maxSpells = 5;
  const startingDeck = getStartingDeck([
    {mana: {type: "fire", value: 2}, quantity: 1},
    {mana: {type: "air", value: 1}, quantity: 3},
    {mana: {type: "earth", value: 1}, quantity: 2},
    {mana: {type: "fire", value: 1}, quantity: 3},
    {mana: {type: "water", value: 1}, quantity: 3},
  ]);
  return {name, abilityText, supportSlots, maxSpells, startingDeck};
}

function getMaleAirMage(): ICharacter {
  const name = "Male Air Mage";
  const abilityText = "During your turn you can draw 1 card.  If it is a Madness card, cure it.  Otherwise discard it.";
  const supportSlots = 3;
  const maxSpells = 5;
  const startingDeck = getStartingDeck([
    {mana: {type: "air", value: 2}, quantity: 1},
    {mana: {type: "air", value: 1}, quantity: 3},
    {mana: {type: "earth", value: 1}, quantity: 5},
    {mana: {type: "fire", value: 1}, quantity: 1},
    {mana: {type: "water", value: 1}, quantity: 2},
  ]);
  return {name, abilityText, supportSlots, maxSpells, startingDeck};
}

function getMaleWaterMage(): ICharacter {
  const name = "Male Water Mage";
  const abilityText = "During your turn you can treat one value-1 Air card as any Element of your choice";
  const supportSlots = 3;
  const maxSpells = 5;
  const startingDeck = getStartingDeck([
    {mana: {type: "water", value: 2}, quantity: 1},
    {mana: {type: "air", value: 1}, quantity: 3},
    {mana: {type: "earth", value: 1}, quantity: 3},
    {mana: {type: "fire", value: 1}, quantity: 3},
    {mana: {type: "water", value: 1}, quantity: 2},
  ]);
  return {name, abilityText, supportSlots, maxSpells, startingDeck};
}

function getMaleEarthMage(): ICharacter {
  const name = "Male Earth Mage";
  const abilityText = "You can have up to 6 Spells";
  const supportSlots = 3;
  const maxSpells = 6;
  const startingDeck = getStartingDeck([
    {mana: {type: "earth", value: 2}, quantity: 1},
    {mana: {type: "air", value: 1}, quantity: 1},
    {mana: {type: "earth", value: 1}, quantity: 4},
    {mana: {type: "fire", value: 1}, quantity: 3},
    {mana: {type: "water", value: 1}, quantity: 3},
  ]);
  return {name, abilityText, supportSlots, maxSpells, startingDeck};
}

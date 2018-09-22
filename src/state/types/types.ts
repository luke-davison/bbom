export type cardType = "curse"
    | "elementCard"
    | "player"
    | "discardedCard"
    | "supportedCard"
    | "discardedCard"
    | "handCard"
    | "spell"
    | "availableSpell"
    | "invocationSpace"
    | "discardPile"
    | "deck";

export type mana = "air" | "earth" | "fire" | "water" | "multicolor";

export type place = "forPurchase" | "deck" | "discard" | "hand" | "support" | "madnessPile" | "removed";

export type playerCardType = "mana" | "madness" | "other";

export type status = "free" | "payingMana";

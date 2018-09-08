import { PlayerCard } from "../classes/PlayerCard";

describe("PlayerCard", () => {
    it("select changes selected to true", () => {
        const playerCard: PlayerCard = new PlayerCard("mana");
        playerCard.select();
        expect(playerCard.selected).toBeTruthy();
      });
    it("select changes selected to false if already selected", () => {
        const playerCard: PlayerCard = new PlayerCard("mana");
        playerCard.select();
        playerCard.select();
        expect(playerCard.selected).toBeFalsy();
      });
});

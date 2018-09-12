import { getRoundDifficulty } from "./getRoundDifficulty";

describe("getRoundDifficulty", () => {
    it("return correct value for 0 round 0 difficulty", () => {
        const curses: number = getRoundDifficulty(0, 0);
        expect(curses).toBe(0);
    });
    it("return correct value for 2 round 0 difficulty", () => {
        const curses: number = getRoundDifficulty(2, 0);
        expect(curses).toBe(1);
    });
    it("return correct value for 3 round 0 difficulty", () => {
        const curses: number = getRoundDifficulty(3, 0);
        expect(curses).toBe(1);
    });
    it("return correct value for 4 round 0 difficulty", () => {
        const curses: number = getRoundDifficulty(4, 0);
        expect(curses).toBe(2);
    });
    it("return correct value for 0 round 1 difficulty", () => {
        const curses: number = getRoundDifficulty(0, 1);
        expect(curses).toBe(0);
    });
    it("return correct value for 2 round 1 difficulty", () => {
        const curses: number = getRoundDifficulty(2, 1);
        expect(curses).toBe(1);
    });
    it("return correct value for 3 round 1 difficulty", () => {
        const curses: number = getRoundDifficulty(3, 1);
        expect(curses).toBe(2);
    });
    it("return correct value for 4 round 1 difficulty", () => {
        const curses: number = getRoundDifficulty(4, 1);
        expect(curses).toBe(2);
    });
    it("return correct value for 0 round 2 difficulty", () => {
        const curses: number = getRoundDifficulty(0, 2);
        expect(curses).toBe(1);
    });
    it("return correct value for 2 round 2 difficulty", () => {
        const curses: number = getRoundDifficulty(2, 2);
        expect(curses).toBe(2);
    });
    it("return correct value for 3 round 2 difficulty", () => {
        const curses: number = getRoundDifficulty(3, 2);
        expect(curses).toBe(2);
    });
    it("return correct value for 4 round 2 difficulty", () => {
        const curses: number = getRoundDifficulty(4, 2);
        expect(curses).toBe(2);
    });
});

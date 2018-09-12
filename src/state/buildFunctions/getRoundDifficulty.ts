export function getRoundDifficulty(round: number, difficulty: number): number {
    switch (difficulty) {
        case 0:
            if (round > 3) {
                return 2;
            }
            if (round > 1) {
                return 1;
            }
            return 0;
        case 1:
            if (round > 2) {
                return 2;
            }
            if (round > 0) {
                return 1;
            }
            return 0;
        case 2:
            if (round > 1) {
                return 2;
            }
            return 1;
        default:
            return 0;
    }
}

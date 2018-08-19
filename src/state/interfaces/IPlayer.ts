import { IPlayerCard} from './IPlayerCard';
import { ICharacter } from './ICharacter';

export interface IPlayer {
    character: ICharacter;
    hand: IPlayerCard[];
    deck: IPlayerCard[];
    discards: IPlayerCard[];
    supports: IPlayerCard[];
}
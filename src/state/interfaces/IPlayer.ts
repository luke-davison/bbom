import { IPlayerCard} from './IPlayerCard';
import { ISupportSlot } from './ISupportSlot';

export interface IPlayer {
    hand: IPlayerCard[];
    deck: IPlayerCard[];
    discards: IPlayerCard[];
    supports: ISupportSlot[];
}
import { observable } from 'mobx'
import { Game } from "./interfaces/Game";

@observable
export class State {
    game: Game
    constructor() {
        
    }
    
}
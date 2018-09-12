import { observable } from "mobx";
import {observer} from "mobx-react";
import * as React from "react";

import { State } from "../state/State";
import { AvailableSpells } from "./AvailableSpells/AvailableSpells";
import { Book } from "./Book/Book";
import { ElementCards } from "./ElementCards/ElementCards";
import { InvocationTrack } from "./InvocationTrack/InvocationTrack";
import { Players } from "./Players/Players";

import "./Board.css";
import { TempStats } from "./TempStats";

@observer
export class Board extends React.Component<{}, {}> {
    @observable public state: State;

    constructor(props: {}) {
        super(props);
        this.state = new State();
    }
    public render() {
        return (
            <div className="board">
                <Book monsters={this.state.game.monsters}/>
                <InvocationTrack curses={this.state.game.curses} currentTurn={this.state.game.currentTurn}/>
                <div className="available-cards">
                    <ElementCards elementCards={this.state.game.manaCards} />
                    <AvailableSpells spells={this.state.game.spells}/>
                </div>
                <Players players={this.state.game.players}/>
                <TempStats
                    currentAction={this.state.game.currentAction}
                    currentPlayer={this.state.game.currentPlayer}
                    currentRound={this.state.game.currentRound}
                    currentTurn={this.state.game.currentTurn}
                />
            </div>
        );
    }
}

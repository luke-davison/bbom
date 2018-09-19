import {observer} from "mobx-react";
import * as React from "react";

import { state } from "../state/State";
import { AvailableSpells } from "./AvailableSpells/AvailableSpells";
import { Book } from "./Book/Book";
import { ElementCards } from "./ElementCards/ElementCards";
import { InvocationTrack } from "./InvocationTrack/InvocationTrack";
import { Players } from "./Players/Players";

import "./Board.css";
import { TempStats } from "./TempStats";

@observer
export class Board extends React.Component<{}, {}> {
    public render() {
        return (
            <div className="board">
                <Book monsters={state.game.monsters}/>
                <InvocationTrack curses={state.game.curses} clickEvent={state.click}/>
                <div className="available-cards">
                    <ElementCards elementCards={state.game.manaCards} clickEvent={state.click} />
                    <AvailableSpells spells={state.game.spells} clickEvent={state.click}/>
                </div>
                <Players players={state.game.players} clickEvent={state.click}/>
                <TempStats
                    currentAction={state.game.currentAction}
                    currentPlayer={state.game.currentPlayer}
                    currentRound={state.game.currentRound}
                    currentTurn={state.game.currentTurn}
                />
            </div>
        );
    }
}

import { observable } from "mobx";
import {observer} from "mobx-react";
import * as React from "react";

import { Book } from "./Book/Book";
import { Players } from "./Players/Players";

import { State } from "../state/State";

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
                <Players players={this.state.game.players}/>
            </div>
        );
    }
}

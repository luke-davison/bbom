import { observable } from "mobx";
import {observer} from "mobx-react";
import * as React from "react";
import { Players } from "./Players";

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
                <Players players={this.state.game.players}/>
            </div>
        );
    }
}

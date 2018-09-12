import {observer} from "mobx-react";
import * as React from "react";

import { Player } from "../state/classes/Player";

interface ITempStatsProps {
    currentTurn?: number;
    currentRound?: number;
    currentPlayer?: Player;
    currentAction?: Player;
}

@observer
export class TempStats extends React.Component<ITempStatsProps, {}> {
    public render() {
        return (
            <div className="temp-stats" style={{position: "absolute", right: "0px", top: "0px"}}>
                <div>Current Turn: {this.props.currentTurn}</div>
                <div>Current Round: {this.props.currentRound}</div>
                <div>Current Player: {this.props.currentPlayer && this.props.currentPlayer.character.name}</div>
                <div>Current Action: {this.props.currentAction && this.props.currentAction.character.name}</div>
            </div>
        );
    }
}

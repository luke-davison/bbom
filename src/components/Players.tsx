import {observer} from "mobx-react";
import * as React from "react";

import { IPlayer } from "../state/interfaces/IPlayer";
import { Player } from "./Player";

@observer
export class Players extends React.Component<{players: IPlayer[]}, {}> {
    public render() {
        return (
            <div className="players">
                {this.props.players.map((player, i) => (
                    <div className="player-container" key={i}>
                        <Player player={player} />
                    </div>
                ))}
            </div>
        );
    }
}

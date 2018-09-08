import {observer} from "mobx-react";
import * as React from "react";

import { IPlayer } from "../state/interfaces/IPlayer";
import { Hand } from "./Hand";
import { PlayerIcon } from "./PlayerIcon";

@observer
export class Player extends React.Component<{player: IPlayer}, {}> {
    public render() {
        const className: string = `player player-${this.props.player.id}`;
        return (
            <div className={className}>
                <PlayerIcon player={this.props.player} onClick={() => null} />
                <Hand player={this.props.player} />
            </div>
        );
    }
}

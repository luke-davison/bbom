import {observer} from "mobx-react";
import * as React from "react";
import { Player } from "../../state/classes/Player";

import "./PlayerIcon.css";

interface IPlayerIconProps {
    player: Player;
    onClick: (player: Player) => void;
}

@observer
export class PlayerIcon extends React.Component<IPlayerIconProps, {}> {
    public render() {
        const className: string = `player-icon player-icon-${this.props.player.id}`;
        return (
            <div className={className} onClick={() => this.props.onClick(this.props.player)}>
                {this.props.player.character.name}
            </div>
        );
    }
}

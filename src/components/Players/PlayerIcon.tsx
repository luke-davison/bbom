import {observer} from "mobx-react";
import * as React from "react";

import { Player } from "../../state/classes/Player";
import { IClickedOn } from "../../state/interfaces/IClickedOn";

import "./PlayerIcon.css";

interface IPlayerIconProps {
    player: Player;
    clickEvent: (clickedOn: IClickedOn) => any;
}

@observer
export class PlayerIcon extends React.Component<IPlayerIconProps, {}> {
    public clickEvent(): void {
        const clickedOn: IClickedOn = {type: "player"};
        this.props.clickEvent(clickedOn);
    }

    public render() {
        const className: string = `player-icon player-icon-${this.props.player.id}`;
        return (
            <div className={className} onClick={this.clickEvent.bind(this)}>
                {this.props.player.character.name}
            </div>
        );
    }
}

import {observer} from "mobx-react";
import * as React from "react";
import { IPlayer } from "../state/interfaces/IPlayer";

interface IPlayerIconProps {
    player: IPlayer;
    onClick: (player: IPlayer) => void;
}

@observer
export class PlayerIcon extends React.Component<IPlayerIconProps, {}> {
    public render() {
        const className: string = `player-icon player-icon-${this.props.player.id}`;
        return (
            <div className={className} onClick={() => this.props.onClick(this.props.player)} />
        );
    }
}

import {observer} from "mobx-react";
import * as React from "react";
import { IPlayer } from "../state/interfaces/IPlayer";
import { Card } from "./Card";

interface IHandProps {
    player: IPlayer;
}

@observer
export class Hand extends React.Component<IHandProps, {}> {

    public render() {
        const className = `player-hand player-hand-${this.props.player.id}`;
        return (
            <div className={className}>
                {this.props.player.hand.map((card) =>
                    <Card card={card} />,
                )}
            </div>
        );
    }
}

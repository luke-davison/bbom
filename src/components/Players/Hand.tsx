import {observer} from "mobx-react";
import * as React from "react";

import { PlayerCard } from "../../state/classes/PlayerCard";
import { Card } from "./Card";

import "./Hand.css";

interface IHandProps {
    hand: PlayerCard[];
}

@observer
export class Hand extends React.Component<IHandProps, {}> {
    public render() {
        const className = `player-hand`;
        return (
            <div className={className}>
                {this.props.hand.map((card, key) =>
                    <div className="player-hand-card-container" key={key}>
                        <Card card={card} />
                    </div>,
                )}
            </div>
        );
    }
}

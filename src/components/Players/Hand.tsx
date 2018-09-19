import {observer} from "mobx-react";
import * as React from "react";

import { PlayerCard } from "../../state/classes/PlayerCard";
import { IClickedOn } from "../../state/interfaces/IClickedOn";
import { Card } from "./Card";

import "./Hand.css";

interface IHandProps {
    hand: PlayerCard[];
    clickEvent: (clickedOn: IClickedOn) => any;
}

@observer
export class Hand extends React.Component<IHandProps, {}> {
    public clickEvent(card: PlayerCard): void {
        const clickedOn: IClickedOn = {type: "handCard", card};
        this.props.clickEvent(clickedOn);
    }
    public render() {
        const className = `player-hand`;
        return (
            <div className={className}>
                {this.props.hand.map((card, key) => {
                    return (
                        <div className="player-hand-card-container" key={key}>
                            <Card card={card} clickEvent={() => this.clickEvent.bind(this)(card)}/>
                        </div>
                    );
                })}
            </div>
        );
    }
}

import {observer} from "mobx-react";
import * as React from "react";

import { PlayerCard } from "../../state/classes/PlayerCard";
import { IClickedOn } from "../../state/interfaces/IClickedOn";
import { Card } from "./Card";

import "./Supports.css";

interface ISupportsProps {
    supports: PlayerCard[];
    clickEvent: (clickedOn: IClickedOn) => any;
}

@observer
export class Supports extends React.Component<ISupportsProps, {}> {
    public clickEvent(card: PlayerCard): void {
        const clickedOn: IClickedOn = {type: "supportedCard", card};
        this.props.clickEvent(clickedOn);
    }
    public render() {
        const className = `player-supports`;
        return (
            <div className={className}>
                {this.props.supports.map((card, key) =>
                    <div className="player-supported-card-container" key={key}>
                        <Card card={card} clickEvent={() => this.clickEvent.bind(this)(card)}/>
                    </div>,
                )}
            </div>
        );
    }
}

import {observer} from "mobx-react";
import * as React from "react";

import { PlayerCard } from "../state/classes/PlayerCard";
import { Card } from "./Card";

import "./Supports.css";

interface ISupportsProps {
    supports: PlayerCard[];
}

@observer
export class Supports extends React.Component<ISupportsProps, {}> {
    public render() {
        const className = `player-supports`;
        return (
            <div className={className}>
                {this.props.supports.map((card, key) =>
                    <div className="player-supported-card-container" key={key}>
                        <Card card={card} />
                    </div>,
                )}
            </div>
        );
    }
}

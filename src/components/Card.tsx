import {observer} from "mobx-react";
import * as React from "react";

import { PlayerCard } from "../state/classes/PlayerCard";

import "./Card.css";

interface ICardProps {
    card: PlayerCard;
}

@observer
export class Card extends React.Component<ICardProps, {}> {
    public render() {
        let className: string = `card card-${this.props.card.type}`;
        let manaValue: string = "";
        if (this.props.card.mana) {
            className += `card-${this.props.card.mana[0].type}`;
            manaValue = this.props.card.mana[0].value.toString();
        }
        return (
            <div className={className} onClick={this.props.card.select}>
                {manaValue}
            </div>
        );
    }
}

import {observer} from "mobx-react";
import * as React from "react";

import { IPlayerCard } from "../../state/classes/IPlayerCard";

import "./Card.css";

interface ICardProps {
    card: IPlayerCard;
    clickEvent: () => any;
}

@observer
export class Card extends React.Component<ICardProps, {}> {
    public render() {
        let className: string = `card card-${this.props.card.type}`;
        let manaValue: string = "";
        if (this.props.card.mana && this.props.card.mana.length) {
            className += ` card-${this.props.card.mana[0].type}`;
            manaValue = this.props.card.mana[0].value.toString();
        }
        if (this.props.card.selected) {
            className += ` card-selected`;
        }
        return (
            <div className={className} onClick={this.props.clickEvent}>
                {manaValue}
            </div>
        );
    }
}

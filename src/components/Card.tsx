import {observer} from "mobx-react";
import * as React from "react";

import { PlayerCard } from "../state/classes/PlayerCard";

interface ICard {
    card: PlayerCard;
}

@observer
export class Card extends React.Component<ICard, {}> {
    public render() {
        const className = "card";
        return (
            <div className={className} onClick={this.props.card.select}/>
        );
    }
}

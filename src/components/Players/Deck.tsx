import {observer} from "mobx-react";
import * as React from "react";

import { PlayerCard } from "../../state/classes/PlayerCard";

import "./Deck.css";

interface IDeckProps {
    deck: PlayerCard[];
}

@observer
export class Deck extends React.Component<IDeckProps, {}> {
    public render() {
        let className: string = "player-deck";
        if (!this.props.deck) {
            className += " player-deck-empty";
        }
        return (
            <div className={className}>Deck: {this.props.deck.length} cards</div>
        );
    }
}

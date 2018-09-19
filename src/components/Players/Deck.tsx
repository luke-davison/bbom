import {observer} from "mobx-react";
import * as React from "react";

import { PlayerCard } from "../../state/classes/PlayerCard";
import { IClickedOn } from "../../state/interfaces/IClickedOn";

import "./Deck.css";

interface IDeckProps {
    deck: PlayerCard[];
    clickEvent: (clickedOn: IClickedOn) => any;
}

@observer
export class Deck extends React.Component<IDeckProps, {}> {
    public clickEvent(): void {
        const clickedOn: IClickedOn = {type: "deck", cards: this.props.deck};
        this.props.clickEvent(clickedOn);
    }

    public render() {
        let className: string = "player-deck";
        if (!this.props.deck) {
            className += " player-deck-empty";
        }
        return (
            <div className={className} onClick={this.clickEvent.bind(this)}
                >Deck: {this.props.deck.length} cards
            </div>
        );
    }
}

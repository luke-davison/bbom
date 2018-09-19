import {observer} from "mobx-react";
import * as React from "react";
import { PlayerCard } from "../../state/classes/PlayerCard";
import { IClickedOn } from "../../state/interfaces/IClickedOn";
import { Card } from "../Players/Card";

interface IElementCardsPileProps {
    elementCards: PlayerCard[];
    clickEvent: (clickedOn: IClickedOn) => any;
}

@observer
export class ElementCardsPile extends React.Component<IElementCardsPileProps, {}> {
    public clickEvent(card: PlayerCard): void {
        if (card) {
            const clickedOn: IClickedOn = {type: "elementCard", card};
            this.props.clickEvent(clickedOn);
        }
    }

    public render() {
        const card: PlayerCard = this.props.elementCards[0];
        return (
            <div className="element-cards-pile">
                <div className="element-card-container">
                    {card
                        ? <Card card={card} clickEvent={() => this.clickEvent.bind(this)(card)}/>
                        : <div />
                    }
                </div>
                <div className="element-cards-remaining">
                    x {this.props.elementCards.length}
                </div>
            </div>
        );
    }
}

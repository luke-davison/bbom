import {observer} from "mobx-react";
import * as React from "react";
import { PlayerCard } from "../../state/classes/PlayerCard";
import { Card } from "../Players/Card";

interface IElementCardsPileProps {
    elementCards: PlayerCard[];
}

@observer
export class ElementCardsPile extends React.Component<IElementCardsPileProps, {}> {
    public render() {
        return (
            <div className="element-cards-pile">
                <div className="element-card-container">
                    {this.props.elementCards.length && <Card card={this.props.elementCards[0]} />}
                </div>
                <div className="element-cards-remaining">
                    x {this.props.elementCards.length}
                </div>
            </div>
        );
    }
}

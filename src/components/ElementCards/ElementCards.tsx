import {observer} from "mobx-react";
import * as React from "react";

import { IPlayerCard } from "../../state/classes/IPlayerCard";
import { IClickedOn } from "../../state/interfaces/IClickedOn";
import { ElementCardsPile } from "./ElementCardsPile";

import "./ElementCards.css";

interface IElementCardsProps {
    elementCards: IPlayerCard[];
    clickEvent: (clickedOn: IClickedOn) => any;
}

@observer
export class ElementCards extends React.Component<IElementCardsProps, {}> {
    public render() {
        return (
            <div className="element-cards">
                <div className="element-value2-cards">
                    <div className="fire-value2-cards element-cards-pile-container">
                        <ElementCardsPile
                            clickEvent={this.props.clickEvent}
                            elementCards={this.props.elementCards.filter(
                                (card) => card.mana && card.mana[0].type === "fire" && card.mana[0].value === 2)}
                        />
                    </div>
                    <div className="air-value2-cards element-cards-pile-container">
                        <ElementCardsPile
                            clickEvent={this.props.clickEvent}
                            elementCards={this.props.elementCards.filter(
                                (card) => card.mana && card.mana[0].type === "air" && card.mana[0].value === 2)}
                        />
                    </div>
                    <div className="earth-value2-cards element-cards-pile-container">
                        <ElementCardsPile
                            clickEvent={this.props.clickEvent}
                            elementCards={this.props.elementCards.filter(
                                (card) => card.mana && card.mana[0].type === "earth" && card.mana[0].value === 2)}
                        />
                    </div>
                    <div className="water-value2-cards element-cards-pile-container">
                        <ElementCardsPile
                            clickEvent={this.props.clickEvent}
                            elementCards={this.props.elementCards.filter(
                                (card) => card.mana && card.mana[0].type === "water" && card.mana[0].value === 2)}
                        />
                    </div>
                </div>
                <div className="element-value3-cards">
                    <div className="fire-value3-cards element-cards-pile-container">
                        <ElementCardsPile
                            clickEvent={this.props.clickEvent}
                            elementCards={this.props.elementCards.filter(
                                (card) => card.mana && card.mana[0].type === "fire" && card.mana[0].value === 3)}
                        />
                    </div>
                    <div className="air-value3-cards element-cards-pile-container">
                        <ElementCardsPile
                            clickEvent={this.props.clickEvent}
                            elementCards={this.props.elementCards.filter(
                                (card) => card.mana && card.mana[0].type === "air" && card.mana[0].value === 3)}
                        />
                    </div>
                    <div className="earth-value3-cards element-cards-pile-container">
                        <ElementCardsPile
                            clickEvent={this.props.clickEvent}
                            elementCards={this.props.elementCards.filter(
                                (card) => card.mana && card.mana[0].type === "earth" && card.mana[0].value === 3)}
                        />
                    </div>
                    <div className="water-value3-cards element-cards-pile-container">
                        <ElementCardsPile
                            clickEvent={this.props.clickEvent}
                            elementCards={this.props.elementCards.filter(
                                (card) => card.mana && card.mana[0].type === "water" && card.mana[0].value === 3)}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

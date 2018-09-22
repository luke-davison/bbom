import {observer} from "mobx-react";
import * as React from "react";

import { IPlayerCard } from "../../state/classes/IPlayerCard";
import { IClickedOn } from "../../state/interfaces/IClickedOn";
import { Card } from "./Card";

import "./Discards.css";

interface IDiscardsProps {
    discards: IPlayerCard[];
    clickEvent: (clickedOn: IClickedOn) => any;
}

@observer
export class Discards extends React.Component<IDiscardsProps, {}> {
    public clickEvent(): void {
        const clickedOn: IClickedOn = {type: "discardPile", cards: this.props.discards};
        this.props.clickEvent(clickedOn);
    }

    public render() {
        let className: string = "player-discards";
        if (!this.props.discards.length) {
            className += " player-discards-empty";
        }
        return (
            <div className={className}>
                {this.props.discards.length
                    ? <Card
                        card={this.props.discards[this.props.discards.length - 1]}
                        clickEvent={this.clickEvent.bind(this)}/>
                    : <div />
                }
            </div>
        );
    }
}

import {observer} from "mobx-react";
import * as React from "react";

import { PlayerCard } from "../state/classes/PlayerCard";
import { Card } from "./Card";

import "./Discards.css";

interface IDiscardsProps {
    discards: PlayerCard[];
}

@observer
export class Discards extends React.Component<IDiscardsProps, {}> {
    public render() {
        let className: string = "player-discards";
        if (!this.props.discards) {
            className += " player-discards-empty";
        }
        return (
            <div className={className}>
                {this.props.discards.length
                    ? <Card card={this.props.discards[this.props.discards.length - 1]} />
                    : <div />
                }
            </div>
        );
    }
}

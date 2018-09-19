import {observer} from "mobx-react";
import * as React from "react";

import { Player as PlayerClass } from "../../state/classes/Player";
import { IClickedOn } from "../../state/interfaces/IClickedOn";
import { Deck } from "./Deck";
import { Discards } from "./Discards";
import { Hand } from "./Hand";
import { PlayerIcon } from "./PlayerIcon";
import { Spells } from "./Spells";
import { Supports } from "./Supports";

import "./Player.css";

interface IPlayerProps {
    player: PlayerClass;
    clickEvent: (clickedOn: IClickedOn) => any;
}

@observer
export class Player extends React.Component<IPlayerProps, {}> {
    public clickEvent(clickedOn: IClickedOn): void {
        clickedOn.player = this.props.player;
        this.props.clickEvent(clickedOn);
    }

    public render() {
        return (
            <div className="player">
                <div className="player-icon-container">
                    <PlayerIcon player={this.props.player} clickEvent={this.clickEvent.bind(this)}/>
                </div>
                <div className="player-supports-container">
                    <Supports supports={this.props.player.supports} clickEvent={this.clickEvent.bind(this)}/>
                </div>
                <div className="player-deck-container">
                    <Deck deck={this.props.player.deck} clickEvent={this.clickEvent.bind(this)}/>
                </div>
                <div className="player-discards-container">
                    <Discards discards={this.props.player.discards} clickEvent={this.clickEvent.bind(this)}/>
                </div>
                <div className="player-hand-container">
                    <Hand hand={this.props.player.hand} clickEvent={this.clickEvent.bind(this)}/>
                </div>
                <div className="player-spells-container">
                    <Spells spells={this.props.player.spells} clickEvent={this.clickEvent.bind(this)}/>
                </div>
            </div>
        );
    }
}

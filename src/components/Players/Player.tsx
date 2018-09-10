import {observer} from "mobx-react";
import * as React from "react";

import { Player as PlayerClass } from "../../state/classes/Player";
import { Deck } from "./Deck";
import { Discards } from "./Discards";
import { Hand } from "./Hand";
import { PlayerIcon } from "./PlayerIcon";
import { Spells } from "./Spells";
import { Supports } from "./Supports";

import "./Player.css";

@observer
export class Player extends React.Component<{player: PlayerClass}, {}> {
    public render() {
        const className: string = `player`;
        return (
            <div className={className}>
                <div className="player-icon-container">
                    <PlayerIcon player={this.props.player} onClick={() => null} />
                </div>
                <div className="player-supports-container">
                    <Supports supports={this.props.player.supports} />
                </div>
                <div className="player-deck-container">
                    <Deck deck={this.props.player.deck} />
                </div>
                <div className="player-discards-container">
                    <Discards discards={this.props.player.discards} />
                </div>
                <div className="player-hand-container">
                    <Hand hand={this.props.player.hand} />
                </div>
                <div className="player-spells-container">
                    <Spells spells={this.props.player.spells} />
                </div>
            </div>
        );
    }
}

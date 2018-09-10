import {observer} from "mobx-react";
import * as React from "react";

import { Player as PlayerClass } from "../../state/classes/Player";
import { Player } from "./Player";

import "./Players.css";

@observer
export class Players extends React.Component<{players: PlayerClass[]}, {}> {
    public render() {
        return (
            <div className="players">
                <div className="player-headings">
                    <div className="player-icon-container">
                        Player
                    </div>
                    <div className="player-supports-container">
                        Supports
                    </div>
                    <div className="player-deck-container">
                        Deck
                    </div>
                    <div className="player-discards-container">
                        Discards
                    </div>
                    <div className="player-hand-container">
                        Hand
                    </div>
                    <div className="player-spells-container">
                        Spells
                    </div>
                </div>
                {this.props.players.map((player, i) => (
                    <div className="player-container" key={i}>
                        <Player player={player} />
                    </div>
                ))}
            </div>
        );
    }
}

import {observer} from "mobx-react";
import * as React from "react";

import { IClickedOn } from "../../state/interfaces/IClickedOn";
import { ISpell } from "../../state/interfaces/ISpell";
import { AvailableSpell } from "./AvailableSpell";

import "./AvailableSpells.css";

interface IAvailableSpellsProps {
    spells: ISpell[];
    clickEvent: (clickedOn: IClickedOn) => any;
}

@observer
export class AvailableSpells extends React.Component<IAvailableSpellsProps, {}> {
    public render() {
        return (
            <div className="available-spells">
                <div className="available-spell-container">
                    <AvailableSpell
                        clickEvent={this.props.clickEvent}
                        spells={this.props.spells.filter((spell) => spell.cost[0].type === "fire")}
                    />
                </div>
                <div className="available-spell-container">
                    <AvailableSpell
                        clickEvent={this.props.clickEvent}
                        spells={this.props.spells.filter((spell) => spell.cost[0].type === "earth")}
                    />
                </div>
                <div className="available-spell-container">
                    <AvailableSpell
                        clickEvent={this.props.clickEvent}
                        spells={this.props.spells.filter((spell) => spell.cost[0].type === "water")}
                    />
                </div>
                <div className="available-spell-container">
                    <AvailableSpell
                        clickEvent={this.props.clickEvent}
                        spells={this.props.spells.filter((spell) => spell.cost[0].type === "air")}
                    />
                </div>
            </div>
        );
    }
}

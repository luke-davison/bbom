import {observer} from "mobx-react";
import * as React from "react";

import { IClickedOn } from "../../state/interfaces/IClickedOn";
import { ISpell } from "../../state/interfaces/ISpell";
import { Spell } from "./Spell";

import "./Spells.css";

interface ISpellsProps {
    spells: ISpell[];
    clickEvent: (clickedOn: IClickedOn) => any;
}

@observer
export class Spells extends React.Component<ISpellsProps, {}> {
    public clickEvent(spell: ISpell): void {
        const clickedOn: IClickedOn = {type: "spell", spell};
        this.props.clickEvent(clickedOn);
    }

    public render() {
        const className = `player-spells`;
        return (
            <div className={className}>
                {this.props.spells.map((spell, key) =>
                    <div className="player-spell-container" key={key}>
                        <Spell spell={spell} clickEvent={this.clickEvent.bind(this)}/>
                    </div>,
                )}
            </div>
        );
    }
}

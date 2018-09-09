import {observer} from "mobx-react";
import * as React from "react";

import { ISpell } from "../state/interfaces/ISpell";
import { Spell } from "./Spell";

import "./Spells.css";

interface ISpellsProps {
    spells: ISpell[];
}

@observer
export class Spells extends React.Component<ISpellsProps, {}> {
    public render() {
        const className = `player-spells`;
        return (
            <div className={className}>
                {this.props.spells.map((spell, key) =>
                    <div className="player-spell-container" key={key}>
                        <Spell spell={spell} />
                    </div>,
                )}
            </div>
        );
    }
}

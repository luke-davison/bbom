import {observer} from "mobx-react";
import * as React from "react";

import { ISpell } from "../state/interfaces/ISpell";

import "./Spell.css";

interface ISpellProps {
    spell: ISpell;
}

@observer
export class Spell extends React.Component<ISpellProps, {}> {
    public render() {
        let className: string = `spell`;
        if (this.props.spell.cost.length) {
            className += ` spell-${this.props.spell.cost[0].type}`;
        }
        return (
            <div className={className}>
                {this.props.spell.name}
            </div>
        );
    }
}

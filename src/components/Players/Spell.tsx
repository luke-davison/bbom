import {observer} from "mobx-react";
import * as React from "react";

import { ISpell } from "../../state/interfaces/ISpell";
import { ManaSymbols } from "../ManaSymbols";

import "./Spell.css";

interface ISpellProps {
    spell: ISpell;
    clickEvent: () => any;
}

@observer
export class Spell extends React.Component<ISpellProps, {}> {
    public render() {
        let className: string = `spell`;
        if (this.props.spell.cost.length) {
            className += ` spell-${this.props.spell.cost[0].type}`;
        }
        return (
            <div className={className} onClick={this.props.clickEvent}>
                <div className="spell-name">{this.props.spell.name}</div>
                <ManaSymbols mana={this.props.spell.cost}/>
                <div className="spell-ability">{this.props.spell.ability}</div>
            </div>
        );
    }
}

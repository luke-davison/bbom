import {observer} from "mobx-react";
import * as React from "react";

import { IMana } from "../state/interfaces/IMana";
import { mana as manaType } from "../state/types/mana";

import "./ManaSymbols.css";

interface IManaSymbolsProps {
    mana: IMana[];
}

@observer
export class ManaSymbols extends React.Component<IManaSymbolsProps, {}> {
    public render() {
        const displayMana: manaType[] = [];
        this.props.mana.forEach((mana) => {
            for (let i = 0 ; i < mana.value; i++) {
                displayMana.push(mana.type);
            }
        });
        return (
            <div className="mana-symbols">
                {displayMana.map((mana, key) => (
                    <div key={key} className={`mana-symbol mana-symbol-${mana}`} />
                ))}
            </div>
        );
    }
}

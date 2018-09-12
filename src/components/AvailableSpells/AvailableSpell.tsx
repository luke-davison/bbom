import {observer} from "mobx-react";
import * as React from "react";

import { ISpell } from "../../state/interfaces/ISpell";
import { Spell } from "../Players/Spell";

interface IAvailableSpellProps {
    spells: ISpell[];
}

@observer
export class AvailableSpell extends React.Component<IAvailableSpellProps, {}> {
    public render() {
        const spell = this.props.spells.reduce((current, next) => {
            if (!current || current.cost[0].value > next.cost[0].value) {
                return next;
            }
            return current;
        });
        return (
            <div className="available-spell">
                {spell ? <Spell spell={spell} /> : <div />}
            </div>
        );
    }
}

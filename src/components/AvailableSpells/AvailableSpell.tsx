import {observer} from "mobx-react";
import * as React from "react";

import { IClickedOn } from "../../state/interfaces/IClickedOn";
import { ISpell } from "../../state/interfaces/ISpell";
import { Spell } from "../Players/Spell";

interface IAvailableSpellProps {
    spells: ISpell[];
    clickEvent: (clickedOn: IClickedOn) => any;
}

@observer
export class AvailableSpell extends React.Component<IAvailableSpellProps, {}> {
    public clickEvent(spell: ISpell): void {
        const clickedOn: IClickedOn = {type: "availableSpell", spell};
        this.props.clickEvent(clickedOn);
    }

    public render() {
        const spell = this.props.spells.reduce((current, next) => {
            if (!current || current.cost[0].value > next.cost[0].value) {
                return next;
            }
            return current;
        });
        return (
            <div className="available-spell">
                {spell ? <Spell spell={spell} clickEvent={() => this.clickEvent.bind(this)(spell)}/> : <div />}
            </div>
        );
    }
}

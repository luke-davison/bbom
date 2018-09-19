import {observer} from "mobx-react";
import * as React from "react";

import { IClickedOn } from "../../state/interfaces/IClickedOn";
import { ICurse } from "../../state/interfaces/ICurse";
import { ManaSymbols } from "../ManaSymbols";

interface ICurseProps {
    curse: ICurse;
    clickEvent: (clickedOn: IClickedOn) => any;
}

@observer
export class Curse extends React.Component<ICurseProps, {}> {
    public clickEvent(): void {
        const clickedOn: IClickedOn = {type: "curse", curse: this.props.curse};
        this.props.clickEvent(clickedOn);
    }
    public render() {
        return (
            <div className="curse" onClick={this.clickEvent.bind(this)}>
                <ManaSymbols mana={this.props.curse.mana} />
                <div className="curse-ability-text">
                    {this.props.curse.ability}
                </div>
            </div>
        );
    }
}

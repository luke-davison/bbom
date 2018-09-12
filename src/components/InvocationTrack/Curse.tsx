import {observer} from "mobx-react";
import * as React from "react";

import { ICurse } from "../../state/interfaces/ICurse";
import { ManaSymbols } from "../ManaSymbols";

interface ICurseProps {
    curse: ICurse;
}

@observer
export class Curse extends React.Component<ICurseProps, {}> {
    public render() {
        return (
            <div className="curse">
                <ManaSymbols mana={this.props.curse.mana} />
                <div className="curse-ability-text">
                    {this.props.curse.ability}
                </div>
            </div>
        );
    }
}

import {observer} from "mobx-react";
import * as React from "react";

import { IMonster } from "../../state/interfaces/IMonster";
import { MonsterCurses } from "./MonsterCurses";

interface IRightPageProps {
    monster: IMonster;
}

@observer
export class RightPage extends React.Component<IRightPageProps, {}> {
    public render() {
        return (
            <div className="right-page">
                <div className="monster-ability">
                    {this.props.monster.name === "Final Page" ? this.props.monster.abilityText : ""}
                </div>
                <div className="monster-win-text">
                    {this.props.monster.winText}
                </div>
                <div className="monster-lose-text">
                    {this.props.monster.loseText}
                </div>
                <MonsterCurses curses={this.props.monster.curseTypes} />
            </div>
        );
    }
}

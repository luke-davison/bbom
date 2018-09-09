import {observer} from "mobx-react";
import * as React from "react";

import { IMonster} from "../../state/interfaces/IMonster";
import { MonsterCurses } from "./MonsterCurses";

interface ILeftPageProps {
    monster: IMonster;
}

@observer
export class LeftPage extends React.Component<ILeftPageProps, {}> {
    public render() {
        return (
            <div className="left-page">
                <div className="monster-name">
                    {this.props.monster.name}
                </div>
                <div className="monster-ability">
                    {this.props.monster.abilityText}
                </div>
                <MonsterCurses curses={this.props.monster.curseTypes} />
            </div>
        );
    }
}

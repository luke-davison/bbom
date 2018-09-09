import {observer} from "mobx-react";
import * as React from "react";

import { mana } from "../../state/types/mana";

interface IMonsterCursesProps {
    curses: mana[];
}

@observer
export class MonsterCurses extends React.Component<IMonsterCursesProps, {}> {
    public render() {
        return (
            <div className="monster-curses">
            </div>
        );
    }
}

import {observer} from "mobx-react";
import * as React from "react";

import { getFinalPageText } from "../../state/buildFunctions/getMonsters";
import { IMonster} from "../../state/interfaces/IMonster";
import { LeftPage } from "./LeftPage";
import { RightPage } from "./RightPage";

import "./Book.css";

interface IBookProps {
    monsters: IMonster[];
}

@observer
export class Book extends React.Component<IBookProps, {}> {
    public render() {
        const rightPageMonster: IMonster = this.props.monsters.length > 1 ? this.props.monsters[1] : getFinalPageText();
        return (
            <div className="book">
                <LeftPage monster={this.props.monsters[0]} />
                <RightPage monster={rightPageMonster} />
            </div>
        );
    }
}

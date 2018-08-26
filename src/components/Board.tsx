import * as React from "react";
import {observer} from 'mobx-react'
import { Players } from "./Players";

@observer
export class Board extends React.Component<{}, {}> {

    render() {
        return (
            <div className="board">
                <Players />
            </div>
        )
    }
}
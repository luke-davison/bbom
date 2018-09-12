import {observer} from "mobx-react";
import * as React from "react";

import { ICurse } from "../../state/interfaces/ICurse";
import { Curse } from "./Curse";

import "./InvocationTrack.css";

interface IInvocationSpaceProps {
    curses: ICurse[];
    currentTurn: boolean;
}

@observer
export class InvocationSpace extends React.Component<IInvocationSpaceProps, {}> {
    public render() {
        return (
            <div className="invocation-space">
                {this.props.curses.map((curse, key2) => (
                    <div key={key2} className="curse-container">
                        <Curse curse={curse} />
                    </div>
                ))}
            </div>
        );
    }
}

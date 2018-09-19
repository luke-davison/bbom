import {observer} from "mobx-react";
import * as React from "react";

import { IClickedOn } from "../../state/interfaces/IClickedOn";
import { ICurse } from "../../state/interfaces/ICurse";
import { Curse } from "./Curse";

import "./InvocationTrack.css";

interface IInvocationSpaceProps {
    curses: ICurse[];
    clickEvent: (clickedOn: IClickedOn) => any;
}

@observer
export class InvocationSpace extends React.Component<IInvocationSpaceProps, {}> {
    public clickEvent(clickedOn: IClickedOn): void {
        clickedOn.curses = this.props.curses;
        this.props.clickEvent(clickedOn);
    }
    public render() {
        return (
            <div className="invocation-space">
                {this.props.curses.map((curse, key2) => (
                    <div key={key2} className="curse-container">
                        <Curse curse={curse} clickEvent={this.props.clickEvent.bind(this)}/>
                    </div>
                ))}
            </div>
        );
    }
}

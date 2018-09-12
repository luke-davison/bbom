import {observer} from "mobx-react";
import * as React from "react";

import { ICurse } from "../../state/interfaces/ICurse";
import { InvocationSpace } from "./InvocationSpace";

import "./InvocationTrack.css";

interface IInvocationTrackProps {
    curses: ICurse[][];
    currentTurn: number;
}

@observer
export class InvocationTrack extends React.Component<IInvocationTrackProps, {}> {
    public render() {
        return (
            <div className="invocation-track">
                <div className="invocation-track-headers">
                    <div className="invocation-track-header invocation-track-header-1">1</div>
                    <div className="invocation-track-header invocation-track-header-2">2</div>
                    <div className="invocation-track-header invocation-track-header-3">3</div>
                    <div className="invocation-track-header invocation-track-header-4">4</div>
                    <div className="invocation-track-header invocation-track-header-5">5</div>
                </div>
                <div className="invocation-track-spaces">
                    {this.props.curses.map((curses, key) => (
                        <div key={key} className={`invocation-space-container invocation-space-${key + 1}`}>
                            <InvocationSpace curses={curses} currentTurn={false} />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

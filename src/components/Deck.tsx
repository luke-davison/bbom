import {observer} from "mobx-react";
import * as React from "react";

import { PlayerCard } from "../state/classes/PlayerCard";

@observer
export class Deck extends React.Component<{deck: PlayerCard[]}, {}> {
    public render() {
        return (
            <div className="deck" />
        );
    }
}

import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Stars } from './Stars';
import { Button } from './Button';
import { Answer } from './Answer';
import { Numbers } from './Numbers'

interface PlayNineState {
    starsNumber: number;
    selectedNumbers: number[];
}

export class PlayNine extends React.Component<RouteComponentProps<{}>, PlayNineState> {
    constructor() {
        super();
        this.state = this.getInitialize();

    }
    getInitialize(): PlayNineState {
        return {
            starsNumber: 1 + Math.floor(Math.random() * 9),
            selectedNumbers: [],
        }
    }
    selectNumberGame(num: number): void {
        this.setState({
            selectedNumbers: this.state.selectedNumbers.concat(num),
        });
    }
    public render() {
        return <div className="container">
            <h1>Play Nine</h1>
            <hr />
            <div className="row">
                <Stars numberOfStars={this.state.starsNumber} />
                <Button />
                <Answer selectedNumbers={this.state.selectedNumbers} />
            </div>
            <br />
            <Numbers selectedNumbers={this.state.selectedNumbers} selectNumber={num => this.selectNumberGame(num)} />

        </div>;
    }
}

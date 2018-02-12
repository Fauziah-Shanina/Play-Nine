import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Stars } from './Stars';
import { Button } from './Button';
import { Answer } from './Answer';
import { Numbers } from './Numbers'
import { DoneFrame } from './DoneFrame'

interface PlayNineState {
    starsNumber: number;
    selectedNumbers: number[];
    usedNumbers: number[];
    isAnswerCorrect: number,
    reDrawRate: number,
    doneStatus: string


}

export class PlayNine extends React.Component<RouteComponentProps<{}>, PlayNineState> {
    constructor() {
        super();
        this.state = this.getInitialize();

    }

    static generateRandomNumber = () => { return 1 + Math.floor(Math.random() * 9) }
    getInitialize(): PlayNineState {
        return {

            starsNumber: PlayNine.generateRandomNumber(),
            selectedNumbers: [],
            usedNumbers: [],
            isAnswerCorrect: 0,
            reDrawRate: 5,
            doneStatus: ''

        }
    }
    selectNumberGame(clickedNum: number): void {
        this.setState({
            selectedNumbers: this.state.selectedNumbers.concat(clickedNum),
            isAnswerCorrect: 0
        });
    }

    deSelectNumberGame(clickedNum: number): void {
        this.setState(
            {
                selectedNumbers: this.state.selectedNumbers.filter(number => number !== clickedNum),
                isAnswerCorrect: 0
            }
        );

    }

    checkTheAnswer = () => {


        this.state.starsNumber === this.state.selectedNumbers.reduce((acc, num) => acc + num, 0) ? this.setState({ isAnswerCorrect: 1 }) : this.setState({ isAnswerCorrect: -1 })



    }

    acceptAnswer = () => {
        this.setState(
            {
                usedNumbers: this.state.usedNumbers.concat(this.state.selectedNumbers),
                selectedNumbers: [],
                isAnswerCorrect: 0,
                starsNumber: PlayNine.generateRandomNumber()
            }
        );

    }

    reDrawGame = () => {
        if (this.state.reDrawRate === 0) return
        this.setState(
            {
                starsNumber: PlayNine.generateRandomNumber(),
                selectedNumbers: [],
                isAnswerCorrect: 0,
                reDrawRate: this.state.reDrawRate - 1

            }
        )


    }


    public render() {
        const { selectedNumbers, starsNumber, isAnswerCorrect, usedNumbers, reDrawRate, doneStatus } = this.state;
        return <div className="container">
            <h1>Play Nine</h1>
            <hr />
            <div className="row">
                <Stars numberOfStars={starsNumber} />
                <Button selectedNumbers={selectedNumbers} checkAnswerFunc={this.checkTheAnswer} acceptAnswerFunc={this.acceptAnswer}
                    isAnswerCorrect={isAnswerCorrect} reDrawFun={this.reDrawGame} reDrawRate={reDrawRate} />
                <Answer selectedNumbers={selectedNumbers} deSelectNumberFunc={num => this.deSelectNumberGame(num)} />
            </div>
            <br />
            {doneStatus === "" ? <Numbers selectedNumbers={selectedNumbers} selectNumberFunc={num => this.selectNumberGame(num)} usedNumbers={usedNumbers} /> :
                <DoneFrame doneStatus={doneStatus} />}


        </div>;
    }
}

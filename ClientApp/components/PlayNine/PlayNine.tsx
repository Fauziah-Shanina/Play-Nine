import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Stars } from './Stars';
import { Button } from './Button';
import { Answer } from './Answer';
import { Numbers } from './Numbers'

interface PlayNineState {
    starsNumber: number;
    selectedNumbers: number[];
    usedNumbers : number[];
    isAnswerCorrect: number


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
            usedNumbers :[],
            isAnswerCorrect: 0

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

    acceptAnswer =()=>{
        this.setState (
            {
                usedNumbers: this.state.usedNumbers.concat(this.state.selectedNumbers),
                selectedNumbers:[],
                isAnswerCorrect :0,
                starsNumber: 1 + Math.floor(Math.random() * 9),
            }
        );
        
    }


    public render() {
        const { selectedNumbers, starsNumber ,isAnswerCorrect,usedNumbers} = this.state;
        return <div className="container">
            <h1>Play Nine</h1>
            <hr />
            <div className="row">
                <Stars numberOfStars={starsNumber} />
                <Button selectedNumbers={selectedNumbers} checkAnswerFunc={this.checkTheAnswer} acceptAnswerFunc={this.acceptAnswer} isAnswerCorrect = {isAnswerCorrect}/>
                <Answer selectedNumbers={selectedNumbers} deSelectNumberFunc={num => this.deSelectNumberGame(num)} />
            </div>
            <br />
            <Numbers selectedNumbers={selectedNumbers} selectNumberFunc={num => this.selectNumberGame(num)} usedNumbers={usedNumbers} />

        </div>;
    }
}

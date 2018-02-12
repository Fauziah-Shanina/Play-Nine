import * as React from 'react';
import { RouteComponentProps } from 'react-router';


interface NumbersState {
    numbersArray: number[]
}
interface NumbersProps {
    selectedNumbers: number[],
    selectNumberFunc: (num: number) => void;
    usedNumbers: number[]
}
export class Numbers extends React.Component<NumbersProps, NumbersState>{
    constructor() {
        super();
        this.state = this.getInitialize();
    }
    getInitialize(): NumbersState {
        return {
            numbersArray: [1, 2, 3, 4, 5, 6, 7, 8, 9]
        }
    }

    getClassName(num: number): string {
        if (this.props.selectedNumbers.indexOf(num) >= 0)
            return "selected";
        if (this.props.usedNumbers.indexOf(num) >= 0)
            return "used";
        else
            return "number-span";
    }



    public render() {
        return <div className="well text-center">
            <div>
                {
                    this.state.numbersArray.map(num => <span key={num} className={this.getClassName(num)}
                        onClick={() => this.props.selectNumberFunc(num)}> {num}</span>)
                }

            </div>

        </div>;
    }
}
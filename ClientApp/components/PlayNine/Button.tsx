import * as React from 'react';
import { RouteComponentProps } from 'react-router';

interface ButtonProps {
    selectedNumbers: number[],
    checkAnswerFunc: () => void,
    isAnswerCorrect:number
    acceptAnswerFunc: ()=>void
    reDrawFun : () =>void;
    reDrawRate:number

}
export class Button extends React.Component<ButtonProps>{

    constructor() {
        super();

    }
    button: any;




    public render() {
        let button;
        switch (this.props.isAnswerCorrect) {

            case 1:
                button = <button className="btn btn-success" onClick = {this.props.acceptAnswerFunc}>
                    <i className="glyphicon glyphicon-ok"></i>
                </button>
                break;


            case -1:
                button = <button className="btn btn-danger">
                    <i className="glyphicon glyphicon-remove"></i>
                </button>
                break;


            case 0:

                button = <button disabled={this.props.selectedNumbers.length === 0} className="btn" onClick ={this.props.checkAnswerFunc}>=</button>
        }
        return <div className="col-md-2">

            {button}
            <br/> <br/>
            <button className="btn btn-warning btn-sm" onClick={this.props.reDrawFun} disabled={this.props.reDrawRate===0}>
                <i className="glyphicon glyphicon-refresh"> {this.props.reDrawRate}</i>
            </button>
        </div>;
    }
}
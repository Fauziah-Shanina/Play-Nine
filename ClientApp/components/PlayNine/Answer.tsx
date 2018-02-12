import * as React from 'react';
import { RouteComponentProps } from 'react-router';

interface AnswerProps
{
  selectedNumbers: number[];
  deSelectNumberFunc : (num: number) => void
}

export  class Answer extends React.Component<AnswerProps>{
   
    public render()  {
          return<div className="col-md-5" >
            {
               this.props.selectedNumbers.map (num=><span  key={num} className="number-span " onClick ={()=>this.props.deSelectNumberFunc(num)}  > {num}</span>)
            }
          </div>;
    }
}
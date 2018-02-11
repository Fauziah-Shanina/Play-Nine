import * as React from 'react';
import { RouteComponentProps } from 'react-router';



interface StarsProps {
    numberOfStars: number;
}
export class Stars extends React.Component<StarsProps>{
    constructor() {
        super();
        
            
    }
    drawStars () : number[]
    {
        let starsArr : any []= [];
        for (let i=0 ; i< this.props.numberOfStars; i++)
        {
            starsArr.push(i);
        }
        return starsArr;
    }
    

    public render() {
        return <div className="col-md-5">
            
              { this.drawStars().map(i => <i key={i} className="glyphicon glyphicon-star"></i>)}
              
            
        </div>;
    }
}
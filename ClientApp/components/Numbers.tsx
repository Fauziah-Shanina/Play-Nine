import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export  class Numbers extends React.Component{
   
    public render()  {
          return<div className="well text-center">
          <div>
              <span className="number-span selected">1</span>
              <span  className="number-span used">2</span>
              <span  className="number-span">3</span>
              </div>
          
          </div>;
    }
}
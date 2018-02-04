import * as React from 'react';
import { RouteComponentProps } from 'react-router';




export  class Stars extends React.Component{
    
   
    public render()  {
          return<div className="col-md-5">
              <i className= "glyphicon glyphicon-star glyphicon-star"></i>
              <i className= "glyphicon glyphicon-star"></i>  
              <i className= "glyphicon glyphicon-star"></i>  
          </div>;
    }
}
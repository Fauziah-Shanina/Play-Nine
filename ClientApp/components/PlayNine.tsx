import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Stars } from './Stars';
import { Button } from './Button';
import { Answer } from './Answer';
import { Numbers } from './Numbers'



export class PlayNine extends React.Component<RouteComponentProps<{}>> {


    public render() {
        return <div className="container">
            <h1>Play Nine</h1>
            <hr />
            <div className="row">
                <Stars />
                <Button />
                <Answer />
            </div>
            <br />
            <Numbers />

        </div>;
    }
}

import * as React from 'react';
import { RouteComponentProps } from 'react-router';

interface DoneFrameProps {
    doneStatus: string

}
export class DoneFrame extends React.Component<DoneFrameProps>
{


    public render() {
        return (
            <div >
                
                <p className="text-center" > {this.props.doneStatus } </p>
            </div>
        )
    }
}
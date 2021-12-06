import React from 'react';
import Node from './Node';
import RDS from '../../resources/RDS.png';
import EC2 from '../../resources/EC2.PNG';
import ELB from '../../resources/elb.svg';

class NodesPanel extends React.Component {
    render() {
        return (
           // <div className="panel-wrapper"> 
                <div className="nodes-panel">
                    {/* {Set a div with a default text to match wireframe because i didn't have time to implement the new node type} Juanes*/}
                    <div className='default-text'>
                        <h2>TEXT</h2>
                    </div>
                    {/* Create the line separator to match wireframe. Juanes */}
                    <div className='node-separator'>
                        <span className='node-separator--line'>

                        </span>
                    </div>
                    <div className='node-wrapper'>
                        {/* Create the tree nodes. Each one with its name, color and image Url. Juanes  */}
                        <Node type='imagenode' color='rgb(0, 0, 0)' name ='RDS' imgUrl = {RDS}/>
                    </div>
                    <div className='node-wrapper'>
                        <Node type='imagenode' color='rgb(0, 0, 0)' name = 'EC2' imgUrl = {EC2}/>
                    </div>
                    <div className='node-wrapper'>
                        <Node type='imagenode' color='rgb(0, 0, 0)'name = 'Elastic Load Balancing' imgUrl = {ELB}/>
                    </div>
                    {/* Other nodes */}
                </div>
            //</div>
        );
    }
}

export default NodesPanel;
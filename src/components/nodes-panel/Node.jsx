import React from 'react';
import DragWrapper from './DragWrapper';
import { ImageNodeWidget } from '../nodes/imagenode/ImageNodeWidget';

class Node extends React.Component {
    renderNode() {
        //Obtain name and imgUrl from props to create the node. Juanes
        const { type, color, name, imgUrl } = this.props;

        if (type === 'imagenode') {
            return <ImageNodeWidget node={{ name: name, imgUrl: imgUrl }} color= 'rgb(32, 32, 32)' displayOnly />;
        }
        
        console.warn('Unknown node type');

        return null;
    }

    render() {
        const { type, color, name, imgUrl } = this.props;
        
        return (
            //Obtain name and imgUrl from props to create the node model used in the dragging process. Juanes
            <DragWrapper type={type} color={color} style={{ display: 'inline-block' }} name={name} imgUrl = {imgUrl}>
                {this.renderNode()}
            </DragWrapper>
        );
    }
}

export default Node;
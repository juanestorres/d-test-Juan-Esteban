import React from 'react';
import * as RJD from '../../../../lib/main';
import { ImageNodeModel } from './ImageNodeModel';

export class ImageNodeWidget extends React.Component {
  static defaultProps = {
    node: null,
    color: 'rgb(224, 98, 20)',
  };

  onRemove() {
    const { node, diagramEngine } = this.props;
    node.remove();
    diagramEngine.forceUpdate();
  }

  getInPort() {
    const { node, color, displayOnly } = this.props;
    let inputNode = node;

    if (displayOnly) {
      //Create node with the new argument. Juanes
      inputNode = new ImageNodeModel(node.name, color, node.imgUrl);
    }

    return inputNode.getInPort ? <RJD.DefaultPortLabel model={inputNode.getInPort()} key='in-port' /> : null;
  }

  getOutPort() {
    const { node, color, displayOnly } = this.props;
    let outputNode = node;

    if (displayOnly) {
      //Create node with the new argument. Juanes
      outputNode = new ImageNodeModel(node.name, color, node.imgUrl);
    }

    return outputNode.getOutPort ? <RJD.DefaultPortLabel model={outputNode.getOutPort()} key='out-port' /> : null;
  }

  render() {
    const { node, displayOnly, color: displayColor } = this.props;
    const { name, color, imgUrl } = node;
    const style = {};
    if (color || displayColor) {
      style.background = color || displayColor;
    }

    return (
      <div className='basic-node' style={style}>
        {/* Added a new div to put the image that comes from imgUrl. Juanes */}
        <div className='ports'>
          <div className='in'>
            {this.getInPort()}
          </div>
        </div>
        <div>
          <div className='image'>
            <img src={imgUrl} alt="Default"></img>
          </div>
          <div className='title'>
            <div className='name'>
              {/* Display the node's name instead of the default thext 'image' Juanes*/}
              {name}
            </div>
            {!displayOnly ? <div className='fa fa-close' onClick={this.onRemove.bind(this)} /> : null}
          </div>
        </div>
        <div className='ports'>
          {/* <div className='in'>
            {this.getInPort()}
          </div> */}
          <div className='out'>
            {this.getOutPort()}
          </div>
        </div>
      </div>
    );
  }
}

export const ImageNodeWidgetFactory = React.createFactory(ImageNodeWidget);

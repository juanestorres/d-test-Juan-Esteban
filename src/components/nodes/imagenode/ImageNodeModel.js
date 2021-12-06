import _ from 'lodash';
import * as RJD from '../../../../lib/main';

export class ImageNodeModel extends RJD.NodeModel {
  //Adding a new attribute (imgUrl) to the node model so it can render the image when displayed. Juanes
  constructor(name = 'Untitled', color = 'rgb(224, 98, 20)', content, imgUrl) {
    super('imagenode');
    this.addPort(new RJD.DefaultPortModel(false, 'output', 'Out'));
    this.addPort(new RJD.DefaultPortModel(true, 'input', 'In'));
    this.name = name;
    this.color = color;
    this.content = content;
    this.imgUrl = imgUrl;
  }

  deSerialize(object) {
    super.deSerialize(object);
    this.name = object.name;
    this.color = object.color;
    this.content = object.content;
    this.imgUrl = object.imgUrl;
    }

  serialize() {
    return _.merge(super.serialize(), {
      name: this.name,
      color: this.color,
      content: this.content,
      imgUrl: this.imgUrl,
    });
  }

  getInPort() {
    return this.ports.input;
  }

  getOutPort() {
    return this.ports.output;
  }
}

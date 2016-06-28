export class Element {
  constructor(type, attributes, children) {
    this.type = type;
    this.attributes = attributes;
    this.children = children;
  }
}

export default function createElement(type, attributes, children) {
  return new Element(type, attributes, children);
}


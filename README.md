# JSFiles

## Problem
Programatically generating files and documents is a pain with current libraries. The APIs are often imperative which make them harder to mentally map to building a file. Imperative APIs are often more complicated or less intuative. The libraries also don't enforce good practises via constraints. Different file formats require at the moment requires the use of many libraries and different approaches.

## Reasons for this library
- To create a declarative API for generating files
- To enable the creating of different file types from a single abstraction
- To challenge myself, learn new stuff and have fun!

## API Considerations

### Core
An abstraction layer over many file types. Instead of having to get bogged down
with implementation details of docx (for example), you can use simplified elements
that the docx file type can convert.

**Questions**
- Is the DOM a good abstraction to use? E.g. divs and spans
  Pros
  - Familiar terminology.

  Cons
  - Does the abstraction work for files?


#### createElement(type: string | function, attributes: object, children: array): Element
Main function behind JSX. Takes the input data and constructs an abstract object,
the element.

### File types
#### writeToStream(element: Element)
Need to look into streams more: https://streams.spec.whatwg.org/


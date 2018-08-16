# Documentation
Below some basic concepts:

- [Installation](#installation)
    - [Import library](#import-library)
- [Make an app](#make-an-app)
- [Component definition](#component-definition)
    - [Props](#props)
    - [Reusing components](#reusing-components)
    - [Methods](#methods)
        - [Inherited](#inherited)
    - [Handlers](#handlers)
        - [Inline logic](#inline-logic)
        - [Passing arguments](#passing-arguments)
    - [Emitter](#emitter)
    - [Lifecycle methods](#lifecycle-methods)
    - [Local component](#local-component)
    - [Mount](#mount)
    - [Directives](#directives)
        - [HTML element](#html-element)
            - [d-bind](#d-bind)
            - [d-ref](#d-ref)
        - [DOZ component](#doz-component)
            - [d:id](#did)
            - [d:store](#dstore)
            - [d:on](#don)
- [Conditional statements](#conditional-statements)
- [Loops](#loops)
- [Scoped style](#scoped-style)
- [Inline style](#inline-style)
- [Actions](#actions)
- [Component logic inside Doz constructor](#component-logic-inside-doz-constructor)
- [Develop and production](#develop-and-production)
    - [Hot module replacement and state preservation](#hot-module-replacement-and-state-preservation)
- [Write a component](#develop-and-production)

## Installation
```
npm install --save doz
```

### Import library
```js
//ES6
import Doz from 'doz'

//ES5
var Doz = require('doz');
```

## Make an app
An app is a main component that embed other components.

```js
import Doz from 'doz'

new Doz({
    root: '#app'
    template() {
        return `ciao`
    }
});
```
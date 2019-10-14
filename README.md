# React Page Title
![Travis CI Build Status](https://travis-ci.org/RyanFitzgerald/react-pagetitle.svg?branch=master)

React Page Title is a lightweight and simple utility that allows you to easily update the document title in both a class and functional component in any React app. It comes with both a hook implementation and a higher-order component implementation (that makes use of the hook).

## Installation and Usage

`npm install react-pagetitle` to first install the dependency.

After installation, there are 2 options for usage:

### Hook Usage

The first option is use via a React hook inside your functional component.

```jsx
import React from "react";
import {usePageTitle} from "react-pagetitle";

const MyComponent = props => {
  usePageTitle('My Page Title!');
  
  return (
    <div>Cool Component!</div>
  );
};

export default MyComponent;
```

### Higher-Order Component Usage

The second option is use via a Higher Order Component. The hook approach is recommended over the HOC, however when a hook can't be used (such as in a Class component), the HOC option is available.

```jsx
import React from "react";
import {withPageTitle} from "react-pagetitle";

class MyComponent extends React.Component {
  render() {
    return (
      <div>Cool Component!</div>
    );
  }
}

export default withPageTitle('My Page Title!')

const MyComponent = props => {
  usePageTitle('My Page Title!');
  
  return (
    <div>Cool Component!</div>
  );
};

export default MyComponent;
```

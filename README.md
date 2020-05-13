# React Page Name

![Travis CI Build Status](https://travis-ci.org/RyanFitzgerald/react-page-name.svg?branch=master)
![Dependencies](https://img.shields.io/david/ryanfitzgerald/react-page-name)
![MIT License](https://img.shields.io/npm/l/react-page-name)
![size](https://img.shields.io/bundlephobia/minzip/react-page-name)

React Page Name is a lightweight and simple utility that allows you to easily update the document title (page name) in both a class and functional component in any React app. It comes with both a hook implementation and a higher-order component implementation (that makes use of the hook).

## Installation and Usage

`npm install react-page-name` to first install the dependency.

After installation, there are 2 options for usage:

### Hook Usage

The first option is use via a React hook inside your functional component.

```jsx
import React from 'react';
import { usePageName } from 'react-page-name';

const MyComponent = props => {
  usePageName('My Page Name!');

  return <div>Cool Component!</div>;
};

export default MyComponent;
```

### Higher-Order Component Usage

The second option is use via a Higher Order Component. The hook approach is recommended over the HOC, however when a hook can't be used (such as in a Class component), the HOC option is available.

```jsx
import React from 'react';
import { withPageName } from 'react-page-name';

class MyComponent extends React.Component {
  render() {
    return <div>Cool Component!</div>;
  }
}

export default withPageName('My Page Name!')(MyComponent);
```

#### Props

`props.setPageName`

The Higher-Order Component implementation injects a `setPageName` function into your component that can be used to change the page name at various points of the React lifecycle. This is especially helpful in class components where you sometimes will want to change the page name only after the component has mounted and more data is available. An example of the usage is:

```jsx
import React from 'react';
import { withPageName } from 'react-page-name';

class MyComponent extends React.Component {
  componentDidMount() {
    this.props.setPageName('Another name!');
  }

  render() {
    return <div>Cool Component!</div>;
  }
}

export default withPageName()(MyComponent);
```

## Changelog

### Current Version: 1.0.1

#### Features

- Add dependency array to `useEffect` for performance increase

#### Bug Fixes

- Fix exports of built files

See CHANGELOG.md for more.

## License

MIT License. See LICENSE.md for details.

import { act } from 'react-dom/test-utils';
import React from 'react';
import ReactDOM from 'react-dom';

import withPageName from '../with-page-name';

const TestComponent = () => {
  return <div>Test Functional Component!</div>;
};

class TestClass extends React.Component {
  render() {
    return <div>Test Class Component!</div>;
  }
}

class TestClassWithProps extends React.Component {
  componentDidMount() {
    this.props.setPageName('Page Mounted Name!');
  }

  render() {
    return <div>Test Class Component!</div>;
  }
}

describe('withPageTitle', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    document.title = 'Original Name';
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('renders functional component with new page name', () => {
    const EnhancedComponent = withPageName('My Page Name')(TestComponent);

    // Test render and effect
    act(() => {
      ReactDOM.render(<EnhancedComponent />, container);
    });

    expect(document.title).toBe('My Page Name');
  });

  it('renders class component with new page name', () => {
    const EnhancedComponent = withPageName('My Page Name')(TestClass);

    // Test render and effect
    act(() => {
      ReactDOM.render(<EnhancedComponent />, container);
    });

    expect(document.title).toBe('My Page Name');
  });

  it('renders original title when no name is provided', () => {
    const EnhancedComponent = withPageName()(TestComponent);

    // Test render and effect
    act(() => {
      ReactDOM.render(<EnhancedComponent />, container);
    });

    expect(document.title).toBe('Original Name');
  });

  it('renders class component with new page name set from props', () => {
    const EnhancedComponent = withPageName('My Page Name')(TestClassWithProps);

    // Test render and effect
    act(() => {
      ReactDOM.render(<EnhancedComponent />, container);
    });

    expect(document.title).toBe('Page Mounted Name!');
  });
});

import { act } from 'react-dom/test-utils';
import React from 'react';
import ReactDOM from 'react-dom';

import withPageTitle from '../with-page-title';

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
    this.props.setPageTitle('Page Mounted Title!');
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
    document.title = 'Original Title';
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('renders functional component with new page title', () => {
    const EnhancedComponent = withPageTitle('My Page Title')(TestComponent);

    // Test render and effect
    act(() => {
      ReactDOM.render(<EnhancedComponent />, container);
    });

    expect(document.title).toBe('My Page Title');
  });

  it('renders class component with new page title', () => {
    const EnhancedComponent = withPageTitle('My Page Title')(TestClass);

    // Test render and effect
    act(() => {
      ReactDOM.render(<EnhancedComponent />, container);
    });

    expect(document.title).toBe('My Page Title');
  });

  it('renders original title when no title is provided', () => {
    const EnhancedComponent = withPageTitle()(TestComponent);

    // Test render and effect
    act(() => {
      ReactDOM.render(<EnhancedComponent />, container);
    });

    expect(document.title).toBe('Original Title');
  });

  it('renders class component with new page title set from props', () => {
    const EnhancedComponent = withPageTitle('My Page Title')(
      TestClassWithProps
    );

    // Test render and effect
    act(() => {
      ReactDOM.render(<EnhancedComponent />, container);
    });

    expect(document.title).toBe('Page Mounted Title!');
  });
});

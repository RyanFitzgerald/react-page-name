import { act } from 'react-dom/test-utils';
import React from 'react';
import ReactDOM from 'react-dom';

import { usePageName } from '../use-page-name';

const TestComponentWithCall = () => {
  usePageName('New Name!');
  return <div>Test Functional Component!</div>;
};

const TestComponentWithEmptyCall = () => {
  usePageName();
  return <div>Test Functional Component!</div>;
};

describe('usePageName', () => {
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

  it('renders with original name using hook and no param', () => {
    // Test render and effect
    act(() => {
      ReactDOM.render(<TestComponentWithEmptyCall />, container);
    });

    expect(document.title).toBe('Original Name');
  });

  it('renders with original name using hook', () => {
    // Test render and effect
    act(() => {
      ReactDOM.render(<TestComponentWithCall />, container);
    });

    expect(document.title).toBe('New Name!');
  });
});

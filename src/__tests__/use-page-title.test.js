import { act } from 'react-dom/test-utils';
import React from 'react';
import ReactDOM from 'react-dom';

import { usePageTitle } from '../use-page-title';

const TestComponentWithCall = () => {
  usePageTitle('New Title!');
  return <div>Test Functional Component!</div>;
};

const TestComponentWithEmptyCall = () => {
  usePageTitle();
  return <div>Test Functional Component!</div>;
};

describe('usePageTitle', () => {
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

  it('renders with original title using hook and no param', () => {
    // Test render and effect
    act(() => {
      ReactDOM.render(<TestComponentWithEmptyCall />, container);
    });

    expect(document.title).toBe('Original Title');
  });
});

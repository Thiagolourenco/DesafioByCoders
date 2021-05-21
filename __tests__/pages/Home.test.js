import React from 'react';
import renderer from 'react-test-renderer';

import Home from '../../src/pages/Home';

describe('testing screen Home', () => {
  it('Home', () => {
    const tree = renderer.create(<Home />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

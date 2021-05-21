import React from 'react';
import renderer from 'react-test-renderer';

import Home from '../../src/pages/Home';

describe('testing screen Home', () => {
  it('Home', () => {
    renderer.create(<Home />);

    // expect(tree).toMatchSnapshot();
  });
});

import React from 'react';
import GoogleSearchMap from './GoogleSearchMap';
import renderer from 'react-test-renderer';


it('renders correctly', () => {
  const component = renderer.create(
    <GoogleSearchMap/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
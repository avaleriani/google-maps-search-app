import React from 'react';
import NavBar from './NavBar';
import renderer from 'react-test-renderer';


it('renders correctly', () => {
  const component = renderer.create(
    <NavBar/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
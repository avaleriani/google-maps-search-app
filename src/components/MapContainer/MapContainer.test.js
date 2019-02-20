import React from 'react';
import MapContainer from './MapContainer';
import renderer from 'react-test-renderer';


it('renders correctly', () => {
  const component = renderer.create(
    <MapContainer/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
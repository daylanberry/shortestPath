import React from 'react';
import { shallow  } from 'enzyme'
import renderer from 'react-test-renderer'
import Map from './Map'

it ('should return the correct snapshot of Map component', () => {
  const mapComponent = renderer.create(<Map/>).toJSON()
  expect(mapComponent).toMatchSnapshot()
})

it ('test', () => {
  expect(1 + 1).toEqual(2)
})
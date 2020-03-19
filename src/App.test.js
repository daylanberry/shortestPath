import React from 'react';
import { shallow  } from 'enzyme'
import App from './App';
import renderer from 'react-test-renderer'


it('should return the correct length of component', () => {
  expect(shallow(<App />).length).toEqual(1)
})

it('should return the correct snapshot of App component', () => {
  const appComponent = renderer.create(<App/>).toJSON()
  expect(appComponent).toMatchSnapshot()
})
import React from 'react';
import Cell from './Cell';
import renderer from 'react-test-renderer'



it('should return desired cell for house position', () => {
  const properties = {
    x: 0,
    y: 0,
    home: [0, 0],
    dt: [1, 2],
    legends: [1, 4],
    truckee: [4, 2],
    unr: [2, 0]
  }

  const cellComponent = renderer.create(<Cell {...properties}/>).toJSON()
  expect(cellComponent).toMatchSnapshot()

  expect(1 + 1).toEqual(2)
})

it('should return desired cell for tahoe position', () => {
  const properties = {
    x: 4,
    y: 4,
    home: [0, 0],
    dt: [1, 2],
    legends: [1, 4],
    truckee: [4, 2],
    unr: [2, 0]
  }

  const cellComponent = renderer.create(<Cell {...properties}/>).toJSON()
  expect(cellComponent).toMatchSnapshot()

  expect(1 + 1).toEqual(2)
})
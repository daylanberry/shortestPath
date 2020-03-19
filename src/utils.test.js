import * as helpers from './utils'

var graph = {
  'a': { 'b': 2, 'c': 2  },
  'b': { 'a': 2, 'd': 2 },
  'c': { 'a': 2, 'e': 2 },
  'd': { 'b': 2, 'f': 2, 'e': 3 },
  'e': { 'c': 2, 'd': 3 },
  'f': { 'd': 2 }
};

var graph2 = {
  'a': { 'b': 4, 'c': 1  },
  'b': { 'a': 4, 'd': 2 },
  'c': { 'a': 1, 'e': 1 },
  'd': { 'b': 2, 'f': 2, 'e': 3 },
  'e': { 'c': 1, 'd': 3, 'f': 1 },
  'f': { 'd': 2, 'e': 1 }
};

describe("Dijkstras algorithm should return shortest path", () => {


  it('Should return an empty array if graph is blank', () => {
    expect(helpers.dijkstras({}, 'a', 'b')).toEqual([])
  })

  it('Should return an empty array if given wrong starting path', () => {
    expect(helpers.dijkstras(graph, 'z', 'f')).toEqual([])
  })

  it ('should return an empty array if given wrong ending path', () => {
    expect(helpers.dijkstras(graph, 'a', 'z')).toEqual([])
  })

  it ('should return the corrent shortest path when given a graph of edges and vertices', () => {
    expect(helpers.dijkstras(graph, 'a', 'f')).toEqual(['a', 'b', 'd', 'f'])
  })

  it('should return the corrent shortest path when given a graph of edges and vertices', () => {
    expect(helpers.dijkstras(graph2, 'a', 'f')).toEqual(['a', 'c', 'e', 'f'])
  })

  it('should return to aligning edges', () => {
    expect(helpers.dijkstras(graph, 'a', 'b')).toEqual(['a', 'b'])
  })

  it('should return to aligning edges', () => {
    expect(helpers.dijkstras(graph, 'a', 'c')).toEqual(['a', 'c'])
  })

})

it('minDistanceNode helper should return min distance node', () => {
  var nodes = new Set(Object.keys(graph))
  var distance = {a: 0, b: 2, c: 2, d: Infinity, e: Infinity, f: Infinity}

  expect(helpers.minDistanceNode(nodes, distance)).toEqual('a')
})

it('distance function should return correct distance between 2 coordinates', () => {
  expect(helpers.calculateDist([0, 0], [0, 2])).toEqual(2)
  expect(helpers.calculateDist([0, 0], [0, 0])).toEqual(0)
  expect(helpers.calculateDist([2, 4], [4, 4])).toEqual(2)
  expect(helpers.calculateDist([0, 0], [4, 4])).toEqual(5)

})

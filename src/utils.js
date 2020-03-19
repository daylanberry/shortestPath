export const  dijkstras = (graph, source, ending) => {
  let distance = {};
  for (let node in graph) {
    distance[node] = Infinity;
  }
  distance[source] = 0;

  let unvisited = new Set(Object.keys(graph));
  let previous = {};
  var path = [ending]

  while (unvisited.size > 0) {
    let currNode = minDistanceNode(unvisited, distance);
    unvisited.delete(currNode);

    for (let neighbor in graph[currNode]) {
      let distanceFromCurrToNeighbor = graph[currNode][neighbor];
      let totalNeighborDistance = distance[currNode] + distanceFromCurrToNeighbor;

      if (distance[neighbor] > totalNeighborDistance) {
        distance[neighbor] = totalNeighborDistance;
        previous[neighbor] = currNode;
      }
    }
  }

  while (previous[ending] !== source) {
    path.push(previous[ending])
    ending = previous[ending]
  }

  return [source].concat(path.reverse())

}

export const minDistanceNode = (nodes, distance) => {
  return Array.from(nodes).reduce((minNode, node) => (
    distance[node] < distance[minNode] ? node : minNode
  ));
}

export const calculateDist = (coord1, coord2) => {
  var x1 = coord1[0]
  var x2 = coord2[0]
  var y1 = coord1[1]
  var y2 = coord2[1]

  var sum = ((x2 - x1) ** 2) + ((y2 - y1) ** 2)
  return Math.floor(Math.sqrt(sum))
}

export const mapGenerator = () => {
  var map = [];

  for (var i = 0; i < 5; i++) {
    var subArr = []
    for (var j = 0; j < 5; j++) {
      subArr.push([])
    }
    map.push(subArr)
  }

  return map.reverse()
}
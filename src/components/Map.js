import React from 'react'
import './Map.css'
import downTown from '../assets/downtown-Reno.jpg'
import Cell from './Cell.js'
import { ReactComponent as Meeple } from '../assets/meeple.svg'
import * as helpers from '../utils'




class Map extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentPosition: [0, 0],
      places: {
        home: [0, 0],
        dt: [1, 2],
        unr: [2, 0],
        legends: [1, 4],
        truckee: [4, 2],
        tahoe: [4, 4]
      },
      start: false,
      pathMade: false,
      list: {

      },
      graph: {},
      path: [],
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.start) {
      const path = helpers.dijkstras(this.state.graph, 'home', 'tahoe')
      this.setState({
        path,
        start: false
      }, () => this.changePosition())
    }
  }


  setGraph = (home, dt, unr, legends, truckee, tahoe) => {
    const graph = {
      home: {
        unr: helpers.calculateDist(home, unr),
        dt: helpers.calculateDist(home, dt)
      },
      unr: {
        home: helpers.calculateDist(home, unr),
        truckee: helpers.calculateDist(unr, truckee)
      },
      dt: {
        home: helpers.calculateDist(home, dt),
        legends: helpers.calculateDist(dt, legends),
        truckee: helpers.calculateDist(dt, truckee)
      },
      legends: {
        dt: helpers.calculateDist(dt, legends),
        truckee: helpers.calculateDist(truckee, legends)
      },
      truckee: {
        unr: helpers.calculateDist(unr, truckee),
        tahoe: helpers.calculateDist(truckee, tahoe),
        legends: helpers.calculateDist(legends, truckee),
        dt: helpers.calculateDist(dt, truckee)
      },
      tahoe: {
        truckee: helpers.calculateDist(truckee, tahoe)
      }
    }

    this.setState({
      graph,
      start: true,
      pathMade: true
    })
  }


  changePosition = () => {
    if (!this.state.path.length) {
      this.setState({
        currentPosition: [0, 0],
        pathMade: false
      })
      alert('Made it to tahoe!')
      return
    }

    const path = this.state.path.slice()
    const current = path.shift()
    const currentPosition = this.state.places[current]

    this.setState({
      path: path,
      pathMade: true,
      currentPosition
    })
  }


  render() {
    const { currentPosition } = this.state
    const { places: {home, dt, unr, legends, truckee, tahoe } } = this.state
    return (
      <div className='container'>
        <div className='map'>
          {
            helpers.mapGenerator().map((row, i) => (
              <div className='row'>
                {row.map((cell, j) => {
                  const x = Math.abs(j - 4)
                  const y = Math.abs(i - 4)
                  return (
                  <ul className='cell'>
                    <div onClick={() => console.log(x, y)}>
                      <Cell
                        x={x}
                        y={y}
                        dt={dt}
                        unr={unr}
                        legends={legends}
                        truckee={truckee}
                      />
                    {currentPosition[0] === x && currentPosition[1] === y ? <Meeple className='meeple'/> : null}
                    </div>
                  </ul>
                  )
              })}
              </div>
            ))

          }
          {
            !this.state.pathMade ? <button onClick={() => this.setGraph(home, dt, unr, legends, truckee, tahoe)}>Begin</button>
            :
            <button onClick={() => this.changePosition()}>Move!</button>
          }

        </div>
      </div>
    )
  }
}

export default Map
import React from 'react'
import downTown from '../assets/downtown-Reno.jpg'
import lakeTahoe from '../assets/lake-tahoe.jpg'
import legend from '../assets/legend.jpg'
import house from '../assets/house.jpeg'
import { ReactComponent as Meeple } from '../assets/meeple.svg'

import './Cell.css'

const Cell = ({ x, y, dt, legends, truckee, unr, home }) => {


  if (dt[0] === x && dt[1] === y) {
    return <div> <img className='image' src={downTown}/>C</div>

  } else if (x === 4 && y === 4) {
    return <div> <img className='image' src={lakeTahoe}/>F</div>

  } else if (unr[0] === x && unr[1] === y) {
    return <div > < img className = 'image' src={
      'https://upload.wikimedia.org/wikipedia/en/5/55/UNR_Campus_North120520.jpg'
    }/>B</div >

  } else if (legends[0] === x && legends[1] === y) {
    return <div> <img className='image' src={legend}/>E</div>

  } else if (truckee[0] === x && truckee[1] === y) {
    return <div> <img className='image' src={'https://i.pinimg.com/originals/93/c7/f7/93c7f77f60f2b27e3a32b179731b34a3.jpg'}/>D</div>

  } else if (home[0] === x && home[1] === y) {
    return <div className='image'>
        <img className='image' src={'https://media.graytvinc.com/images/690*407/paddock+house+reno1.jpg'}/>
        A
      </div>
  }

  else {
    return <div className='blank'></div>
  }
}

export default Cell
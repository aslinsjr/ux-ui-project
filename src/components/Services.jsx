import './Services.css'

import { useState } from 'react'

const Services = () => {

const [first, setFirst] = useState(0)
const [second, setSecond] = useState(0)
const [third, setThird] = useState(0)
const [fourth, setFourth] = useState(0)

setTimeout(() => {
  setFirst(1)
}, 1000)

setTimeout(() => {
  setSecond(1)
}, 2000)

setTimeout(() => {
  setThird(1)
}, 3000)

setTimeout(() => {
  setFourth(1)
}, 4000)


  return (
    <div className='service-container'>
    <h3 className='title'>Conheça nossas cápsulas biodegradáveis</h3>
        <div className="image-container">
          <img style={{opacity: first}} src="./capsula01.png" alt="" />
          <img style={{opacity: second}} src="./capsula02.png" alt="" />
          <img style={{opacity: third}} src="./capsula03.png" alt="" />
          <p style={{opacity: fourth}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae pariatur neque eveniet aspernatur, iure ex minima illum quam veritatis asperiores, dolorum quo atque et doloribus, minus soluta labore? Quasi, autem.</p>
        </div>
    </div>
  )
}

export default Services
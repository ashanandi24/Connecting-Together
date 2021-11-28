import React from 'react'
import './IllustrationBox.scss'
import Svg from '../../assets/Images/svg2.svg'

const IllustrationBox = () => {
   return (
      <div className="illustration-box">
         <img src={Svg} alt="svg" />
      </div>
   )
}

export default IllustrationBox

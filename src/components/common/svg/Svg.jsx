import React from 'react'
import './svg.css'
function Svg() {
  return (
    <div id='style4'>
      <svg height="473px" width="519px">
          <circle cx="245" cy="235" r="238" fill="none" stroke="white" strokeWidth="3" />
          <circle cx="245" cy="235" r="230" fill="none" stroke="white" strokeWidth="3" />
          <circle cx="245" cy="235" r="222" fill="none" stroke="white" strokeWidth="3" />
          <circle cx="245" cy="235" r="200" fill="none" stroke="#003B73" strokeWidth="40" />
          <circle cx="245" cy="235" r="160" fill="none" stroke="white" strokeWidth="40" />
          <circle cx="245" cy="235" r="140" fill="#003B73" />

          <text
            x="245"
            y="235"
            textAnchor="middle"
            fill="white"
            fontSize="25"
            fontFamily="Arial, sans-serif"
          >
            SUSTAINABILITY
          </text>
          <text
            x="210"
            y="265"
            textAnchor="middle"
            fill="white"
            fontSize="25"
            fontFamily="Arial, sans-serif"
          >
            PROGRAM
          </text>
        </svg>
    </div>
  )
}

export default Svg

import React from 'react'

function Reporting() {
  
  return (
   
      <div style={{backgroundColor:"pink"}}>
      
      <svg height="600" width="800">
      <circle cx="300" cy="260" r="280" fill="none" stroke="white" strokeWidth="5"/>
      <circle cx="300" cy="260" r="260" fill="none" stroke="white" strokeWidth="5"/>
     
      <circle cx="300" cy="260" r="240" fill="none" stroke="white" strokeWidth="5"/>
     
     <circle cx="300" cy="260" r="200" fill="none" stroke="#003B73" strokeWidth="40"/>

     <circle cx="300" cy="260" r="160" fill="none" stroke="white" strokeWidth="40"/>
       
     <circle cx="300" cy="260" r="140" fill="#003B73"/>

     <text
         x="300"
         y="260"
         textAnchor="middle"
         fill="white"
         fontSize="20"
         fontFamily="Arial, sans-serif"
       >
         SUSTAINABILITY
       </text>
       <text
         x="272"
         y="285"
         textAnchor="middle"
         fill="white"
         fontSize="20"
         fontFamily="Arial, sans-serif"
       >
         PROGRAM
       </text>
     </svg>
      </div>
   
  );
}

export default Reporting;


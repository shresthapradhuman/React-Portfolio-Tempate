import React from 'react'
import "./Circle.scss"

function Circle(props) {
   const percent = {
     strokeDashoffset: 314 - (314 * `${props.percentage}`) / 100 + "px",
     stroke: props.color,
   };
   return (
     <>
       <div className="circle">
         <div className="circle__content">
           <div className="circle__bar">
             <svg>
               <circle style={percent} cx="50%" cy="50%" r="50%"></circle>
             </svg>
             <h1>{props.percentage}%</h1>
           </div>
         </div>
         <div className="circle__title">{props.title}</div>
       </div>
     </>
   );
}

export default Circle

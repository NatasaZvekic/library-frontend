import { useTransition } from '@react-spring/core'
import { animated } from '@react-spring/web'
import React from 'react'
import {useState} from 'react'
const TryHelper = (props) => {
  const [isVisible, setVisible] = useState(true)
  const [items, setItems] = useState([
    { y: 0, index:"1" },
   
   
  ])
 
  const transation = useTransition(items,{
    from: {x:800, y:0, opacity:0},
    enter: item => (next)=>(
      next({x:10, y:item.y, opacity:1})
    ) ,
    leave:{x:0, y:0, opacity:0}
  })

  return ( 
    <div> 
       <div class="newContent">
            {transation((style, item) =>
                item ? <animated.div style={style} className="title"> {props.title}</animated.div> : ''
            )}
            <div className="text">
               {props.text}
            </div>
         
           
         
        </div>
     
    </div>
  )
}

export default TryHelper
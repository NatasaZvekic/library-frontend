import { useTransition } from '@react-spring/core'
import { animated } from '@react-spring/web'
import React from 'react'
import { useState } from 'react'
const TryHelper = (props) => {
    // const [items, setItems] = useState([
    //     { x:10, y: 0 },
    // ])

    const transation = useTransition(true, {
        from: { x: 900, y: 0, opacity: 0 },
        enter: { x: 10, y: 0, opacity: 1 } 
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
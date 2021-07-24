import { useTransition } from '@react-spring/core'
import { animated } from '@react-spring/web'
import React from 'react'
import background from '..//assets/photo/book5.jpg'

const TryHelper = (props) => {

    const transation = useTransition(true, {
        from: { x: 900, y: 0, opacity: 0 },
        enter: { x: 10, y: 0, opacity: 1 }
    })

    return (
        <div class="newContent">
            <table style={{ width: '90%', marginTop: '20px' }}>
                <tr>
                    <th style={{ width: '30%' }}></th>
                    <th style={{ width: '100%' }} className="aboutTitle">  {props.title}  </th>
                </tr>

                <tr style={{ width: '50px', border: '0', marginLeft: '50px' }}>
                    <td rowspan="1" style={{ width: '30px', border: '0' }}>
                        <img className="blokPhoto1"
                            src={props.src}
                            style={{
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                border: '0'
                            }} /></td>
                    <td  className="aboutText">{props.text}</td>
                    <td>

                    </td>
                </tr>

                <tr>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                </tr>

            </table>
            {/* <div class="newContent">
                {transation((style, item) =>
                    item ? <animated.div style={style} className="title"> {props.title}</animated.div> : ''
                )}
                <div className="text">
                    {props.text}
                </div>
            </div> */}
        </div>
    )
}

export default TryHelper
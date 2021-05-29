import { useTransition } from '@react-spring/core'
import { animated } from '@react-spring/web'
import React, { Component, useEffect, useState } from 'react'
import Header from '../Header/Header'
import background from '..//assets/photo/b1.jpg'

const Home = () => {
    const transation = useTransition(true, {
        from: { x: 0, y: 500, opacity: 1 },
        enter: { x: 802, y: 500, opacity: 1 },
        delay: 60
    })
    const transation2 = useTransition(true, {
        from: { x: 1000, y: 500, opacity: 1 },
        enter: { x: 802, y: 500, opacity: 1 },
        delay: 60
    })
    return (
        <div>
            <div className="login" style={{
                backgroundImage: `url(${background})`,
                backgroundRepeat: 'no-repeat', backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <Header />
                {transation((style, item) =>
                    item ? <animated.div style={style} className="title2">
                        <p style={{ marginBottom: '-10px' }}>A reader lives a thousand lives before he dies.  </p>
                    </animated.div> : ''

                )}
                 {transation2((style, item) =>
                    item ? <animated.div style={style} className="title2">
                        <p>The man who never reads lives only one. </p>
                    </animated.div> : ''

                )}

            </div>
            {/* <div className="container"> */}
            {/* <News photoL={newsOne} side="l"
                        titleL={" Programs for Student Groups Led by a Library Facilitator"}
                        subtitleL={"VIRTUAL WORKSHOPS"}
                        photoR={newsTwo} side="r"
                        titleR={"Visit Fascinating Library Exhibitions Online"}
                        subtitleR={"EXHIBITIONS"}
                    />
                    <News photoL={newsThree} side="l"
                        titleL={"Explore the Work of Women Photojournalists"}
                        subtitleL={"RESEARCH"} */}
            {/* /> */}
            {/*                     
                    <News photo={newsOne} side="l" title={" Programs for Student Groups Led by a Library Facilitator"} subtitle={"VIRTUAL WORKSHOPS"} />
                    <News photo={newsTwo} side="r" title={"Visit Fascinating Library Exhibitions Online"} subtitle={"EXHIBITIONS"} />
                    <News photo={newsThree} side="l" title={"Explore the Work of Women Photojournalists"} subtitle={"RESEARCH"} />
                    <News photo={newsFour} side="r" title={"View a Calendar of Upcoming Virtual Programs from the Library"} subtitle={"EVENTS"} /> */}
            {/* </div> */}
        </div>
    )

}
export default Home

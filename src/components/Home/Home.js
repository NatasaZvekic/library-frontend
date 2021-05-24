import React, { Component } from 'react'
import News from './News'
import newsOne from '../assets/photo/newsOne.jpg'
import newsTwo from '../assets/photo/newsTwo.jpg'
import newsThree from '../assets/photo/newsThree.jpg'
import NewHead from '../Header/Header'

export default class Home extends Component {

    render() { console.log("loca " + localStorage.getItem("jwtToken"))
        return (
            <body>
                <NewHead />
                <div className="container" >
                    <News photoL={newsOne} side="l"
                        titleL={" Programs for Student Groups Led by a Library Facilitator"}
                        subtitleL={"VIRTUAL WORKSHOPS"}
                        photoR={newsTwo} side="r"
                        titleR={"Visit Fascinating Library Exhibitions Online"}
                        subtitleR={"EXHIBITIONS"}
                    />
                    <News photoL={newsThree} side="l"
                        titleL={"Explore the Work of Women Photojournalists"}
                        subtitleL={"RESEARCH"}
                    />
                    {/*                     
                    <News photo={newsOne} side="l" title={" Programs for Student Groups Led by a Library Facilitator"} subtitle={"VIRTUAL WORKSHOPS"} />
                    <News photo={newsTwo} side="r" title={"Visit Fascinating Library Exhibitions Online"} subtitle={"EXHIBITIONS"} />
                    <News photo={newsThree} side="l" title={"Explore the Work of Women Photojournalists"} subtitle={"RESEARCH"} />
                    <News photo={newsFour} side="r" title={"View a Calendar of Upcoming Virtual Programs from the Library"} subtitle={"EVENTS"} /> */}
                </div>
            </body>
        )
    }
}

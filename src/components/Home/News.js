import React, { Component } from 'react'

export default class News extends Component {
    render() {
        return (
            <div>
                <div class="row2">
                    <div class="column2" style={{ marginLeft: '9%' }}>
                        <img src={this.props.photoL} className="newsPhoto" />
                        <div className="newsPhoto titles" >
                            <div className="newsPhoto titles title">{this.props.titleL}</div>
                            <div className="newsPhoto titles subtitle">{this.props.subtitleL}</div>
                        </div>
                    </div>
                    <div class={this.props.titleR !== undefined ? "column2" : ""} style={{ marginLeft: '2%' }}>
                        <img src={this.props.photoR} className="newsPhoto" />
                        <div className="newsPhoto titles" >
                            <div className="newsPhoto titles title">{this.props.titleR}</div>
                            <div className="newsPhoto titles subtitle">{this.props.subtitleR}</div>
                        </div>
                    </div>
                </div>
                {/* <div class="row">
                    <div className={` ${this.props.side === "l" ? 'leftWrapper' : 'rightWrapper'}`}>
                        <img src={this.props.photo} className="newsPhoto" />
                        <div className="newsPhoto titles" >
                            <div className="newsPhoto titles title">{this.props.title}</div>
                            <div className="newsPhoto titles subtitle">{this.props.subtitle}</div>
                        </div>
                    </div> */}






            </div>
        )
    }
}

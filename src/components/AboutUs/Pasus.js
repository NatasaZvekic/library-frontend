import React, { Component } from 'react'

export default class Pasus extends Component {
    render() {
        return (
            <div>
                <div className="title">{this.props.title}</div>
                <div className="text">
                {this.props.text.split('\n').map(i => {
                    return <p>{i}</p>
                })}
                    </div>
            </div>
        )
    }
}

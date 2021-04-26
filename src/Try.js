import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap';


export default class Try extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: true
    }
  }

  handle() {
    this.setState({ opened: true })
  }
  render() {
    console.log(this.props.titleR)
    return (
      <>
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


      </>
      //   <div class="row">
      //   <div class="column" style="background-color:#aaa;">
      //     <h2>Column 1</h2>
      //     <p>Some text..</p>
      //     <p>sdfsdfa
      //   </div>
      //   <div class="column" style="background-color:#bbb;">
      //     <h2>Column 2</h2>
      //     <p>Some text..</p>
      //   </div>
      // </div>
    )
  }
}

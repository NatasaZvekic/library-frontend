import React, { Component } from 'react'

export default class Try extends Component {
  deleteGenre(genre) {
    console.log("genreNafame ")
  }
  render() {
    console.log("affsd ")
    return (
      <div>
        <button onClick={this.deleteGenre(3)}>a</button>
      </div>
    )
  }
}

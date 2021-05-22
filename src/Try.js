import React, { Component } from 'react'

export default class Try extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
        };

    }
    setAuthor(id){
        this.setState({id : id})
    }
    render() { console.log("id " + this.state.id)
        return (
            <div>
                <select
                            onChange={(event) => { this.setAuthor(event.target.value) }}  >
                           
                                    <option value="1">Ćfsdfds</option>
                                    <option value="2">dslkjfsd</option>

                        </select>
            </div>
        )
    }
}

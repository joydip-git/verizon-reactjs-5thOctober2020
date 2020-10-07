import React, { Component } from 'react'

export default class PersonDetail extends Component {
    constructor(){
        super()
        console.log('[PersonDetail] created')
    }
    render() {
        console.log('[PersonDetail] rendered')
        let { person } = this.props;
        return (
            <div>
                Name:&nbsp;<input type='text' value={person.name} />
                <br/>
                Number:&nbsp;<input type='text' value={person.mobile} />
                <br/>
                <button>Update</button>
            </div>
        )
    }    
    componentDidMount(){
        console.log('[PersonDetail] mounted')
    }
    componentWillUnmount(){
        console.log('[PersonDetail] unmounted')
    }
}

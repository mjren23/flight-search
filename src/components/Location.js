import React from 'react';

class Location extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            place: props.place
        }
        
    }

    render() {
        return (
            <div onClick={() => this.props.selectPlace}>
                
            </div>
        )
    }
}

export default Location
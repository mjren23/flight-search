import React from 'react';
import Search from './Search.js'
import CurrencySelector from './CurrencySelector.js'

class FlightHome extends React.Component {
    
    constructor(props) {
        super(props)

        this.state = {
            currency: "USD",
        }

        this.pickCurrency = this.pickCurrency.bind(this)

    }

    pickCurrency(currency) {
        console.log("setting currency to " + currency.label)
        this.setState({
            currency: currency.label
        })
    }

    render() {
        return (
            <div className="master">
                <div className="header">
                    <div className="title">
                        Flight Search
                        - where to next?
                    </div>
                    <div className="currencies">
                        <CurrencySelector pickCurrency={this.pickCurrency}></CurrencySelector>
                    </div>
                </div>
                <Search today={new Date()} currency={this.state.currency}></Search>
            </div>
        )
    }
}

export default FlightHome
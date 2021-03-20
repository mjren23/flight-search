import React from 'react';
import Search from './Search.js'
import CurrencySelector from './CurrencySelector.js'

class FlightHome extends React.Component { // holds the header and main search component
    
    constructor(props) {
        super(props)

        this.state = {
            currency: "USD",
        }

        this.pickCurrency = this.pickCurrency.bind(this)

    }

    pickCurrency(currency) { // to be called from currency selector component, when the user changes the currency
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
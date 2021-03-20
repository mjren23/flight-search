import React from 'react';
import '../styles/SearchResult.css'
import getSymbolFromCurrency from 'currency-symbol-map'
import flight_land from '../assets/flight_land-24px.svg';
import flight_takeoff from '../assets/flight_takeoff-24px.svg';
import arrow_right from '../assets/arrow_forward-24px.svg'
import arrow_left from '../assets/arrow_back-24px.svg'

class SearchResult extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            price: props.price,
            carrier: props.carrier,
            direct: props.direct,
            currency: props.currency,
            destination: props.destination,
            origin: props.origin,
            date: props.date,
            cheapest: props.cheapest,
            roundtrip: props.roundtrip,
            inboundleg: props.inboundleg,
            returnDate: props.inbounddate,
        };

        this.getDirectComponent = this.getDirectComponent.bind(this)
        this.getAirports = this.getAirports.bind(this)
        this.getDates = this.getDates.bind(this)

    }

    getDirectComponent() {
        if (this.state.direct) {
            return <div className="direct">Direct flight</div>
        }
        else {
            return <div className="direct">Indirect flight</div>
        }
    }

    getAirports() { // display either one or two sets of destination-origin pairs 
        if (!this.state.roundtrip) {
            return (
                <div className="locations">
                        <div className="airports">
                            <div className="location">
                                {this.state.origin}
                            </div>
                            <img id="arrow" src={arrow_right} alt="arrow right"/>
                            <div className="location">
                                {this.state.destination}
                            </div>
                        </div>
                        <div className="icons">
                            <img className="icon" src={flight_takeoff} alt="plane icon takeoff" />
                            <img src={flight_land} alt="plane icon landing" />
                        </div>
                </div>
            )
        }
        else {
            return (
                <div className="double">
                    <div className="locations">
                        <div className="airports">
                            <div className="location">
                                {this.state.origin}
                            </div>
                            <img id="arrow" src={arrow_right} alt="arrow right"/>
                            <div className="location">
                                {this.state.destination}
                            </div>
                        </div>
                        <div className="icons">
                            <img className="icon" src={flight_takeoff} alt="plane icon takeoff" />
                            <img src={flight_land} alt="plane icon landing" />
                        </div>
                    </div>
                    <div className="locations">
                        <div className="airports">
                            <div className="location">
                                {this.state.destination}
                            </div>
                            <img id="arrow" src={arrow_left} alt="arrow right"/>
                            <div className="location">
                                {this.state.origin}
                            </div>
                        </div>
                        <div className="icons">
                            <img className="icon" src={flight_land} alt="plane icon takeoff" />
                            <img src={flight_takeoff} alt="plane icon landing" />
                        </div>
                    </div>
                </div>
            )
        }
    }

    getDates() { // display either one or two dates, depending on round trip
        if (!this.state.roundtrip) {
            return (
                <div className="dateChunk">
                        <div className="date">
                                {this.state.date.toLocaleDateString(undefined, {month: "long"}) + " " + this.state.date.toLocaleDateString(undefined, {day: "numeric"})}
                            </div>
                        <this.getDirectComponent></this.getDirectComponent>
                </div>
            )
        }
        else {
            return (
                <div className="double">
                    <div className="dateChunk" id="roundtripDate">
                        <div className="date">
                                {this.state.date.toLocaleDateString(undefined, {month: "long"}) + " " + this.state.date.toLocaleDateString(undefined, {day: "numeric"})}
                            </div>
                        <this.getDirectComponent></this.getDirectComponent>
                    </div>
                    <div className="dateChunk" id="roundtripDate">
                        <div className="date">
                                {this.state.returnDate.toLocaleDateString(undefined, {month: "long"}) + " " + this.state.returnDate.toLocaleDateString(undefined, {day: "numeric"})}
                            </div>
                        <this.getDirectComponent></this.getDirectComponent>
                    </div>
                </div>
            )
        }
    }




    render() {
        return (
            <div className="result" id={this.state.cheapest ? "cheapest" : ""}>
                
                <div className="price-container">
                    <div className="price">
                        {getSymbolFromCurrency(this.state.currency) + this.state.price}
                    </div>
                </div>
                    <this.getAirports></this.getAirports>
                    <this.getDates></this.getDates>
                    <div className="carrier">
                        {this.state.carrier}
                    </div>
            </div>
        )
    }
}

export default SearchResult
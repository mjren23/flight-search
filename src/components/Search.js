import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../styles/Search.css';
import axios from 'axios';
import SearchResult from './SearchResult.js'
import LocationBar from './LocationBar.js'
import SearchError from './SearchError.js'
import ReactLoading from 'react-loading';
import airplane from '../assets/airplane.png'


class Search extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            destination: "",
            origin: "",
            departureDate: new Date(props.today.getFullYear(), props.today.getMonth(), props.today.getDate() + 1),
            returnDate: null,
            buttonShow: false,
            results: null,
            loading: false,
            showImage: true,
            currency: props.currency,
            roundtrip: false,
            message: "Dates must be at least one day in the future",
        };
        console.log("constructor")
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleDepartureDateSelect = this.handleDepartureDateSelect.bind(this);
        this.handleDepartureDateChange = this.handleDepartureDateChange.bind(this);
        this.handleReturnDateChange = this.handleReturnDateChange.bind(this);
        this.handleReturnDateSelect = this.handleReturnDateSelect.bind(this);
        this.onSearch = this.onSearch.bind(this)
        this.showAlert = this.showAlert.bind(this)
        this.readResponse = this.readResponse.bind(this)
        this.showResults = this.showResults.bind(this)
        this.showLoader = this.showLoader.bind(this)

    }

    handleLocationChange = (newValue, id) => {
        console.log(this.state.returnDate)
        if (id == "destination"){
            this.setState( {
                destination: newValue.value
            })
            if (this.state.origin.length > 0) {
                this.setState({
                    buttonShow: true
                })
            }
        }
        else {
            this.setState({
                origin: newValue.value
            })
            if (this.state.destination.length > 0) {
                this.setState({
                    buttonShow: true
                })
            }
        }
    }

    handleDepartureDateSelect(e) {
        console.log("date select  ")
        console.log(e)
        // this.setState({
        //     departureDate: null
        // })
        this.setState({
            departureDate: e
        })
    }

    handleDepartureDateChange(e) {
        console.log("date  change")
        console.log(e)
        // this.setState({
        //     departureDate: null
        // })
        this.setState({
            departureDate: e
        })
    }

    handleReturnDateSelect(e) {
        console.log("DATE")
        console.log(e)
        this.setState({
            returnDate: e,
        })
    }

    handleReturnDateChange(e) {
        if (e == null) {
            this.setState({
                returnDate: e,
                roundtrip: false,
            })
        }
        else {
            this.setState({
                returnDate: e,
                roundtrip: true,
            })
        }
    }

    onSearch() {
        this.setState({
            results: null
        })
        console.log("currency! " + this.state.currency)
        const date = this.state.departureDate
        const date_return = this.state.returnDate

        if (this.state.roundtrip && (this.state.returnDate < this.state.departureDate)) {
            this.setState({
                showAlert: true,
                loading: false,
                message: "Return date must be after departure date",
            })
            return;
        }



        const date1 = new Date()

        var date1_tomorrow = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate() + 1);

        if (date1_tomorrow.getFullYear() <= date.getFullYear() && date1_tomorrow.getMonth() <= date.getMonth() && date1_tomorrow.getDate() <= date.getDate()) {
            const url = "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0"
        
            const headers = {
                'x-rapidapi-key': '206f8b7770msh3b6406f406cd87bp19f0a9jsna2fbc9477909',
                'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com'
            }
            const country = "US"
            const currency = this.state.currency
            console.log(currency)
            const locale = "en-US"
            const originplace = this.state.origin
            const destinationplace = this.state.destination
            const outboundpartialdate = `${date.toLocaleDateString(undefined, {year: "numeric"})}-${date.toLocaleDateString(undefined, {month: "2-digit"})}-${date.toLocaleDateString(undefined, {day: "2-digit"})}`
            var inboundpartialdate = ""

            if (this.state.roundtrip) {
                inboundpartialdate = `${date_return.toLocaleDateString(undefined, {year: "numeric"})}-${date_return.toLocaleDateString(undefined, {month: "2-digit"})}-${date_return.toLocaleDateString(undefined, {day: "2-digit"})}`
            }

            axios.get(`${url}/${country}/${currency}/${locale}/${originplace}/${destinationplace}/${outboundpartialdate}/${inboundpartialdate}`,
            {headers}).then((response) => {
                this.readResponse(response)
            }, (error) => {
                console.log(error)
            })
            this.setState({
                loading: true,
                showImage: false,
            })
        }
        else {
            this.setState({
                showAlert: true,
                loading: false,
                message: "Dates must be at least one day in the future",
            })
        }
    }

    readResponse(response) {
        console.log(response)
        var carriers = new Map()
        Array.from(response.data.Carriers).forEach(carrier => {carriers.set(carrier.CarrierId, carrier.Name)})
        var places_name = new Map()
        Array.from(response.data.Places).forEach(place => {places_name.set(place.PlaceId, place.Name)})
        const places_code = new Map()
        Array.from(response.data.Places).forEach(place => {places_code.set(place.PlaceId, place.SkyscannerCode)})

        console.log(carriers)
        var newResults = []

        
        if (response.data.Quotes.length > 0) {
            var cheapest_index = 0
            var price = response.data.Quotes[0].MinPrice
            for (var i = 1; i < response.data.Quotes.length; i++) {
                let curr_quote = response.data.Quotes[i].MinPrice
                if (curr_quote < price) {
                    cheapest_index = i
                    price = curr_quote
                }
            }
        }
        for (var j = 0; j < response.data.Quotes.length; j++) {
            let quote = response.data.Quotes[j]
            newResults.push(<SearchResult 
                price={quote.MinPrice} 
                carrier={carriers.get(quote.OutboundLeg.CarrierIds[0])}
                direct={quote.Direct}
                destination={places_code.get(quote.OutboundLeg.DestinationId)}
                origin={places_code.get(quote.OutboundLeg.OriginId)}
                currency={this.state.currency}
                cheapest={j == cheapest_index ? true : false}
                date={this.state.departureDate}
                roundtrip={this.state.roundtrip}
                inboundleg={this.state.roundtrip ? quote.InboundLeg : null}
                inbounddate={this.state.roundtrip ? this.state.returnDate : null}
                />)
        }
        
        console.log("new results")
        console.log(newResults)

        this.setState({
            results: newResults,
            loading: false,
        
        })

    }

    showResults() {
        if (this.state.results != null) {
            if (this.state.results.length > 0) {
                console.log("here")
                console.log(this.state.results)
                return (
                    <div>
                        {this.state.results}
                    </div>
                )
            }
            else {
                console.log("no results")

                return (
                    <SearchError></SearchError>
                )
            }
        }
        else {
            console.log("null")
            return (
                <div></div>
            )
        }
    }


    showAlert() {

        if (this.state.showAlert) {
          return (
            <div className="alert" >
                    <p className="alertheading">{this.state.message}</p>
                    <button onClick={() => this.setState({ showAlert: false})}>X</button>
            </div>
          );
        }
        else {
            return <div></div>
        }
    }

    showLoader() {
        if (this.state.loading) {
            return <ReactLoading type={'balls'} color={"#2762e0"} height={50} width={50} className="loader"/>
        }
        else {
            return <div></div>
        }
    }

    componentDidUpdate(prevProps, prevState) {

        if (prevProps.currency != this.props.currency) {
            this.setState({
                currency: this.props.currency
            })
            
        }
    }


    render() {
        return (
            <div className="master">

                <div className="border">
                
                    <this.showAlert></this.showAlert>
                    
                    <div className="container">
                
                        <div className="group">
                            <LocationBar placeholder="To:" id="destination" getLocations={this.getLocations} handleLocationChange={this.handleLocationChange}>

                            </LocationBar>
                            <LocationBar placeholder="From:" id="origin" getLocations={this.getLocations} handleLocationChange={this.handleLocationChange}>

                            </LocationBar>
                        </div>
                        <div className="group" style={{marginBottom: "10px"}}>
                            <label onClick={e => e.preventDefault()}>
                                Departure Date:
                                <DatePicker className="dateinput" selected={this.state.departureDate}
                                            onSelect={this.handleDepartureDateSelect} //when day is clicked
                                            onChange={this.handleDepartureDateChange} 
                                            >
                                </DatePicker>
                            </label>
                            <label onClick={e => e.preventDefault()}>
                                Return Date:
                                <DatePicker className="dateinput" 
                                            onSelect={this.handleReturnDateSelect} //when day is clicked
                                            onChange={this.handleReturnDateChange} selected={this.state.returnDate}>
                                </DatePicker>
                            </label>
                        </div>
                        
                        <div className="button">
                            <span onClick={this.state.buttonShow ? this.onSearch : null} className="enter" id={this.state.buttonShow? "" : "disabled"}>Find flights</span>
                        </div>
                        
                    </div>
                    <div className="loader-container">
                        <this.showLoader></this.showLoader>
                    </div>

                    {this.state.showImage? <img className="airplane" src={airplane} alt="plane art" /> : <div></div>}
                
                    <this.showResults></this.showResults>

                </div>
                
            </div>
        
    
        )
    }
}

export default Search
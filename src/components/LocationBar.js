import React from 'react';
import axios from 'axios';
import Async from 'react-select/async';
import '../styles/LocationBar.css'

class LocationBar extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            id: props.id // to determine whether this is destination or origin
        };
        this.getLocations = this.getLocations.bind(this)
        this.parseLocations = this.parseLocations.bind(this)
    }

    getLocations(input, callback) { // make async call to search while user is typing
        if (input.length >= 2) {
            console.log("inside getLocations")

            const url = "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0"
        
            const country = "US"
            const currency = "USD"
            const locale = "en-US"

            var options = {
                method: 'GET',
                url: `${url}/${country}/${currency}/${locale}/`,
                params: {query: input},
                headers: {
                    'x-rapidapi-key': process.env.REACT_APP_KEY,
                    'x-rapidapi-host': process.env.REACT_APP_HOST,
                }
            };

            axios.request(options).then(function (response) {
                // console.log(response)
                callback(this.parseLocations(response))
            }.bind(this)).catch(function (error) {
                console.error(error);
            });
        }
    }

    parseLocations(response) { // process response to display
        var array = []

        var places = Array.from(response.data.Places)
        for (var i = 0; i < places.length; i++) {
            array.push({
              label: places[i].PlaceName + ", " + places[i].CountryName,
              value: places[i].PlaceId
            });
          }
       
        return array
    }

    render() {
        return (
            <Async components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }}
                className="search" placeholder={this.props.placeholder} 
                loadOptions={(input, callback) => this.getLocations(input, callback)} 
                onChange={(newValue) => this.props.handleLocationChange(newValue, this.state.id)}>
            </Async>
        )
    }
}

export default LocationBar
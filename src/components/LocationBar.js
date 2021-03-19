import React from 'react';
import axios from 'axios';
import Async, { makeAsyncSelect } from 'react-select/async';
import '../styles/LocationBar.css'

class LocationBar extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            id: props.id
        };
        this.getLocations = this.getLocations.bind(this)
        this.parseLocations = this.parseLocations.bind(this)
    }

    getLocations(input, callback) {
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
              'x-rapidapi-key': '206f8b7770msh3b6406f406cd87bp19f0a9jsna2fbc9477909',
              'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com'
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

    parseLocations(response) {
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
            className="search" placeholder={this.props.placeholder} loadOptions={(input, callback) => this.getLocations(input, callback)} onChange={(newValue) => this.props.handleLocationChange(newValue, this.state.id)}>
            </Async>
        )
    }
}

export default LocationBar
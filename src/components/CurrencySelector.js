import React from 'react';
import '../styles/CurrencySelector.css'
import axios from 'axios'
import Select from 'react-select';


class CurrencySelector extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            expand: false,
            options: [],
        };

        this.getCurrencies = this.getCurrencies.bind(this)
        this.showCurrencies = this.showCurrencies.bind(this)

    }

    getCurrencies() {
    
        var options = {
            method: 'GET',
            url: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/reference/v1.0/currencies',
            headers: {
              'x-rapidapi-key': '206f8b7770msh3b6406f406cd87bp19f0a9jsna2fbc9477909',
              'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com'
            }
          };
          var self = this
          
          axios.request(options).then(function (response) {
              var currencies = []
              Array.from(response.data.Currencies).forEach( currency => {
                currencies.push({
                    label: currency.Code,
                    value: currency.Code,
                  });
              })
              self.setState({
                  options: currencies,
                  expand: true,
              })

          }).catch(function (error) {
              console.error(error);
          });
    }

    showCurrencies() {
        if (this.state.expand) {
            return (
                <Select options={this.state.options} className="select" onChange={(newValue) => this.props.pickCurrency(newValue)}></Select>
            )
        }
        else {
            return (
                <div className="button-currency">$</div>
            )
        }
    }


    render() {
        return (
            <div onClick={this.getCurrencies}>
                <this.showCurrencies></this.showCurrencies>
            </div>
        )
    }
}

export default CurrencySelector
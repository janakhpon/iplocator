import React, { Component } from 'react';
import Searchbar from '../../Components/Searchbar';
import Displayinfo from '../../Components/Displayinfo';
import DisplayMap from '../../Components/Displaymap';
import './index.css';

const apiUrl = "http://api.ipstack.com/";
const apiKey = "6bec72027b1965bcb7b7078ceb53db2a";

class Appcontainer extends Component {


    state={
        searchedLocation : [],
        hasError: false,
        isLoading: false,
        city:"",
        continent_code:"",
        continent_name:"",
        country_name:"",
        ip:"",
        latitude:"",
        calling_code:"",
        capital:"",
        country_flag:"",
        language_code:"",
        language_name:"",
        language_native:"",
        longitude:"",
        region_code:"",
        region_name:"",
        zip:""


    }

    getSearchedLocation = (ip) => {
        const requestUrl = `${apiUrl}${ip}?access_key=${apiKey}`;
  
        fetch(requestUrl)
        .then((response) => response.json())
        .then(searchedLocation => {
          this.setState({
            searchedLocation: [
              ...this.state.searchedLocation,
              searchedLocation,
            ],
          })
        })
        .catch(e => {
          this.setState({
            hasError: true,
          })
        });
    }
  

    render() {
        const { searchedLocation } = this.state;
        const lastSearch = searchedLocation[searchedLocation.length -1];
        console.log(searchedLocation);

        return (
            <div className="ui container ">

                <div className="ui grid">
                    <div className="sixteen wide column">

                        <Searchbar getSearchedLocation={this.getSearchedLocation}/>
                        
                    </div>

                    <div className="ten wide column">
                    {
                         searchedLocation.length > 0
                         &&
                         <DisplayMap
                         latitude={lastSearch.latitude}
                         longitude={lastSearch.longitude}
                         />

                    }
                     
                    </div>

                    <div className="six wide column">
                        {
                            searchedLocation.length > 0
                            &&
                            <Displayinfo
                        
                        city={lastSearch.city}
                        continent_code={lastSearch.continent_code}
                        continent_name={lastSearch.continent_name}
                        country_name={lastSearch.country_name}
                        ip={lastSearch.ip}
                        latitude={lastSearch.latitude}
                        calling_code={lastSearch.location.calling_code}
                        capital={lastSearch.location.capital}
                        country_flag={lastSearch.location.country_flag}
                        language_code={lastSearch.location.languages.code}
                        language_name={lastSearch.location.languages.name}
                        language_native={lastSearch.location.languages.native}
                        longitude={lastSearch.longitude}
                        region_code={lastSearch.region_code}
                        region_name={lastSearch.region_name}
                        zip={lastSearch.zip}

                        />

                        }
                    </div>
                </div>
            </div>
        );
    }
};

export default Appcontainer;
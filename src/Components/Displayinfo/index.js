import React from 'react';
import './index.css';

const Displayinfo = ({
    


    city,
    continent_code,
    continent_name,
    country_name,
    ip,
    latitude,
    calling_code,
    capital,
    country_flag,
    language_code,
    language_name,
    language_native,
    longitude,
    region_code,
    region_name,
    zip

}) => {

    return (

        <div className="ui list">



            {
                city != null &&

                <div className="item">
                <i className="users icon"></i>
                <div className="content">
                    City : {city}
                </div>
                 </div>

            }
            {
                continent_code != null &&

                <div className="item">
                <i className="users icon"></i>
                <div className="content">
                   Continent Code : {continent_code}
                </div>
                 </div>

            }
             {
                continent_name != null &&

                <div className="item">
                <i className="users icon"></i>
                <div className="content">
                    Continent name : {continent_name}
                </div>
                 </div>

            }           
            {
                country_name != null &&

                <div className="item">
                <i className="users icon"></i>
                <div className="content">
                   Country name : country_name
                </div>
                 </div>

            }
            {
                ip != null &&

                <div className="item">
                <i className="users icon"></i>
                <div className="content">
                    IP : {ip}
                </div>
                 </div>

            }
            {
                latitude != null &&

                <div className="item">
                <i className="users icon"></i>
                <div className="content">
                   latitude: {latitude}
                </div>
                 </div>

            }
            {
                calling_code != null &&

                <div className="item">
                <i className="users icon"></i>
                <div className="content">
                    Calling code : {calling_code}
                </div>
                 </div>

            }

            {
                capital != null &&

                <div className="item">
                <i className="users icon"></i>
                <div className="content">
                    Capital : {capital}
                </div>
                 </div>

            }
            {
                country_flag != null &&

                <div className="item">
                <i className="users icon"></i>
                <div className="content">
                    Flag:
                    <img src={country_flag} alt="flag" className="ui image icon" />
                </div>
                 </div>

            }
            {
                language_code != null &&

                <div className="item">
                <i className="users icon"></i>
                <div className="content">
                    language_code : {language_code}
                </div>
                 </div>

            }
            {
               language_name != null &&

                <div className="item">
                <i className="users icon"></i>
                <div className="content">
                    language_name : {language_name}
                </div>
                 </div>

            }
             {
                language_native != null &&

                <div className="item">
                <i className="users icon"></i>
                <div className="content">
                   language_native : {language_native}
                </div>
                 </div>

            }   

            {
                longitude != null &&

                <div className="item">
                <i className="users icon"></i>
                <div className="content">
                    longitude : {longitude}
                </div>
                 </div>

            }  

            {
                region_code != null &&

                <div className="item">
                <i className="users icon"></i>
                <div className="content">
                    region_code : {region_code}
                </div>
                 </div>

            } 

            {
                region_name != null &&

                <div className="item">
                <i className="users icon"></i>
                <div className="content">
                    region_name : {region_name}
                </div>
                 </div>

            }
            {
                zip != null &&

                <div className="item">
                <i className="users icon"></i>
                <div className="content">
                    zip : {zip}
                </div>
                 </div>

            }

        </div>

    );
}

export default Displayinfo;
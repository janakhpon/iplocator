import React from 'react';
import GoogleMapReact from "google-map-react";
import Marker from '../Marker';
import ErrorMessage from '../ErrorMessage';
import styles from './index.css';

const Displaymap = ({latitude,longitude}) => {
console.log(longitude,latitude);
    return(
        <div className={styles.map}>
        {
          latitude != null || longitude != null
          ?
          <GoogleMapReact
            defaultZoom={11}
            center={[latitude, longitude]}
            >
            <Marker
              lat={latitude}
              lng={longitude}
              icon="fa-map-marker-alt"
            />
            
          </GoogleMapReact>
          :
          <ErrorMessage
            icon="fa-frown"
            text="Sorry, location cannot be found"
          />
        }
    
      </div>
    );
}

export default Displaymap;
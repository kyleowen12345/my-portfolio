import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { Box  } from '@chakra-ui/react'
import {Icon} from 'leaflet'
import 'leaflet/dist/leaflet.css'
import "leaflet/dist/images/marker-shadow.png";
import { useInView } from 'react-intersection-observer';

const Map = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });
  return (

    <Box
        width={["100%","100%","100%","100%","50%"]}
        height={["40%","40%","80%","80%","80%","80%"]}
        id="map"
        borderRadius={10}
        border="2px solid black"
        boxShadow={"0px 7px 5px 0px black"}
        zIndex={99}
        ref={ref}
        className={ inView ? "firstContainerVisible" : "firstContainerHidden"}
  >
        <MapContainer 
            center={[7.1290, 125.6173]} 
            zoom={11} 
            scrollWheelZoom={false} 
            style={{height: "100%", width: "100%",borderRadius:10}}
            
        >
          <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          <Marker 
              position={[7.1290,  125.6173]} 
              icon={new Icon({iconUrl: '../../marker-icon.png', iconSize: [25, 41], iconAnchor: [12, 41]})} 
          >
            <Popup>
              This is my location..
            </Popup>
          </Marker>
        </MapContainer>
    </Box>
  )
}

export default Map
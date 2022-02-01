import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import {Icon} from 'leaflet'
import 'leaflet/dist/leaflet.css'
import "leaflet/dist/images/marker-shadow.png";

const Map = () => {
  return (
    <MapContainer center={[8.238752, 126.282743]} zoom={12} scrollWheelZoom={false} style={{height: "100%", width: "100%",borderRadius:10}}>
      <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      <Marker position={[8.238752,  126.282743]} icon={new Icon({iconUrl: '../../marker-icon.png', iconSize: [25, 41], iconAnchor: [12, 41]})} >
        <Popup>
          This is my current location..
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map
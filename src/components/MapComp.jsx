import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";

// potential fix for marker not rendering
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
    import markerIcon from 'leaflet/dist/images/marker-icon.png';
    import markerShadow from 'leaflet/dist/images/marker-shadow.png';

    // This is crucial to prevent Leaflet from trying to load images from default paths
    delete (L.Icon.Default.prototype)._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: markerIcon2x,
      iconUrl: markerIcon,
      shadowUrl: markerShadow,
    });

// --------------------------------

// change the view to current coordinates
function SetViewOnClick({ coords }) {
  const map = useMap();
  map.setView(coords, map.getZoom());

  return null;
}

function MapComp({ coords }) {
  return (
    <MapContainer

      center={coords}
      zoom={13}
      scrollWheelZoom={true}
      style={{ minHeight: "70vh", minWidth: "100vw" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={coords}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <SetViewOnClick coords={coords}/>
    </MapContainer>
  );
}

export default MapComp;

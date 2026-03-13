import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function Map() {
  const portPosition: [number, number] = [18.600436, 73.822365];

  return (
    <>
      
      <div style={{ padding: "20px" }}>
        <div style={{ marginTop: "10px;" }}>
          <h1 className="map-title">Global Presence Map</h1>
        </div>
        <div className="line"></div>
        <MapContainer
          center={portPosition}
          zoom={12}
          style={{ height: "400px", width: "100%", borderRadius: "8px" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={portPosition}>
            <Popup>
              <strong>Port of Pune</strong> <br />
              Status: Ready for export.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
}

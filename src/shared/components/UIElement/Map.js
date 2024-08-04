import React, { useEffect, useRef, useState } from "react";
import "./Map.css";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import axios from "axios";

const Map = (props) => {
  const mapRef = useRef();
  const [center, setCenter] = useState([0, 0]);
  const [zoom, setZoom] = useState(13); // Default zoom level

  const { address, initialZoom } = props; // Expect address as a prop

  useEffect(() => {
    const fetchCoordinates = async () => {
      const apiKey = "711995cacb1c4c57a3075465ddff9a1c"; // Replace with your OpenCage Data API key
      const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
        address
      )}&key=${apiKey}`;

      try {
        const response = await axios.get(url);
        const data = response.data;

        if (data.results && data.results.length > 0) {
          const { lat, lng } = data.results[0].geometry;
          setCenter([lat, lng]);
          setZoom(initialZoom || 13); // Use provided zoom or default to 13
        } else {
          console.error("No results found for the specified address.");
        }
      } catch (error) {
        console.error("Error fetching coordinates:", error);
      }
    };

    fetchCoordinates();
  }, [address, initialZoom]);

  useEffect(() => {
    if (center[0] !== 0 && center[1] !== 0) {
      const map = L.map(mapRef.current).setView(center, zoom);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
      }).addTo(map);

      L.marker(center).addTo(map);

      return () => {
        map.remove();
      };
    }
  }, [center, zoom]);

  return (
    <div
      ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
    ></div>
  );
};

export default Map;

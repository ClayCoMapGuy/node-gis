import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import "leaflet/dist/leaflet.css"
import "../styles.css"

export default function Map() {
    const [countyCut, setCountyCut] = useState()
    
    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const response = await fetch('/api/countycut').then((response) => response.json());
        setCountyCut(response);
        console.log(countyCut)
    };

    return (
        <MapContainer center={[33.526, -84.354]} zoom={12}>



            {/* <TileLayer 
                attribution='&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            /> */}

            <GeoJSON data={countyCut} />

        </MapContainer>
    )
}
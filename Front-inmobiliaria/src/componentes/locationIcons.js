import React from 'react'
import Icon from '../imagenes/venue_location_icon.svg';
import L from 'leaflet';

// C:\Users\Francisco Thielen\Desktop\Diplomado\web-inmobiliaria\src\imagenes\venue_location_icon-orig.svg
export const locationIcons = L.icon({
    iconUrl: Icon,
    iconRetinaUrl: Icon,
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [35, 35],
    className: "leaflet-venue-icon",
});

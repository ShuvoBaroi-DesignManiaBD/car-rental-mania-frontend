import L from 'leaflet';
import 'leaflet-routing-machine';
import { useEffect, useMemo, useRef } from 'react';
import { useMap } from 'react-leaflet';

type Props = {
  pickupCoords: { lat: number; lng: number };
  dropoffCoords: { lat: number; lng: number };
};

const RoutingControl = ({ pickupCoords, dropoffCoords }: Props) => {
  const map = useMap();
  const routingControlRef = useRef<any>(null); // Use a ref to store the routing control instance

  // Function to add routing to the map
  const addRoutingControl = () => {
    if (!map) return;

    routingControlRef.current = L.Routing.control({
      waypoints: [
        L.latLng(pickupCoords.lat, pickupCoords.lng),
        L.latLng(dropoffCoords.lat, dropoffCoords.lng),
      ],
      routeWhileDragging: true,
      lineOptions: {
        styles: [{ color: 'orange', weight: 5 }],
      },
      createMarker: () => null, // Prevent showing start and end markers
      addWaypoints: false, // Disable adding additional waypoints by dragging
      show: false, // Prevent showing the route panel text
    }).addTo(map);

    // Remove text directions container if it exists
    const routingContainer = document.querySelector('.leaflet-routing-container');
    if (routingContainer) {
      routingContainer.remove();
    }
  };

  useEffect(() => {
    // Remove existing routing control when pickup or dropoff coordinates change
    if (routingControlRef.current) {
      map.removeControl(routingControlRef.current);
    }

    // Add a new routing control with updated coordinates
    addRoutingControl();

    return () => {
      // Cleanup on unmount
      if (routingControlRef.current) {
        map.removeControl(routingControlRef.current);
      }
    };
  }, [pickupCoords, dropoffCoords, map]); // Ensure this effect runs when coordinates change

  return null;
};

export default RoutingControl;

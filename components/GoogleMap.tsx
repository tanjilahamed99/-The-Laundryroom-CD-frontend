"use client";

import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

const GoggleMap = () => {
  // Updated coordinates for Long Beach, CA
  const location = { lat: 33.8369, lng: -118.1988 };

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOGGLE_MAP_KEY || ""}>
      <Map
        style={{ width: "100vw", height: "100vh" }}
        defaultCenter={location}
        defaultZoom={16}
        gestureHandling="greedy"
        disableDefaultUI>
        <Marker
          position={location}
          title="5210 Long Beach Blvd, Long Beach, CA 90805, United States"
        />
      </Map>
    </APIProvider>
  );
};

export default GoggleMap;
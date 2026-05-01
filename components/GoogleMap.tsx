"use client";

import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

const GoggleMap = () => {
  const location = { lat: 35.5656, lng: -97.5285 };

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
          title="815 W Britton Rd, Oklahoma City, OK 73114"
        />
      </Map>
    </APIProvider>
  );
};

export default GoggleMap;

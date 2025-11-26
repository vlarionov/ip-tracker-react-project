import { useState, useEffect } from "react";

export const useMapping = () => {
  const [position, setPosition] = useState({
    lat: 47.21725,
    lng: -1.55336,
  });
  // const position = [51.505, -0.09]
  useEffect(() => {
    // probably call the geolocation API here to get new position coordinates
    // code from guide --------------------
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setPosition({ lat: coords.latitude, lng: coords.longitude });
      },
      (blocked) => {
        // More logic goes here
        const fetchCoords = async () => {
          try {
            const response  = await fetch("https://ipapi.co/json");
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            setPosition({ lat: result.latitude, lng: result.longitude });
          } catch (error) {
            console.error(error);
          }
        };

        fetchCoords();
      }
    );
    //-------------------------------------
  }, []);
  return position;
};

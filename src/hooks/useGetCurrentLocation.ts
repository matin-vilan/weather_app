import { PROJECT_STORAGE_NAME } from "@constants/index";
import { setLocalStorage } from "@utils/storage";
import { useEffect, useState } from "react";

const useGetCurrentLocation = () => {
  const [location, setLocation] = useState<{
    lat: number;
    lon: number;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loadingGetLocation, setLoadingGetLocation] = useState(false);

  const handleGetLocation = () => {
    setLoadingGetLocation(true);
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, lon: longitude });

          setLocalStorage({
            name: `${PROJECT_STORAGE_NAME}/location`,
            value: JSON.stringify({ lat: latitude, lon: longitude }),
          });
          setLoadingGetLocation(false);
        },
        (error) => {
          switch (error.code) {
            case error.PERMISSION_DENIED:
              console.error("User denied the request for Geolocation.");
              setError("User denied the request for Geolocation.");
              break;
            case error.POSITION_UNAVAILABLE:
              console.error("Location information is unavailable.");
              setError("Location information is unavailable.");
              break;
            case error.TIMEOUT:
              console.error("The request to get user location timed out.");
              setError("The request to get user location timed out.");
              break;
          }
          setLoadingGetLocation(false);
        }
      );
    } else {
      console.error("Geolocation is not supported by your browser.");
      setLoadingGetLocation(false);
    }
  };

  useEffect(() => {
    handleGetLocation();
  }, []);

  return { location, error, handleGetLocation, loadingGetLocation };
};

export default useGetCurrentLocation;

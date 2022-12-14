import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

export interface IGeolocationPositionError {
  readonly code: number;
  readonly message: string;
  readonly PERMISSION_DENIED: number;
  readonly POSITION_UNAVAILABLE: number;
  readonly TIMEOUT: number;
}

const GEO_LOCATION_STORAGE_KEY = 'geoLocation';
export default function useGeoLocation(options?: PositionOptions) {
  const [geoLocation, setGeoLocation] = useLocalStorage<any>(GEO_LOCATION_STORAGE_KEY, null);

  let mounted = true;
  let watchId: any;

  const onEvent = (event: any) => {
    if (mounted) {
      setGeoLocation({
        latitude: event.coords.latitude,
        longitude: event.coords.longitude,
      });
    }
  };

  const onEventError = (error: IGeolocationPositionError) => mounted
    && setGeoLocation((oldState: any) => ({ ...oldState, loading: false, error }));

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(onEvent, onEventError, options);
    watchId = navigator.geolocation.watchPosition(onEvent, onEventError, options);

    return () => {
      mounted = false;
      navigator.geolocation.clearWatch(watchId);
    };
  }, []);

  return geoLocation;
}

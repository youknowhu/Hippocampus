export const RECEIVE_GEOLOCATION_ENTRY = 'RECEIVE_GEOLOCATION_ENTRY';
export const RECEIVE_MAP_BOUNDS = 'RECEIVE_MAP_BOUNDS';

export const receiveGeolocationEntry = geolocation => ({
  type: RECEIVE_GEOLOCATION_ENTRY,
  geolocation,
})

export const receiveMapBounds = mapBounds => ({
  type: RECEIVE_MAP_BOUNDS,
  mapBounds,
})

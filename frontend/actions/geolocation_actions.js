export const RECEIVE_GEOLOCATION_ENTRY = 'RECEIVE_GEOLOCATION_ENTRY';

export const receiveGeolocationEntry = geolocation => ({
  type: RECEIVE_GEOLOCATION_ENTRY,
  geolocation,
})

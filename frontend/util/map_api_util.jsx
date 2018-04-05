export const fetchElevation = (latlng) => (
  $.ajax({
    method: 'GET',
    url: `https://maps.googleapis.com/maps/api/elevation/json?locations=${latlng}&key=AIzaSyBy09f56athKNyKG2QqWYjxbu-HF6Ls9EE`,
  })
);

export const fetchWeather = (lat, lng) => (
  $.ajax({
    method: 'GET',
    url: `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&APPID=2e4d5a5f36f162d52216210eaac123a3&units=imperial`,
  })
);

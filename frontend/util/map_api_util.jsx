export const fetchElevation = (latlng) => (
  $.ajax({
    method: 'POST',
    url: `/api/external/elevation`,
    data: { latlng: latlng },
  })
);

export const fetchWeather = (lat, lng) => (
  $.ajax({
    method: 'GET',
    url: `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&APPID=2e4d5a5f36f162d52216210eaac123a3&units=imperial`,
  })
);

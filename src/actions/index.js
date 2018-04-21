const API_KEY = '7bdbb0282466ed1157c8bbe2f3a7086f';

// Use this because if someone messes up the name of the constant,
// it will get caught, whereas if it was a string that got messed
// up, then it would just slip through the reducers unnnoticed.
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather() {
  return {
    type: FETCH_WEATHER
  };
}

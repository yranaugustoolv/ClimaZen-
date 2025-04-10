import axios from 'axios';

const API_KEY = 'cca6f8acaa2259920bb70baa10b0bbb3'; // api clima/
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const getCurrentWeather = async (lat, lon) => {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        lat,
        lon,
        appid: API_KEY,
        units: 'metric',
        lang: 'pt'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching current weather:', error);
    throw error;
  }
};

export const getForecast = async (lat, lon) => {
  try {
    const response = await axios.get(`${BASE_URL}/forecast`, {
      params: {
        lat,
        lon,
        appid: API_KEY,
        units: 'metric',
        lang: 'pt'
      }
    });
    return response.data.list.filter((item, index) => index % 8 === 0);
  } catch (error) {
    console.error('Error fetching forecast:', error);
    throw error;
  }
};
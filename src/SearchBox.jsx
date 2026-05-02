import { useState } from "react";
import PropTypes from "prop-types";
import { TextField, Button, Box, InputAdornment } from "@mui/material";
import { Search, LocationOn } from "@mui/icons-material";
import "./SearchBox.css";

export default function SearchBox({ updateInfo, onLoading, onError }) {
  const [city, setCity] = useState("");

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

  let getWeatherInfo = async () => {
    let response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`,
    );
    if (!response.ok) {
      throw new Error(`City not found: ${city}`);
    }
    let jsonResponse = await response.json();
    let result = {
      city: city,
      temp: jsonResponse.main.temp,
      tempMin: jsonResponse.main.temp_min,
      tempMax: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      feelsLike: jsonResponse.main.feels_like,
      weather: jsonResponse.weather[0].description,
    };
    console.log(result);
    return result;
  };

  let handleChange = (evt) => {
    setCity(evt.target.value);
  };

  let onSubmit = async (evt) => {
    try {
      evt.preventDefault();
      if (!city.trim()) {
        onError("Please enter a city name");
        return;
      }
      console.log(city);
      onLoading(true);
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
      setCity("");
      onLoading(false);
    } catch (err) {
      onError(err.message || "Failed to fetch weather data. Please try again.");
    }
  };

  return (
    <Box component="form" onSubmit={onSubmit} sx={{ mb: 4 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          flexWrap: "wrap",
        }}
      >
        <TextField
          id="city-input"
          label="Enter City Name"
          variant="outlined"
          value={city}
          onChange={handleChange}
          required
          sx={{
            minWidth: 250,
            "& .MuiOutlinedInput-root": {
              borderRadius: 3,
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocationOn color="action" />
              </InputAdornment>
            ),
          }}
          inputProps={{
            "aria-label": "City name for weather search",
          }}
        />
        <Button
          variant="contained"
          type="submit"
          startIcon={<Search />}
          sx={{
            px: 4,
            py: 1.5,
            borderRadius: 3,
            fontSize: "1rem",
            fontWeight: 600,
            boxShadow: "0 4px 12px rgba(33, 150, 243, 0.3)",
            "&:hover": {
              boxShadow: "0 6px 20px rgba(33, 150, 243, 0.4)",
            },
          }}
        >
          Search
        </Button>
      </Box>
    </Box>
  );
}

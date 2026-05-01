import { useState } from "react";
import { Box, Typography, Alert, Fade } from "@mui/material";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import WeatherSkeleton from "./WeatherSkeleton";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelsLike: 36.05,
    humidity: 94,
    temp: 29.05,
    tempMax: 29.05,
    tempMin: 29.05,
    weather: "overcast clouds",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
    setError(null);
  };

  let handleLoading = (isLoading) => {
    setLoading(isLoading);
  };

  let handleError = (errorMessage) => {
    setError(errorMessage);
    setLoading(false);
  };

  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{
          mb: 4,
          background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontWeight: 700,
        }}
      >
        Weather Forecast
      </Typography>

      <SearchBox
        updateInfo={updateInfo}
        onLoading={handleLoading}
        onError={handleError}
      />

      {loading && (
        <Fade in={true} timeout={500}>
          <Box sx={{ mt: 3 }}>
            <WeatherSkeleton />
          </Box>
        </Fade>
      )}

      {error && (
        <Fade in={true} timeout={500}>
          <Alert severity="error" sx={{ mt: 3, maxWidth: 400, mx: "auto" }}>
            {error}
          </Alert>
        </Fade>
      )}

      {!loading && !error && (
        <Fade in={true} timeout={800}>
          <Box>
            <InfoBox info={weatherInfo} />
          </Box>
        </Fade>
      )}
    </Box>
  );
}

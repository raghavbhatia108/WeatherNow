import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
  Grid,
  Divider,
  Fade,
} from "@mui/material";
import {
  Thunderstorm,
  AcUnit,
  WbSunny,
  Thermostat,
  WaterDrop,
  DeviceThermostat,
} from "@mui/icons-material";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const HOT_URL = "/src/assets/5741223.jpg";
  const COLD_URL = "/src/assets/pexels-reneterp-25763.jpg";
  const RAIN_URL = "/src/assets/weather-effects-composition.jpg";

  const getWeatherIcon = () => {
    if (info.humidity > 80)
      return <Thunderstorm sx={{ fontSize: 40, color: "#1976d2" }} />;
    if (info.temp > 15)
      return <WbSunny sx={{ fontSize: 40, color: "#ff9800" }} />;
    return <AcUnit sx={{ fontSize: 40, color: "#03a9f4" }} />;
  };

  const getWeatherImage = () => {
    if (info.humidity > 80) return RAIN_URL;
    if (info.temp > 15) return HOT_URL;
    return COLD_URL;
  };

  const getTemperatureColor = (temp) => {
    if (temp > 25) return "#f44336";
    if (temp > 15) return "#ff9800";
    return "#03a9f4";
  };

  useEffect(() => {
    setImageLoaded(false);
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.src = getWeatherImage();
  }, [info]);

  return (
    <Fade in={imageLoaded} timeout={1000}>
      <Card
        sx={{
          maxWidth: 500,
          mx: "auto",
          borderRadius: 4,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <CardMedia
          component="img"
          height="200"
          image={getWeatherImage()}
          alt={`${info.weather} weather`}
          sx={{
            filter: "brightness(0.8)",
            objectFit: "cover",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
            background: "rgba(255, 255, 255, 0.9)",
            borderRadius: 2,
            p: 1,
            backdropFilter: "blur(10px)",
          }}
        >
          {getWeatherIcon()}
        </Box>

        <CardContent sx={{ p: 3 }}>
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            sx={{
              fontWeight: 600,
              textAlign: "center",
              mb: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
            }}
          >
            {info.city}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {getWeatherIcon()}
            </Box>
          </Typography>

          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              fontWeight: 700,
              color: getTemperatureColor(info.temp),
              mb: 1,
            }}
          >
            {Math.round(info.temp)}°C
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{
              textAlign: "center",
              textTransform: "capitalize",
              mb: 3,
              color: "text.secondary",
              fontStyle: "italic",
            }}
          >
            {info.weather}
          </Typography>

          <Divider sx={{ my: 2 }} />

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Box sx={{ textAlign: "center" }}>
                <Thermostat sx={{ color: "#ff9800", mb: 1 }} />
                <Typography variant="body2" color="text.secondary">
                  Feels Like
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {Math.round(info.feelsLike)}°C
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={6}>
              <Box sx={{ textAlign: "center" }}>
                <WaterDrop sx={{ color: "#2196f3", mb: 1 }} />
                <Typography variant="body2" color="text.secondary">
                  Humidity
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {info.humidity}%
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={6}>
              <Box sx={{ textAlign: "center" }}>
                <DeviceThermostat sx={{ color: "#4caf50", mb: 1 }} />
                <Typography variant="body2" color="text.secondary">
                  Min Temp
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {Math.round(info.tempMin)}°C
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={6}>
              <Box sx={{ textAlign: "center" }}>
                <DeviceThermostat sx={{ color: "#f44336", mb: 1 }} />
                <Typography variant="body2" color="text.secondary">
                  Max Temp
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {Math.round(info.tempMax)}°C
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Box sx={{ mt: 3, textAlign: "center" }}>
            <Chip
              label={`Feels like ${Math.round(info.feelsLike)}°C`}
              variant="outlined"
              sx={{
                fontSize: "0.9rem",
                fontWeight: 500,
                borderColor: getTemperatureColor(info.feelsLike),
                color: getTemperatureColor(info.feelsLike),
              }}
            />
          </Box>
        </CardContent>
      </Card>
    </Fade>
  );
}

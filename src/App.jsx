import {
  Container,
  Box,
  AppBar,
  Toolbar,
  Typography,
  Paper,
  Fade,
  Divider,
} from "@mui/material";
import { WbSunny } from "@mui/icons-material";
import WeatherApp from "./WeatherApp";

function App() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      }}
    >
      <AppBar
        position="static"
        elevation={0}
        sx={{
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
        }}
      >
        <Toolbar>
          <WbSunny sx={{ mr: 2 }} />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: 600 }}
          >
            WeatherNow
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            Powered by OpenWeatherMap
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ py: 4, flexGrow: 1 }}>
        <Fade in={true} timeout={1000}>
          <Paper
            elevation={3}
            sx={{
              p: 4,
              borderRadius: 3,
              background: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(10px)",
              minHeight: "70vh",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box sx={{ flexGrow: 1 }}>
              <WeatherApp />
            </Box>

            <Divider sx={{ my: 3 }} />

            <Box sx={{ textAlign: "center", py: 2 }}>
              <Typography variant="body2" color="text.secondary">
                Built with ❤️ using React & Material-UI
              </Typography>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ mt: 1, display: "block" }}
              >
                Weather data provided by OpenWeatherMap API
              </Typography>
            </Box>
          </Paper>
        </Fade>
      </Container>
    </Box>
  );
}

export default App;

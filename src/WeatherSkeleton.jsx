import { Skeleton, Card, CardContent, Box, Grid } from "@mui/material";

export default function WeatherSkeleton() {
  return (
    <Card sx={{ maxWidth: 500, mx: "auto", borderRadius: 4 }}>
      <Skeleton
        variant="rectangular"
        height={200}
        sx={{ borderRadius: "4px 4px 0 0" }}
      />

      <CardContent sx={{ p: 3 }}>
        <Skeleton variant="text" sx={{ fontSize: "2.5rem", mb: 1 }} />
        <Skeleton variant="text" sx={{ fontSize: "1.25rem", mb: 3 }} />

        <Box sx={{ borderBottom: 1, borderColor: "divider", my: 2 }} />

        <Grid container spacing={2}>
          {[1, 2, 3, 4].map((item) => (
            <Grid item xs={6} key={item}>
              <Box sx={{ textAlign: "center" }}>
                <Skeleton
                  variant="circular"
                  width={24}
                  height={24}
                  sx={{ mb: 1, mx: "auto" }}
                />
                <Skeleton variant="text" sx={{ fontSize: "0.875rem", mb: 1 }} />
                <Skeleton variant="text" sx={{ fontSize: "1.25rem" }} />
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 3, textAlign: "center" }}>
          <Skeleton
            variant="rectangular"
            width={150}
            height={32}
            sx={{ mx: "auto", borderRadius: 2 }}
          />
        </Box>
      </CardContent>
    </Card>
  );
}

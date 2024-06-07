import { Grid, Link, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";


export default function Card({name,email,phone,website,username}) {
  return (
    <Grid item md={4} sm={6}>
      <Paper elevation={3} className="paper">
        <Box
          sx={{
            paddingX: 1,
          }}
        >
          <Typography variant="subtitle1" component="h2">
            Name - {name}
          </Typography>
          <Typography>
            UserName - {username}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
            marginTop={3}
          >
            <Typography variant="body2" component="p" marginLeft={0.5}>
              {email}
            </Typography>
            <Typography variant="body3" component="p" marginLeft={1.5}>
              {phone}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Typography variant="h6" component="h2" marginTop={0}>
              <Link underline="none" href={website}>{website}</Link>
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
}

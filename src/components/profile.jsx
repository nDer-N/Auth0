import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Box,
} from "@mui/material";

export default function Profile() {
  const { user } = useAuth0();

  //Saca los atributos con una destructuración, sacando user, que tiene picture, name, email, etc...

  return (
    <Card
      sx={{
        maxWidth: 400,
        margin: "auto",
        borderRadius: 4,
        boxShadow: 3,
        p: 2,
      }}
    >
      <CardContent>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Avatar
            src={user.picture}
            alt={user.name}
            sx={{ width: 80, height: 80, mb: 2 }}
          />
          <Typography variant="h6">{user.name}</Typography>
          <Typography variant="body2" color="text.secondary">
            {user.email}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

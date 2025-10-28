import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";

export default function Navbar() {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Auth0 Example Login
        </Typography>
        <Box>
          {!isAuthenticated ? (    //Revisa si la sesión ha sido iniciada, y muestra iniciar o cerrar sesión respectivamente
            <Button
              color="inherit"
              onClick={() => loginWithRedirect()}
            >
              Login
            </Button>
          ) : (
            <Button
              color="inherit"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Logout
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

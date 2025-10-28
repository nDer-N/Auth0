import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Container, Box, Typography, CircularProgress, Button } from "@mui/material";
import Profile from "./profile";

export default function MainContent() {
 //Saca los atributos mediante el Auth0, así sabe si mostrar profile, o no, dependiendo si se pudo iniciar sesión
  const { isAuthenticated, isLoading, user} = useAuth0();

  if (isLoading)
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
        <CircularProgress />
      </Box>
    );  //Es solo el efecto de si esta cargando el perfil

  return (
    <Container>
      <Box textAlign="center" mt={8}>
        {!isAuthenticated ? (  //Revisa si hay un usuario o no.
          <>
            <Typography variant="h5" mb={3}>
              Welcome
            </Typography>
           
          </>
        ) : (
          <>
            <Profile user={user} />
           
          </>
        )}
      </Box>
    </Container>
  );
}

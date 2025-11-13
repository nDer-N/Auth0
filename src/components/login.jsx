import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Container, Box, Typography, CircularProgress } from "@mui/material";
import Profile from "./profile";

export default function MainContent() {
  const { isAuthenticated, isLoading, user } = useAuth0();
  const [prueba, setPrueba] = useState([]); // ✅ corchetes

  useEffect(() => {
    fetch('http://18.216.211.225:8000/api/products')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error en el servidor');
        }
        return response.json();
      })
      .then((data) => {
        setPrueba(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []); // ✅ agrega dependencia vacía para que no se llame en bucle

  if (isLoading)
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
        <CircularProgress />
      </Box>
    );

  return (
    <Container>
      <Box textAlign="center" mt={8}>
        {!isAuthenticated ? (
          <>
            <Typography variant="h5" mb={3}>
              {JSON.stringify(prueba, null, 2)} {/* 👈 muestra los datos del fetch */}
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



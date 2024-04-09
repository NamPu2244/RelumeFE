import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import Pricingpage from "./page/Pricingpage";
import Footer from "./homepage/componentFooter/Footer";
import { Box, Container } from "@mui/material";
import Navbar from "./homepage/componentNav/Navbar";

function Controller() {
  return (
    <div>
      <Container maxWidth="xl" sx={{ px: 0 }}>
        <header>
          <Navbar />
        </header>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/pricing" element={<Pricingpage />} />
        </Routes>

        <footer>
          <Box sx={{ my: 14 }}>
            <Footer />
          </Box>
        </footer>
      </Container>
    </div>
  );
}

export default Controller;

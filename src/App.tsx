import { Box, Container } from "@mui/material";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import React from "react";
import Navbar from "./homepage/componentNav/Navbar";
import { Route, Routes } from "react-router-dom";

import HomePage from "./page/HomePage";
import Pricingpage from "./page/Pricingpage";
import NavBar from "./component/organisms/navBar/NavBar";
import Footer from "./component/organisms/footer/Footer";
import BlogPage from "./page/BlogPage";
import { Provider } from "react-redux";
import store from "./store/Store";

function App() {
  return (
    <div>
      <Container maxWidth="xl" sx={{ px: 0 }}>
        <header>
          <NavBar />
        </header>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pricing" element={<Pricingpage />} />
            <Route path="/blog" element={<BlogPage />} />
          </Routes>
        </Provider>

        <footer>
          <Box sx={{ my: 14 }}>
            <Footer />
          </Box>
        </footer>
      </Container>
    </div>
  );
}

export default App;

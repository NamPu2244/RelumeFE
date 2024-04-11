import React from "react";
import {
  Box,
  Grid,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";

function HighlightBody() {
  return (
    <div>
      <Typography variant="body2">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla.
        </div>
      </Typography>
    </div>
  );
}

export default HighlightBody;

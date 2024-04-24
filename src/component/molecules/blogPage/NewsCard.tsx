import { Box, Typography } from "@mui/material";
import React from "react";

function NewsCard({ news }) {
  return (
    <div>
      <Box sx={{ mb: 5, display: "" }}>
        <Box>
          <Typography>{news.author}</Typography>
          <img src={news.urlToImage} width={150} />
          <Typography>{news.title}</Typography>
          <Typography variant="body2">{news.description}</Typography>
        </Box>
      </Box>
    </div>
  );
}

export default NewsCard;

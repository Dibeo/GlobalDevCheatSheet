import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Tabs,
  Tab,
  Box,
  Divider,
} from "@mui/material";
import { CodeBlock, nord } from "react-code-blocks";

const Home: React.FC = () => {

  return (
    <Box sx={{ padding: 2, display: "flex", flexDirection: "column" }}>
      <Card
        key="HomePage"
        variant="outlined"
        sx={{ width: "100%", maxWidth: 800, marginBottom: 2 }}
      >
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Home
          </Typography>
          <Typography variant="body1">
            This is home page.
          </Typography>
          <Divider />
          
        </CardContent>
      </Card>
    </Box>
  );
};

export default Home;

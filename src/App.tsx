import { Box, Tabs, Tab } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

import './App.css';
import { PostsInfoPage } from './pages/PostsInfoPage';
import { CreatePostPage } from './pages/CreatePostPage';

function App() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [tabValue, setTabValue] = useState('/');

  useEffect(() => {
    setTabValue(pathname);
  }, [pathname]);

  const changeTabValue = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
    navigate(newValue);
  };

  return (
    <div className="app">
      <Box>
        <Tabs
          value={tabValue}
          onChange={changeTabValue}
        >
          <Tab
            value="/"
            label="Post Info"
          />
          <Tab
            value="/create-post"
            label="Create post"
          />
        </Tabs>
      </Box>
      <Routes>
        <Route path="/" element={<PostsInfoPage />} />
        <Route path="/create-post" element={<CreatePostPage />} />
      </Routes>
    </div>
  );
}

export default App;

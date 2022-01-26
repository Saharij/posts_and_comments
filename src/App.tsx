import { Box, Tabs, Tab } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate, useNavigate, useLocation } from "react-router-dom";

import './App.css';
import { PostsInfoPage } from './pages/PostsInfoPage';
import { CreatePostPage } from './pages/CreatePostPage';

type TabItem = {
  path: string;
  name: string;
}

const tabs: TabItem[] = [
  { path: '/', name: 'Post Info' },
  { path: '/create-post', name: 'Create post' },
];

function App() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [tabValue, setTabValue] = useState('/');

  useEffect(() => {
    if (tabs.some(({ path }) => path === pathname)) {
      setTabValue(pathname);
    }
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
          {tabs.map(({ path, name }) => (
            <Tab
              key={path}
              value={path}
              label={name}
            />
          ))}
        </Tabs>
      </Box>
      <Routes>
        <Route path="/" element={<PostsInfoPage />} />
        <Route path="/create-post" element={<CreatePostPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;

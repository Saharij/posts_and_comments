import { Routes, Route, Link } from "react-router-dom";
import { Button, Container } from "@mui/material";

import './App.css';
import { PostsInfo } from './pages/PostsInfo';
import { CreatePost } from './pages/CreatePost';

function App() {
  return (
    <div className="app">
      <Container maxWidth="sm" sx={{ display: "flex", justifyContent: "space-between", paddingTop: 2 }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button variant="outlined">
            Post info
          </Button>
        </Link>
        <Link to="/createPost" style={{ textDecoration: 'none' }}>
          <Button variant="outlined">
            Create Post
          </Button>
        </Link>
      </Container>
      <Routes>
        <Route path="/" element={<PostsInfo />} />
        <Route path="/createPost" element={<CreatePost />} />
      </Routes>

    </div>
  );
}

export default App;

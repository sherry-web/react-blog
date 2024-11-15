import React, { useState, useEffect, useMemo } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Navbar from './components/NavBar';
import BlogList from './components/BlogList';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import Pagination from './components/Pagination';
import FeaturedPost from './components/FeaturedPost'; // Ensure correct import
import HeroBanner from './components/HeroBanner';
import CategoryFilter from './components/CategoryFilter';
import BackToTopButton from './components/BackToTopButton';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [categories] = useState(['All', 'Technology', 'Lifestyle', 'Travel']);
  const [filteredCategory, setFilteredCategory] = useState('All');

  useEffect(() => {
    // Sample posts or fetch from an API
    const samplePosts = [
      { id: 1, title: 'Blog Post 1', content: 'Content for the first blog post', category: 'Technology' },
      { id: 2, title: 'Blog Post 2', content: 'Content for the second blog post', category: 'Lifestyle' },
      { id: 3, title: 'Blog Post 3', content: 'Content for the third blog post', category: 'Travel' },
    ];
    setPosts(samplePosts);
  }, []);

  const handleCategorySelect = (category) => setFilteredCategory(category);

  const filteredPosts = useMemo(() => {
    if (filteredCategory === 'All') return posts;
    return posts.filter((post) => post.category === filteredCategory);
  }, [posts, filteredCategory]);

  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <HeroBanner />

        <main>
          <CategoryFilter categories={categories} onFilterSelect={handleCategorySelect} />
          <FeaturedPost post={posts[0]} /> {/* Show one featured post, for example */}

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <SearchBar />
                  <BlogList posts={filteredPosts} />
                  <Sidebar items={posts.map((post) => post.title)} />
                  <Pagination />
                </>
              }
            />
            {/* Pass a specific post to FeaturedPost */}
            <Route
              path="/post/:id"
              element={<FeaturedPost post={posts.find(post => post.id === parseInt(window.location.pathname.split("/").pop()))} />}
            />
          </Routes>
        </main>

        <BackToTopButton />
        <Footer />
      </div>
    </Router>
  );
};

export default App;

import React, { useState, useEffect, useMemo } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar';
import BlogList from './components/BlogList';
import Sidebar from './components/Sidebar';
import SearchBar from './components/SearchBar';
import Pagination from './components/Pagination';
import HeroBanner from './components/HeroBanner';
import CategoryFilter from './components/CategoryFilter';
import BackToTopButton from './components/BackToTopButton';
import FeaturedPost from './components/FeaturedPost';
import AppLayout from './components/AppLayout';
import './components/styles/modernStyles.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [categories] = useState(['All', 'Technology', 'Lifestyle', 'Travel']);
  const [filteredCategory, setFilteredCategory] = useState('All');

  useEffect(() => {
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
    <AppLayout>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* Unified Hero Section */}
                <HeroBanner
                  title="Welcome to Our Blog"
                  subtitle="Explore the latest articles, tutorials, and tips from our team."
                  styleType="primary"
                />
                <main>
                  <CategoryFilter categories={categories} onFilterSelect={handleCategorySelect} />
                  <FeaturedPost post={posts[0]} />
                  <SearchBar />
                  <div className="frame">
                    <BlogList posts={filteredPosts} />
                  </div>
                  <Sidebar items={posts.map((post) => post.title)} />
                  <Pagination />
                </main>
              </>
            }
          />

          {/* Route: Individual Blog Post */}
          <Route
            path="/post/:id"
            element={
              <div className="featured-post-container">
                <FeaturedPost post={posts.find((post) => post.id === parseInt(window.location.pathname.split('/').pop()))} />
              </div>
            }
          />
        </Routes>
        <BackToTopButton />
      </Router>
    </AppLayout>
  );
};

export default App;

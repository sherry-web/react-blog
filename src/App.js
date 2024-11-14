import React, { useState, useEffect, useMemo } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

// Import main components
import Header from './components/Header';
import Navbar from './components/NavBar';
import BlogList from './components/BlogList';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import Pagination from './components/Pagination';
import FeaturedPost from './components/FeaturedPost';
import Notification from './components/Notification';
import CommentSection from './components/CommentSection';

// Corrected paths for assets
const logo = require('./components/assets/images/logo.svg');
const avatarIcon = require('./components/assets/images/icons/avatar.svg');

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [showNotification, setShowNotification] = useState(false);
  const [posts, setPosts] = useState([]);
  const postsPerPage = 5;

  // Fetch blog posts (simulated data)
  const fetchPosts = () => {
    const samplePosts = [
      { id: 1, title: 'Blog Post 1', content: 'Content for the first blog post' },
      { id: 2, title: 'Blog Post 2', content: 'Content for the second blog post' },
      { id: 3, title: 'Blog Post 3', content: 'Content for the third blog post' },
      { id: 4, title: 'Blog Post 4', content: 'Content for the fourth blog post' },
    ];
    setPosts(samplePosts);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    if (posts.length > 0) {
      setShowNotification(true);
      const timer = setTimeout(() => setShowNotification(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [posts]);

  // Memoize filteredPosts
  const filteredPostsMemo = useMemo(() => {
    return posts.filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, posts]);

  const currentPosts = useMemo(() => {
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    return filteredPostsMemo.length > 0
      ? filteredPostsMemo.slice(indexOfFirstPost, indexOfLastPost)
      : posts.slice(indexOfFirstPost, indexOfLastPost);
  }, [currentPage, postsPerPage, filteredPostsMemo]);

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <Router>
      <div className="App">
        {/* Header and Navigation */}
        <Header logo={logo} />
        <Navbar avatar={avatarIcon} />

        {/* Notification Section */}
        {showNotification && <Notification message="New post available!" />}

        {/* Main Content Area */}
        <Routes>
          {/* Featured Post Section */}
          <Route path="/post/:id" element={<FeaturedPost />} />

          {/* Default Blog Section */}
          <Route
            path="/"
            element={
              <>
                <SearchBar onSearch={handleSearch} searchTerm={searchTerm} />
                <div className="content">
                  <BlogList posts={currentPosts} />
                  <Sidebar items={posts.map((post) => post.title)} />
                </div>
                <Pagination
                  postsPerPage={postsPerPage}
                  totalPosts={filteredPostsMemo.length > 0 ? filteredPostsMemo.length : posts.length}
                  currentPage={currentPage}
                  onPageChange={handlePageChange}
                />
              </>
            }
          />
        </Routes>

        {/* Comment Section */}
        <CommentSection />

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;

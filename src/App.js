import React, { useState, useEffect, } from 'react';
import './App.css';

// Main component imports
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

function App() {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [showNotification, setShowNotification] = useState(false);
    const [filteredPosts, setFilteredPosts] = useState([]);
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

    // Run fetchPosts once when the component mounts
    useEffect(() => {
        fetchPosts();
    }, []);

    // Effect to show a notification when there are new posts
    useEffect(() => {
        if (posts.length > 0) {
            setShowNotification(true);
            // Hide notification after 5 seconds
            const timer = setTimeout(() => setShowNotification(false), 5000);
            // Cleanup the timeout to avoid memory leaks
            return () => clearTimeout(timer);
        }
    }, [posts]);

    // Featured post (first post in the array)
    const featuredPost = posts[0];

    // Filter posts based on the search term
    const handleSearch = (term) => {
        setSearchTerm(term);
        const filtered = posts.filter(post =>
            post.title.toLowerCase().includes(term.toLowerCase()) ||
            post.content.toLowerCase().includes(term.toLowerCase())
        );
        setFilteredPosts(filtered);
        setCurrentPage(1); // Reset to first page on new search
    };

    // Handle page change
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // Determine posts to display based on current page and posts per page
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredPosts.length > 0 ? filteredPosts.slice(indexOfFirstPost, indexOfLastPost) : posts.slice(indexOfFirstPost, indexOfLastPost);

    return (
        <div className="App">
            {/* Header and Navigation */}
            <Header />
            <Navbar />

            {/* Notification Section */}
            {showNotification && <Notification message="New post available!" />}

            {/* Featured Post Section */}
            {featuredPost && <FeaturedPost post={featuredPost} />}

            {/* Search Bar */}
            <SearchBar onSearch={handleSearch} searchTerm={searchTerm} />

            {/* Blog and Sidebar Section */}
            <div className="content">
                <BlogList posts={currentPosts} searchTerm={searchTerm} />
                <Sidebar items={posts.map(post => post.title)} />  {/* Pass posts to Sidebar as items */}
            </div>

            {/* Pagination */}
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={filteredPosts.length > 0 ? filteredPosts.length : posts.length}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />

            {/* Comment Section */}
            <CommentSection />

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default App;

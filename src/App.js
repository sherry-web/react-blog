import React from 'react';
import './App.css';
import Header from './components/Header';
import BlogPost from './components/BlogPost';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="blog-container">
        <BlogPost title="My First Blog Post" content="This is the content of the blog post." />
        <BlogPost title="Another Post" content="Here’s more interesting content!" />
      </div>
      <Footer />
    </div>
  );
}

export default App;

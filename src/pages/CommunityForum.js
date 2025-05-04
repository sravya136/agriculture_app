import React, { useState } from 'react';
import './CommunityForum.css';

const CommunityForum = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      content: 'How to improve soil fertility?',
      author: 'Farmer A',
      media: null,
      solutions: [],
    },
    {
      id: 2,
      content: 'Best practices for organic farming.',
      author: 'Farmer B',
      media: null,
      solutions: [],
    },
  ]);
  const [newPost, setNewPost] = useState('');
  const [newMedia, setNewMedia] = useState(null);
  const [newAuthor, setNewAuthor] = useState('');

  const handlePostSubmit = () => {
    if (newPost && newAuthor) {
      const newPostData = {
        id: posts.length + 1,
        content: newPost,
        author: newAuthor,
        media: newMedia,
        solutions: [],
      };
      setPosts([...posts, newPostData]);
      setNewPost('');
      setNewMedia(null);
      setNewAuthor('');
    } else {
      alert('Please enter your name and the post content.');
    }
  };

  const handleSolutionSubmit = (postId, solutionContent) => {
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          solutions: [
            ...post.solutions,
            {
              id: post.solutions.length + 1,
              content: solutionContent,
              author: 'Farmer X', // This would come from the logged-in user
              likes: 0,
            },
          ],
        };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  const handleLike = (postId, solutionId) => {
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        const updatedSolutions = post.solutions.map(solution => {
          if (solution.id === solutionId) {
            return { ...solution, likes: solution.likes + 1 };
          }
          return solution;
        });
        return { ...post, solutions: updatedSolutions };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  const handleMediaChange = (event) => {
    setNewMedia(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <div className="community-forum">
      <h2>Community Forum</h2>
      <p>Online platform for farmers to share knowledge, ask questions, and connect with each other.</p>
      
      <div className="posts-section">
        {posts.map(post => (
          <div key={post.id} className="post">
            <h3>{post.author}</h3>
            <p>{post.content}</p>
            {post.media && <img src={post.media} alt="Post media" className="post-media" />}
            <div className="solutions-section">
              <h4>Solutions:</h4>
              {post.solutions.map(solution => (
                <div key={solution.id} className="solution">
                  <p><strong>{solution.author}:</strong> {solution.content}</p>
                  <button onClick={() => handleLike(post.id, solution.id)}>
                    Like ({solution.likes})
                  </button>
                </div>
              ))}
              <input
                type="text"
                placeholder="Provide a solution"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSolutionSubmit(post.id, e.target.value);
                    e.target.value = '';
                  }
                }}
              />
            </div>
          </div>
        ))}
      </div>
      
      <div className="new-post">
        <input
          type="text"
          value={newAuthor}
          onChange={(e) => setNewAuthor(e.target.value)}
          placeholder="Your Name"
        />
        <input
          type="text"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="Create a new post"
        />
        <input type="file" onChange={handleMediaChange} />
        <button onClick={handlePostSubmit}>Post</button>
      </div>
    </div>
  );
};

export default CommunityForum;

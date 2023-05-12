import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, {useState} from 'react';
import Comment from './Components/Comment.js';
import CommentForm from './Components/CommentForm.js'


function App() {
  
  const [comments, setComments] = useState([]);

  const submitNewComment = (name, text) => {
    const newComment = {
      name: name,
      text: text,
      replies: [],
      score: 0,
    };
    setComments([...comments, newComment]);
  };

  return (
    <div className='App'>
      <div className='new-post'>
        <h1><b>New Post</b></h1>
        <CommentForm onSubmit={submitNewComment}/>
      </div>
      <div className='comments'>
        {comments.map((comment) => (
          <Comment comment={comment}/>
        ))}
      </div>
    </div>
  );
};

export default App;


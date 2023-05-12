import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, {useState} from 'react';
import Comment from './Components/Comment.js';
import CommentForm from './Components/CommentForm.js'


function App() {
  // const [nameInput, setNameInput] = useState('');
  // const [comments, setComments] = useState([]);
  // const [commentText, setCommentText] = useState('');

  // const canSubmitText = nameInput.trim() === '' || commentText.trim() === '';

  // const handleCommentChange = (e) => {
  //   setCommentText(e.target.value);
  // };

  // const handleNameChange = (e) => {
  //   setNameInput(e.target.value);
  // };

  // const handleCommentSubmit = (e, parentCommentIndex, name) => {
  //   e.preventDefault();
  //   const newComment = {
  //     name: name,
  //     text: commentText,
  //     replies: [],
  //     score: 0,
  //   };

  //   if (parentCommentIndex !== undefined) {
  //     const updatedComments = [...comments];
  //     updatedComments[parentCommentIndex].replies.push(newComment);
  //     setComments(updatedComments);
  //   } else {
  //     setComments([...comments, newComment]);
  //   }

  //   setCommentText('');
  //   setNameInput('');
  // };

  const [comments, setComments] = useState([]);

  const handleCommentSubmit = (name, text) => {
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
      <h1>New Post</h1>
      <CommentForm onSubmit={handleCommentSubmit}/>
      {/* <form className='comment-form' onSubmit={(e) => handleCommentSubmit(e, undefined, nameInput)}>
        <input type='text' name='nameInput' placeholder='Name...' 
         value={nameInput} onChange={handleNameChange}/>

        <input type='text' name='commentText' placeholder='Write a new post...'
         value={commentText} onChange={handleCommentChange}/>

        <button type='submit' className='submit-button' disabled={canSubmitText}>Submit</button>
      </form> */}
      <div className='comments'>
        {comments.map((comment, index) => (
          // <div className='comment' key={index}>
          //   <Comment comment={comment}/>
          // </div>
          <Comment comment={comment}/>
        ))}
      </div>
    </div>
  );
};

export default App;


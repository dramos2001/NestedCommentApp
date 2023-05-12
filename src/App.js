import './App.css';
import React, {useState} from 'react';

const Comment = ({ comment }) => {
  const [replyName, setReplyName] = useState('');
  const [replyText, setReplyText] = useState('');
  const [replies, setReplies] = useState([]);

  const handleReplyChange = (e) => {
    setReplyText(e.target.value);
  };

  const handleReplyNameChange = (e) => {
    setReplyName(e.target.value);
  };

  const handleReplySubmit = (e, name) => {
    e.preventDefault();
    const newReply = {
      name: name,
      text: replyText,
      replies: []
    };
    setReplies([...replies, newReply]);
    setReplyText('');
    setReplyName('');
  };

  return (
    <div className='comment'>
      <p>{comment.name}</p>
      <p>{comment.text}</p>
      <form onSubmit={(e) => handleReplySubmit(e, replyName)} className='reply-form'>
        <input type='text' name='replyNameInput' placeholder='Name...' 
         value={replyName} onChange={handleReplyNameChange}/>
        <input type='text' placeholder='Reply...' 
         value={replyText} onChange={handleReplyChange}/>
        <button type='submit' className='button'>Submit</button>
      </form>
      <div className='replies'>
        {replies.map((reply, index) => (
          <div className='comment' key={index}>
            <Comment comment={reply}/>
          </div>
        ))}
      </div>
    </div>
  );
};

function App() {
  const [nameInput, setNameInput] = useState('');
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');

  const handleCommentChange = (e) => {
    setCommentText(e.target.value);
  };

  const handleNameChange = (e) => {
    setNameInput(e.target.value);
  };

  const handleCommentSubmit = (e, parentCommentIndex, name) => {
    e.preventDefault();
    const newComment = {
      name: name,
      text: commentText,
      replies: []
    };

    if (parentCommentIndex !== undefined) {
      const updatedComments = [...comments];
      updatedComments[parentCommentIndex].replies.push(newComment);
      setComments(updatedComments);
    } else {
      setComments([...comments, newComment]);
    }

    setCommentText('');
    setNameInput('');
  };

  return (
    <div className='App'>
      <h1>New Post</h1>
      <form onSubmit={(e) => handleCommentSubmit(e, undefined, nameInput)} className='comment-form'>
        <input type='text' name='nameInput' placeholder='Name...' 
         value={nameInput} onChange={handleNameChange}/>
        <input type='text' name='commentText' placeholder='Write a new post...'
         value={commentText} onChange={handleCommentChange}/>
        <button type='submit' className='button'>Submit</button>
      </form>
      <div className='comments'>
        {comments.map((comment, index) => (
          <div className='comment' key={index}>
            <Comment comment={comment}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

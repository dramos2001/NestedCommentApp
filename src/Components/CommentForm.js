import '../App.css';
import React, {useState} from 'react';

const CommentForm = ({ onSubmit }) => {
  const [nameInput, setNameInput] = useState('');
  const [commentText, setCommentText] = useState('');

  const handleCommentChange = (e) => {
    setCommentText(e.target.value);
  };

  const handleNameChange = (e) => {
    setNameInput(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(nameInput, commentText);
    setCommentText('');
    setNameInput('');
  };

  const canSubmitText = nameInput.trim() === '' || commentText.trim() === '';

  return (
    <form className="comment-form" onSubmit={handleFormSubmit}>
      <input type="text" name="nameInput" placeholder="Name..."
        value={nameInput} onChange={handleNameChange}
      />
      <input type="text" name="commentText" placeholder="Write a new comment..."
        value={commentText} onChange={handleCommentChange}
      />
      <button type="submit" class="btn btn-primary rounded" id="submit-button" disabled={canSubmitText}>Submit</button>
    </form>
  );
};
export default CommentForm
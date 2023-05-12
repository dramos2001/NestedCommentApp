import '../App.css';
import React, {useState} from 'react';
import CommentForm from './CommentForm';
import VoteComment from './VoteComment';

const Comment = ({ comment }) => {
    const [replies, setReplies] = useState([]);
    const [isReplying, setIsReplying] = useState(false);
    const [formStatus, setFormStatus] = useState(false);
  
    const handleReplySubmit = (name, text) => {
      const newReply = {
        name: name,
        text: text,
        replies: [],
        score: 0,
      };
      setReplies([...replies, newReply]);
      setFormStatus(true);
    };  

    const handleReplyButtonClick = () => {
      setIsReplying(true);
      setFormStatus(false);
    }
  
    return (
      <div className='comment'>
        <div className='comment-body'>
          <p id='comment-name'>{comment.name}</p>
          <p>{comment.text}</p>
          <button id='reply-button' class="btn btn-dark rounded" onClick={handleReplyButtonClick}>
            Reply
          </button>
        </div>
        <VoteComment/>
        {isReplying && !formStatus && (
          <div>
            <CommentForm onSubmit={handleReplySubmit}/>
          </div>
        )}
        {isReplying && (
          <div className='replies'>
            {replies.map((reply, index) => (
              <div key={index}>
                <Comment comment={reply}/>
              </div>
            ))}
          </div>
        )}
      </div>
    );
};
export default Comment;
import { useState } from "react";
import "./Comment.css";
import { ReactComponent as IconMinus } from "../images/icon-minus.svg";
import { ReactComponent as IconPlus } from "../images/icon-plus.svg";
import ReplyComment from "./ReplyComment";
import DATA from '../data.json';


const Comment = ({content, user, createdAt, replies, cscore}) => {
  const [score, setScore] = useState(parseInt(cscore));
  const [showReplyArea, setShowReplyArea] = useState(false);
  const [replyArea, setReplyArea] = useState('')
  const [replyMsg, setReplyMsg] = useState(['jeden', 'dwa', 'trzy']);
  const currentUser = DATA.currentUser;
  let cimgName = ((currentUser.image.png).split('/')).pop()
  const cimage = require(`../images/avatars/${cimgName}`);
  let imgName = ((user.image.png).split('/')).pop()
  const image = require(`../images/avatars/${imgName}`);

  
  const addReply = (reply) =>{
    setReplyMsg([...replyMsg, reply])
  }
  console.log(replies)

  return (
    <>
      <div className="comments-container">
        <div className="left-comment-container">
          <div className="reaction-button">
            <span onClick={() => setScore(score + 1)}>
              <IconPlus />
            </span>
            <p>{score}</p>
            <span onClick={() => setScore(score - 1)}>
              <IconMinus />
            </span>
          </div>
        </div>
        <div className="right-comment-container">
          <div className="upper-comment">
            <div className="left-upper-comment">
              <img src={image} alt="avatar" className="comment-author-image" />
              <div className="comment-author">{user.username}</div>
              <div className="comment-time">{createdAt}</div>
            </div>
            <span className="comment-reply-button" onClick={()=> setShowReplyArea(!showReplyArea)}>
              <span className="material-symbols-outlined">reply</span>
              &nbsp;Reply
            </span>
          </div>
          <div className="comment-container">
            {content}
          </div>
        </div>
      </div>

      {showReplyArea && (
        <div className="comments-container">
          <div className="left-comment-container">
            <img src={cimage} alt="avatar" height="40px" />
          </div>
          <div className="right-reply-container">
            <textarea
              name=""
              id=""
              cols="30"
              rows="5"
              className="reply-textarea"
              value={replyArea}
              onChange={e => {
                  e.preventDefault();
                  setReplyArea(e.target.value);
              }}
            ></textarea>
            <button className="reply-button" onClick={()=> {addReply(replyArea); setReplyArea(''); setShowReplyArea(false)}}>REPLY</button>
          </div>
        </div>
      )}
      {replies.map((reply, key) => {
        return(
          <ReplyComment content={reply.content} createdAt={reply.createdAt} replyingTo={reply.replyingTo} cscore={reply.score} user={reply.user} key={key}/>
        )
      })}
    </>
  );
};

export default Comment;

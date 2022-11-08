import { useState } from "react";
import "./ReplyComment.css";
import { ReactComponent as IconMinus } from "../images/icon-minus.svg";
import { ReactComponent as IconPlus } from "../images/icon-plus.svg";
import DATA from "../data.json";

const ReplyComment = ({
  content,
  user,
  createdAt,
  replyingTo,
  cscore,
  addReply,
}) => {
  const [score, setScore] = useState(cscore);
  const [replyArea, setReplyArea] = useState("");

  const [showReplyArea, setShowReplyArea] = useState(false);
  const currentUser = DATA.currentUser;
  let imgName = user.image.png.split("/").pop();
  const image = require(`../images/avatars/${imgName}`);
  let cimgName = currentUser.image.png.split("/").pop();
  const cimage = require(`../images/avatars/${cimgName}`);

  return (
    <>
      <div className="flex">
        <div className="reply-comment-line-container">
          <div className="reply-comment-line"></div>
        </div>
        <div className="reply-comments-container">
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
                <img
                  src={image}
                  alt="avatar"
                  className="comment-author-image"
                />
                <div className="comment-author">{user.username}</div>
                <div className="comment-time">{createdAt}</div>
              </div>
              <span
                className="comment-reply-button"
                onClick={() => setShowReplyArea(!showReplyArea)}
              >
                <span className="material-symbols-outlined">reply</span>
                &nbsp;Reply
              </span>
            </div>
            <div className="comment-container">
              <b>@{replyingTo + " "}</b>
              {content}
            </div>
          </div>
        </div>
      </div>
      {showReplyArea && (
        <div className="flex">
          <div className="reply-comment-line-container">
            <div className="reply-comment-line"></div>
          </div>
          <div className="reply-comments-container">
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
                onChange={(e) => {
                  e.preventDefault();
                  setReplyArea(e.target.value);
                }}
              ></textarea>
              <button
                className="reply-button"
                onClick={() => {
                  addReply(replyArea);
                  setReplyArea("");
                  setShowReplyArea(false);
                }}
              >
                REPLY
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ReplyComment;

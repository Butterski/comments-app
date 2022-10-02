import { useState } from "react";
import "./ReplyComment.css";
import { ReactComponent as IconMinus } from "../images/icon-minus.svg";
import { ReactComponent as IconPlus } from "../images/icon-plus.svg";

const image = require("../images/avatars/image-ramsesmiron.png");

const ReplyComment = ({ text }) => {
  const [score, setScore] = useState(0);
  const [showReplyArea, setShowReplyArea] = useState(false);

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
                <div className="comment-author">adam mickiewicz</div>
                <div className="comment-time">miesiac temu</div>
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
              {text}
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
              <img src={image} alt="avatar" height="40px" />
            </div>
            <div className="right-reply-container">
              <textarea
                name=""
                id=""
                cols="30"
                rows="5"
                className="reply-textarea"
              ></textarea>
              <button className="reply-button">REPLY</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ReplyComment;

import { useState } from "react";
import "./App.css";
import Comment from "./components/Comment";
import DATA from "./data.json";

function App() {
  const [comments, setComments] = useState(DATA.comments);

  return (
    <div className="App">
      <div className="middle-container">
        {comments.map((comment, index) => {
          return (
            <Comment
              content={comment.content}
              createdAt={comment.createdAt}
              replies={comment.replies}
              user={comment.user}
              cscore={comment.score}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;

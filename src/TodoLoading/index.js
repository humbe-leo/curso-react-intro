import React from "react";
import "./TodoLoading.css";

function TodoLoading() {
  return (
    <>
      <div className="loadingTodo-container">
        <span className="loadingTodo-completeIcon"></span>
        <p className="loadingTodo-text"></p>
        <span className="loadingTodo-deleteIcon"></span>
      </div>
      <div className="loadingTodo-container">
        <span className="loadingTodo-completeIcon"></span>
        <p className="loadingTodo-text"></p>
        <span className="loadingTodo-deleteIcon"></span>
      </div>
      <div className="loadingTodo-container">
        <span className="loadingTodo-completeIcon"></span>
        <p className="loadingTodo-text"></p>
        <span className="loadingTodo-deleteIcon"></span>
      </div>
    </>
  );
}

export { TodoLoading };

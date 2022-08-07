import axios from "axios";
import React, { useState } from "react";

function TodoCreate({ getItems }) {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const token = localStorage.getItem("token");

  const onCreateTodo = () => {
    axios
      .post(
        "http://localhost:8080/todos",
        { title: title, content: content },
        { headers: { Authorization: token } }
      )
      .then((res) => {
        console.log(res);
        getItems();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };
  return (
    <div>
      <div>
        <label htmlFor="title">title</label>
        <input type="text" id="title" onChange={onChangeTitle} />
      </div>
      <div>
        <label htmlFor="content">content</label>
        <input type="text" id="content" onChange={onChangeContent} />
      </div>
      <button onClick={onCreateTodo}>추가하기</button>
    </div>
  );
}

export default TodoCreate;

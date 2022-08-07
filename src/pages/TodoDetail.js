import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TodoList from "../components/TodoList";

function TodoDetail() {
  const [item, setItem] = useState();
  const { id } = useParams();
  const token = localStorage.getItem("token");
  useEffect(() => {
    axios
      .get(`http://localhost:8080/todos/${id}`, {
        headers: { Authorization: token },
      })
      .then((res) => {
        console.log(res);
        setItem(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token, id]);
  return (
    <div>
      <h1>TodoDetail</h1>
      <p>title : {item && item.title}</p>
      <p>content : {item && item.content}</p>
      <p>생성시간 : {item && item.createdAt}</p>
      <hr />
      <TodoList />
    </div>
  );
}

export default TodoDetail;

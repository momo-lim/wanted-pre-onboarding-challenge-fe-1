import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TodoCreate from "./TodoCreate";
import TodoListItem from "./TodoListItem";

function TodoList() {
  const [items, setItems] = useState();

  const token = localStorage.getItem("token");
  const getItems = () => {
    axios
      .get("http://localhost:8080/todos", {
        headers: { Authorization: token },
      })
      .then((res) => {
        console.log(res.data.data);
        setItems(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const editDone = async (editTitle, editContent, id) => {
    await axios
      .put(
        `http://localhost:8080/todos/${id}`,
        {
          title: editTitle,
          content: editContent,
        },
        { headers: { Authorization: token } }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    getItems();
  };
  useEffect(() => {
    getItems();
    // eslint-disable-next-line
  }, []);
  const todoRemove = async (id) => {
    await axios
      .delete(`http://localhost:8080/todos/${id}`, {
        headers: { Authorization: token },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    getItems();
  };
  return (
    <div>
      <Link to="/">홈으로 돌아가기</Link>
      <h1>TodoList</h1>
      {items &&
        items.map((item, index) => (
          <div key={index}>
            <TodoListItem
              item={item}
              editDone={editDone}
              todoRemove={todoRemove}
            />
          </div>
        ))}

      <TodoCreate getItems={getItems} />
    </div>
  );
}

export default TodoList;

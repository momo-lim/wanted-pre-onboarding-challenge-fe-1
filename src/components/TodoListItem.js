import React, { useState } from "react";
import { Link } from "react-router-dom";

function TodoListItem({ item, editDone, todoRemove }) {
  const [edit, setEdit] = useState(false);
  const [editTitle, setEditTitle] = useState(item.title);
  const [editContent, setEditContent] = useState(item.content);
  const onEditTitle = (e) => {
    setEditTitle(e.target.value);
  };
  const onEditContent = (e) => {
    setEditContent(e.target.value);
  };

  const onClickEdit = () => {
    setEdit(true);
  };

  const onClickEditDone = () => {
    setEdit(false);
    editDone(editTitle, editContent, item.id);
  };
  const onClickRemove = () => {
    todoRemove(item.id);
  };
  return (
    <div>
      {edit ? (
        <div>
          <input type="text" value={editTitle} onChange={onEditTitle} />
          <input type="text" value={editContent} onChange={onEditContent} />
          <button onClick={onClickEditDone}>수정완료</button>
          <hr />
        </div>
      ) : (
        <div>
          <Link to={`/todo/${item.id}`}>title : {item.title}</Link>

          <button onClick={onClickEdit}>수정</button>
          <button onClick={onClickRemove}>삭제</button>
          <hr />
        </div>
      )}
    </div>
  );
}

export default TodoListItem;

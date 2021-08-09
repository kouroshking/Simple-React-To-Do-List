import React from "react";
import TDItem from "./TDItem";
const List = (props) => {
  const doneHandler = (id) => {};
  const deleteHandler = (id) => {
    props.deleteHandler(id);
  };

  const renderTodoList = props.todos.map((item) => {
    return (
      <TDItem
        item={item}
        doneHandler={doneHandler}
        deleteHandler={deleteHandler}
        done={true}
      ></TDItem>
    );
  });
  return (
    <div className="container">
      <div className="list">{renderTodoList}</div>
    </div>
  );
};

export default List;

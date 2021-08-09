import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import Header from "./Header";
import AddTodo from "./AddTodo";
import List from "./List";
import DoneList from "./DoneList";

const App = () => {
  const LOCAL_STORAGE_KEY = "tasks";
  const DONE_TASKS_LOCAL_STORAGE_KEY = "done_tasks";
  const [todos, setTodos] = useState([]);
  const [donetasks, setDoneTasks] = useState([]);
  useEffect(() => {
    const getTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (getTasks) {
      setTodos(getTasks);
    }
  }, []);
  useEffect(() => {
    const getTasks = JSON.parse(
      localStorage.getItem(DONE_TASKS_LOCAL_STORAGE_KEY)
    );
    if (getTasks) {
      setDoneTasks(getTasks);
    }
  }, []);

  const addTask = (task) => {
    const newTask = { id: uuid(), ...task };
    setTodos([...todos, newTask]);
  };

  const doneHandler = (id) => {
    const newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    const newDoneTodos = todos.filter((item) => {
      return item.id === id;
    });
    setTodos(newTodos);
    setDoneTasks([...donetasks, ...newDoneTodos]);
  };

  const deleteHandler = (id) => {
    const newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
  };
  const deleteDoneHandler = (id) => {
    const newDoneTasks = donetasks.filter((item) => {
      return item.id !== id;
    });
    setDoneTasks(newDoneTasks);
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);
  useEffect(() => {
    localStorage.setItem(
      DONE_TASKS_LOCAL_STORAGE_KEY,
      JSON.stringify(donetasks)
    );
  }, [donetasks]);

  return (
    <>
      <Header />
      <List
        todos={todos}
        doneHandler={doneHandler}
        deleteHandler={deleteHandler}
      />
      <hr />
      <DoneList
        todos={donetasks}
        doneHandler={doneHandler}
        deleteHandler={deleteDoneHandler}
      />
      <AddTodo addTask={addTask} />
    </>
  );
};

export default App;

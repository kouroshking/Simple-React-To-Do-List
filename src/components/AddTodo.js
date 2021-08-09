import React from "react";

class AddTodo extends React.Component {
  state = {
    title: "",
    description: "",
  };

  addTask = (e) => {
    e.preventDefault();
    if (this.state.title == "") {
      alert("cannot add without a title. please give your task a title!");
    } else {
      this.props.addTask(this.state);
      this.setState({ title: "", description: "" });
    }
  };

  render() {
    return (
      <>
        <div className="footer">
          <form className="form" onSubmit={this.addTask}>
            <div>
              <input
                className="title-input"
                type="text"
                name="title"
                placeholder="Task Title"
                value={this.state.title}
                onChange={(e) => {
                  this.setState({ title: e.target.value });
                }}
              />
              <input
                className="description-input"
                type="text"
                name="description"
                placeholder="Description"
                value={this.state.description}
                onChange={(e) => {
                  this.setState({ description: e.target.value });
                }}
              />
            </div>
            <div>
              <button type="submit" className="btn btn-primary">
                +
              </button>
            </div>
          </form>
        </div>
        <div style={{ marginTop: "100px" }}></div>
      </>
    );
  }
}

export default AddTodo;

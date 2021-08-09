import React from "react";

const Item = (props) => {
  const { id, title, description } = props.item;
  const done = props.done;
  let doneclass;
  let donebtn;
  if (done) {
    doneclass = "item done";
    donebtn = "btn btn-success d-none";
  } else {
    doneclass = "item";
    donebtn = `btn btn-success`;
  }

  return (
    <div className={doneclass} id={id}>
      <div className="content">
        <p className="title">{title}</p>
        <i className="description">{description}</i>
      </div>
      <div className="buttons">
        <button
          className={donebtn}
          type="button"
          onClick={() => {
            props.doneHandler(id);
          }}
        >
          <i className="fa fa-check"></i>
        </button>
        <button
          className="btn btn-danger"
          type="button"
          onClick={() => {
            props.deleteHandler(id);
          }}
        >
          <i className="fa fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default Item;

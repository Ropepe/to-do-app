import React from "react";

const ropepe = () => {
  return (
    <div className="RopeContainter">
      <button type="submit" className="fill">
        Dodaj
      </button>
      <input
        type="text"
        id="new-todo-input"
        className="input_lg"
        name="text"
        autoComplete="off"
      />
    </div>
  );
};
export default ropepe;

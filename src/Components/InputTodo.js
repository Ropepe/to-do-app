import { render } from "@testing-library/react";
import React, { useState } from "react";

const InputTodo = (props) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      props.addTodoProps(title);
      setTitle("");
    } else {
      alert("Please write item");
    }
  };

  const onChange = (e) => {
    setTitle(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add Todo..."
        className="dugme fill"
        name="title"
        value={title}
        onChange={onChange}
      />

      <button className="fill submit--btn">Submit</button>
    </form>
  );
};
export default InputTodo;

// import React, { Component } from "react";

// class InputTodo extends Component {
//   state = {
//     title: "",
//   };
//   handleSubmit = (e) => {
//     e.preventDefault();
//     this.props.addTodoProps(this.state.title);
//     this.setState({
//       title: "",
//     });
//   };

//   onChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//     console.log(e.target.value);
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <input
//           type="text"
//           placeholder="Add Todo..."
//           className="dugme fill"
//           name="title"
//           value={this.state.title}
//           onChange={this.onChange}
//         />

//         <button className="fill submit--btn">Submit</button>
//       </form>
//     );
//   }
// }
// export default InputTodo;

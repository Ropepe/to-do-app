import React, { useState, useEffect } from "react";
import styles from "../TodoItem.module.css";

const TodoItems = (props) => {
  const [edit, setEdit] = useState(false);

  const handleEditing = () => {
    setEdit(true);
    console.log(edit);
  };

  const handleUpdateDone = (e) => {
    if (e.key === "Enter") {
      setEdit(false);
    }
  };

  const completedStyle = {
    fontstyle: "italic",
    color: "#595959",
    textDecoration: "line-through",
  };
  let viewMode = {};
  let editMode = {};

  if (edit) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }
  useEffect(() => {
    console.log("Cleaning up...");
  }, []);
  return (
    <div className="todoItems">
      <li>
        <div onDoubleClick={handleEditing} style={viewMode}>
          <span style={props.todoss.completed ? completedStyle : null}>
            {props.todoss.title}
          </span>

          <input
            type="checkbox"
            checked={props.todoss.completed}
            onChange={() => props.handle(props.todoss.id)}
          ></input>
          <button
            className="dugme2 fill2"
            onClick={() => props.deletedTodoProps(props.todoss.id)}
          >
            🗑
          </button>
        </div>
        <input
          type="text"
          className={styles.textInput}
          style={editMode}
          value={props.todoss.title}
          onChange={(e) => {
            props.setUpdate(e.target.value, props.todoss.id);
          }}
          onKeyDown={handleUpdateDone}
        />
      </li>
    </div>
  );
};

export default TodoItems;

// class TodoItems extends React.Component {
//   state = {
//     editing: false,
//   };

//   handleEditing = () => {
//     this.setState({
//       editing: true,
//     });
//     console.log(this.state.editing);
//   };

//   handleUpdateDone = (e) => {
//     if (e.key === "Enter") {
//       this.setState({ editing: false });
//     }
//   };
//   render() {
//     const completedStyle = {
//       fontstyle: "italic",
//       color: "#595959",
//       textDecoration: "line-through",
//     };
//     let viewMode = {};
//     let editMode = {};

//     if (this.state.editing) {
//       viewMode.display = "none";
//     } else {
//       editMode.display = "none";
//     }

//     return (
//       <div className="todoItems">
//         <li>
//           <div onDoubleClick={this.handleEditing} style={viewMode}>
//             <span style={this.props.todoss.completed ? completedStyle : null}>
//               {this.props.todoss.title}
//             </span>

//             <input
//               type="checkbox"
//               checked={this.props.todoss.completed}
//               onChange={() => this.props.handle(this.props.todoss.id)}
//             ></input>
//             <button
//               className="dugme2 fill2"
//               onClick={() => this.props.deletedTodoProps(this.props.todoss.id)}
//             >
//               🗑
//             </button>
//           </div>
//           <input
//             type="text"
//             className={styles.textInput}
//             style={editMode}
//             value={this.props.todoss.title}
//             onChange={(e) => {
//               this.props.setUpdate(e.target.value, this.props.todoss.id);
//             }}
//             onKeyDown={this.handleUpdateDone}
//           />
//         </li>
//       </div>
//     );
//   }
//   componentWillUnmount() {
//     console.log("Cleaning up...");
//   }
// }

// export default TodoItems;

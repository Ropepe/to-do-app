import React, { useState, useEffect } from "react";
import "../App.css";
import Header from "./Header";
import InputTodo from "./InputTodo";
import Navbar from "./Navbar";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";
import { Route, Switch } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotMatch from "../pages/NotMatch";

const TodoContainer = () => {
  const [todos, setTodos] = useState(getInitialTodos());

  const handleChange = (id) => {
    setTodos(
      todos.map((a) => {
        if (a.id === id) {
          a.completed = !a.completed;
        }
        return a;
      })
    );
  };

  const delTodo = (id) => {
    setTodos([
      ...todos.filter((a) => {
        return a.id !== id;
      }),
    ]);
  };

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const setUpdate = (updateTitle, id) => {
    setTodos(
      todos.map((a) => {
        if (a.id === id) {
          a.title = updateTitle;
        }
        return a;
      })
    );
    console.log(updateTitle, id);
  };

  // useEffect(() => {
  //   // const temp = localStorage.getItem("todos");
  //   // const loadedTodos = JSON.parse(temp);

  //   // const loadedTodos = JSON.parse(localStorage.getItem("todos"));
  //   // if (loadedTodos) {
  //   //   setTodos(loadedTodos);
  //   // }

  //   if (JSON.parse(localStorage.getItem("todos"))) {
  //     setTodos(JSON.parse(localStorage.getItem("todos")));
  //   }
  // }, []);

  function getInitialTodos() {
    const temp = localStorage.getItem("todos");
    const savedTodos = JSON.parse(temp);
    return savedTodos || [];
  }

  useEffect(() => {
    {
      // const temp = JSON.stringify(todos);
      // localStorage.setItem("todos", temp);

      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  return (
    <>
      <Navbar className="lijevaStrana" />
      <Switch>
        <Route exact path="/">
          <div className="desnaStrana">
            <div className="todoContainer">
              <Header />
              <InputTodo addTodoProps={addTodoItem} />
              <TodoList
                todosss={todos}
                handle={handleChange}
                deletedTodoProps={delTodo}
                setUpdate={setUpdate}
              />
            </div>
          </div>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="*">
          <NotMatch />
        </Route>
      </Switch>
    </>
  );
};

export default TodoContainer;

// class TodoContainer extends React.Component {
//   state = {
//     todos: [],
//   };

//   handleChange = (id) => {
//     this.setState({
//       todos: this.state.todos.map((a) => {
//         if (a.id === id) {
//           a.completed = !a.completed;
//         }
//         return a;
//       }),
//     });
//   };

//   delTodo = (id) => {
//     this.setState({
//       todos: [
//         ...this.state.todos.filter((a) => {
//           return a.id !== id;
//         }),
//       ],
//     });
//   };

//   addTodoItem = (title) => {
//     const newTodo = {
//       id: uuidv4(),
//       title: title,
//       completed: false,
//     };
//     this.setState({
//       todos: [...this.state.todos, newTodo],
//     });
//   };

//   setUpdate = (updateTitle, id) => {
//     this.setState({
//       todos: this.state.todos.map((a) => {
//         if (a.id === id) {
//           a.title = updateTitle;
//         }
//         return a;
//       }),
//     });
//     console.log(updateTitle, id);
//   };

//   // componentDidMount() {
//   //   fetch("http://jsonplaceholder.typicode.com/todos?_limit=10")
//   //     .then((response) => response.json())
//   //     .then((data) => this.setState({ todos: data }));
//   // }

//   componentDidMount(prevProps, prevState) {
//     const temp = localStorage.getItem("todos");
//     const loadedTodos = JSON.parse(temp);
//     if (loadedTodos) {
//       this.setState({
//         todos: loadedTodos,
//       });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.todos !== this.state.todos) {
//       const temp = JSON.stringify(this.state.todos);
//       localStorage.setItem("todos", temp);
//     }
//   }
//   render() {
//     return (
//       <div className="todoContainer">
//         <Navbar />
//         <Header />
//         <InputTodo addTodoProps={this.addTodoItem} />
//         <TodoList
//           todosss={this.state.todos}
//           handle={this.handleChange}
//           deletedTodoProps={this.delTodo}
//           setUpdate={this.setUpdate}
//         />
//       </div>
//     );
//   }
// }
// export default TodoContainer;

import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { ToDoListItem } from './ToDoListItem';

const initialTodos : Todo[] = [
  {
    text: "Running trails in the Illawarra escarpment",
    link: "https://www.google.com/maps/place/Illawarra+Escarpment+State+Conservation+Area/@-34.2361521,150.9769354,2a,75y,116.19h,109.95t/data=!3m7!1e1!3m5!1slnzwF6eEskR_hEX2evlR1Q!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DlnzwF6eEskR_hEX2evlR1Q%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D0%26pitch%3D-20%26thumbfov%3D100!7i13312!8i6656!4m7!3m6!1s0x6b131eb29977b939:0xf017d68f9f29bc0!8m2!3d-34.3719375!4d150.8816875!14m1!1BCgIgARICCAI",
    complete: true
  },
  {
    text: "Learning the art of software engineering at Easy Agile",
    link: "https://www.easyagile.com/",
    complete: true
  },
  {
    text: "Desperately trying to get LoFi out of my Spotify recommendation algorithm",
    link: "",
    complete: false
  }
]

function App() {
  // Initial state is initialTodos
  // setTodos will be used to update todos
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (selectedTodo : Todo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return (
          Object.assign({}, todo, {complete: !todo.complete})
          /*
          {
            ...todo,
            complete: !todo.complete
          }
          */
        );
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Coming soon...</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Conor's little corner of the internet
        </p>
        <h2>These days I'm:</h2>
        <ul>
          {todos.map(x => <ToDoListItem todo={x} toggleTodo={toggleTodo}/>)}
        </ul>
      </header>
    </div>
  );
}

export default App;

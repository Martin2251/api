import logo from "./logo.svg";
import "./App.css";
import Axios from "axios";

function App() {
  const getJoke = () =>
    axios.get("https://official-joke-api.appspot.com/random_joke").then((response) => {
      console.log(response);

      }
    }

    );
  return (
    <div className="App">
      <div>
        <h1>Hi everyone</h1>
        <button onClick={getJoke}> Get Joke </button>
      </div>
    </div>
  );
}

export default App;

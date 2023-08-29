import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import { PostItContextProvider } from "./context/postItContext";

function App() {
  return (
    <div className="App">
      <PostItContextProvider>
        <Home />
      </PostItContextProvider>
    </div>
  );
}

export default App;

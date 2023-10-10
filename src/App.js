import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import { PostItContextProvider } from "./context/PostItContext";
import { ContentContextProvider } from "./context/ContentContext";

function App() {
  return (
    <div className="App">
      <ContentContextProvider>
        <PostItContextProvider>
          <Home />
        </PostItContextProvider>
      </ContentContextProvider>
    </div>
  );
}

export default App;

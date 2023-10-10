import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import { PostItContextProvider } from "./context/PostItContext";
import { ContentContextProvider } from "./context/ContentContext";
import { LocalStorageContextProvider } from "./context/LocalStorageContext";

function App() {
  return (
    <div className="App">
      <LocalStorageContextProvider>
        <ContentContextProvider>
          <PostItContextProvider>
            <Home />
          </PostItContextProvider>
        </ContentContextProvider>
      </LocalStorageContextProvider>
    </div>
  );
}

export default App;

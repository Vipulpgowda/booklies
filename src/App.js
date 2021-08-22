import Navbar from "./components/Navbar";
import BookContextProvider from "./Contexts/BookContext";
import "./App.css";
import BookList from "./components/BookList";
import NewBookForm from "./components/BookForm";

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <NewBookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;

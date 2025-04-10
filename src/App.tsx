import "./App.css";
import Sidebar from "./components/Sidebar";
import NoteList from "./components/NoteList";

function App() {

  return (
    <div className="h-screen">
      <Sidebar />
      <NoteList />
    </div>
  );
}

export default App;

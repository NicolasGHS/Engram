import "./App.css";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import NoteList from "./components/NoteList";

function App() {
  const [ selectedFolder, setSelectedFolder] = useState<string | null>(null);

  console.log("selectedFolder: ", selectedFolder);

  return (
    <div className="h-screen">
      <Sidebar onSelectedFolder={(folder: string) => setSelectedFolder(folder)} selectedFolder={selectedFolder} />
      <NoteList selectedFolder={selectedFolder} />
    </div>
  );
}

export default App;

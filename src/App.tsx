import { useState } from "react";
import { FileEntry, readDir } from "@tauri-apps/api/fs";
import "./App.css";

function App() {
  const [entries, setEntries] = useState<FileEntry[]>([]);

  readDir("/Users/richard/workspace/tauri-app").then((entries) =>
    setEntries(entries)
  );

  return (
    <div className="container">
      <h1>Welcome to Tauri!</h1>

      {JSON.stringify(entries)}
    </div>
  );
}

export default App;

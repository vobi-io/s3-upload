import React, { useState } from 'react';
import { uploadImage } from './upload'

function App() {
  const [files, setFiles] = useState([])

  return (
    <div className="App">
      <input onChange={file => setFiles(file.target.files[0]) } type="file" accept="image/*" />
      <button onClick={() => uploadImage(files)}>upload</button>
    </div>
  );
}

export default App;

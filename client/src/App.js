import React, { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null); // New state for the selected file
  const [ipfsHash, setIpfsHash] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState("");

  const handleUpload = async () => {
    // Simple validation
    if (!title.trim() || !description.trim() || !file) {
      alert("Please fill in all fields.");
      return;
    }

    // Perform file upload logic using the selected file
    // Simulate file upload by displaying a placeholder IPFS hash
    const placeholderIpfsHash =
      "QmPZFdQ3vj3pYtYw9GJ9eYpa27pJ4tE8kZoEm5dQBb3ZoV";
    setIpfsHash(placeholderIpfsHash);
  };

  const handleSearch = async () => {
    // Simple validation
    if (!searchTerm.trim()) {
      alert("Please enter a search term.");
      return;
    }

    // Call your backend/API to search for a patent based on the search term
    // For simplicity, we're using a placeholder search result here
    const placeholderSearchResult = "Patent Found!";
    setSearchResult(placeholderSearchResult);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Patentchain</h1>
        <div>
          <h2>Upload Patent</h2>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <label>File:</label>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <button onClick={handleUpload}>Upload</button>
          {ipfsHash && <p>IPFS Hash: {ipfsHash}</p>}
        </div>

        <div>
          <h2>Search Patent</h2>
          <label>Search Term:</label>
          <div className="search_div">
            <input
            className="search_input"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="search_button" onClick={handleSearch}>Search</button>
            {searchResult && <p>Search Result: {searchResult}</p>}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;


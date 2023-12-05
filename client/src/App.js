// src/App.js
import React, { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ipfsHash, setIpfsHash] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState("");

  const handleUpload = async () => {
    // Call your backend/API to upload patent data and get the IPFS hash
    // For simplicity, we're using a placeholder IPFS hash here
    const placeholderIpfsHash =
      "QmPZFdQ3vj3pYtYw9GJ9eYpa27pJ4tE8kZoEm5dQBb3ZoV";
    setIpfsHash(placeholderIpfsHash);
  };

  const handleSearch = async () => {
    // Call your backend/API to search for a patent based on the search term
    // For simplicity, we're using a placeholder search result here
    const placeholderSearchResult = "Patent Found!";
    setSearchResult(placeholderSearchResult);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Patent Chain</h1>
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
          <button onClick={handleUpload}>Upload</button>
          {ipfsHash && <p>IPFS Hash: {ipfsHash}</p>}
        </div>

        <div>
          <h2>Search Patent</h2>
          <label>Search Term:</label>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
          {searchResult && <p>Search Result: {searchResult}</p>}
        </div>
      </header>
    </div>
  );
}

export default App;

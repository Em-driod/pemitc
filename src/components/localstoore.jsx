import  { useState, useEffect } from "react";

const LocalStorageDemo = () => {
  const [name, setName] = useState("");

  // Load saved data when component mounts
  useEffect(() => {
    const savedName = localStorage.getItem("userName");
    if (savedName) setName(savedName);
  }, []);

  // Save to localStorage whenever name changes
  useEffect(() => {
    if (name) {
      localStorage.setItem("userName", name);
    }
  }, [name]); 

  const clearStorage = () => {
    localStorage.removeItem("userName");
    setName("");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
      }}
    >
      <h1 style={{ fontSize: "1.8rem" }}>LocalStorage Demo</h1>
      <input
        type="text"
        value={name}
        placeholder="Enter your name..."
        onChange={(e) => setName(e.target.value)}
        style={{
          padding: "0.6rem 1rem",
          borderRadius: "8px",
          border: "none",
          outline: "none",
          width: "250px",
          textAlign: "center",
          fontSize: "1rem",
        }}
      />
      <p style={{ fontSize: "1.1rem" }}>
        {name ? `👋 Welcome back, ${name}!` : "No name saved yet."}
      </p>

      <div style={{ display: "flex", gap: "1rem" }}>
        <button
          onClick={() => localStorage.setItem("userName", name)}
          style={{
            padding: "0.5rem 1rem",
            background: "#22c55e",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Save Name
        </button>

        <button
          onClick={clearStorage}
          style={{
            padding: "0.5rem 1rem",
            background: "#ef4444",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default LocalStorageDemo;

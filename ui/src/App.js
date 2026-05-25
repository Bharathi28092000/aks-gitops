import React, { useState } from "react";

function App() {

  const [message, setMessage] = useState("");

  const callAPI = async () => {

    try {

      const response = await fetch("/api");

      const data = await response.json();

      setMessage(data.message);

    } catch (error) {

      console.error(error);

      setMessage("API not reachable");

    }

  };

  return (

    <div
      style={{
        padding: "40px",
        fontFamily: "Arial",
        textAlign: "center",
      }}
    >

      <h1>AKS GitOps Deployment Successful 🚀</h1>

      <h2>End-to-End DevOps Pipeline</h2>

      <p>
        React UI and Node API deployed on Azure Kubernetes Service
      </p>

      <div
        style={{
          marginTop: "30px",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "10px",
          display: "inline-block",
        }}
      >

        <h3>Pipeline Components</h3>

        <p>✅ Docker</p>
        <p>✅ GitHub Actions</p>
        <p>✅ Azure Container Registry</p>
        <p>✅ Argo CD GitOps</p>
        <p>✅ Kubernetes</p>
        <p>✅ AKS</p>

      </div>

      <br /><br />

      <button
        onClick={callAPI}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Call API
      </button>

      <h2 style={{ marginTop: "20px" }}>
        {message}
      </h2>

    </div>

  );

}

export default App;
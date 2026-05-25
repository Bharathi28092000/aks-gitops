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

    <div style={{ padding: "40px" }}>

      <h1>GitOps Deployment Success 🚀</h1>

      <button onClick={callAPI}>
        Call API
      </button>

      <h2>{message}</h2>

    </div>

  );

}

export default App;
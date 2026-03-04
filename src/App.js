import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://<EC2-IP>")
      .then(res => res.text())
      .then(data => setMessage(data));
  }, []);

  return (
    <div>
      <h1>ABC Frontend</h1>
      <h2>{message}</h2>
    </div>
  );
}

export default App;

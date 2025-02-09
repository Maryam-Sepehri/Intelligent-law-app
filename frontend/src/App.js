import React, { useState } from "react";
import axios from "axios";

function App() {
    const [query, setQuery] = useState("");
    const [response, setResponse] = useState("");

    const handleAsk = async () => {
        const res = await axios.post("http://localhost:5000/ask", { query });
        setResponse(res.data.answer);
    };
igentI
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Intelligent Law Assistant</h1>
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Ask a legal question" />
            <button onClick={handleAsk}>Ask</button>
            <p>{response}</p>
        </div>
    );
}

export default App;

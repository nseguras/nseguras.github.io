// src/components/App1.js
import React, { useState } from "react";

function App1() {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [result, setResult] = useState(null);
    const [error, setError] = useState("");

    const handleDivision = async () => {
        setError("");
        try {
            const response = await fetch(
                "https://divideapp-backend.onrender.com/divide",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        num1: parseFloat(num1),
                        num2: parseFloat(num2),
                    }),
                },
            );

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Something went wrong");
            }

            const data = await response.json();
            setResult(data.result);
        } catch (err) {
            setError(err.message);
            setResult(null);
        }
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Division App</h1>
            <input
                type="number"
                placeholder="First number"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
                style={{ margin: "5px", padding: "5px" }}
            />
            <input
                type="number"
                placeholder="Second number"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
                style={{ margin: "5px", padding: "5px" }}
            />
            <button onClick={handleDivision} style={{ padding: "5px 10px" }}>
                Divide
            </button>
            {result !== null && <h2>Result: {result}</h2>}
            {error && <h2 style={{ color: "red" }}>{error}</h2>}
        </div>
    );
}

export default App1;

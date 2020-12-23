import "./App.css";
import React, { useState } from "react";
import "./App.css";
import Child from "./Child";
import { TransactionProvider } from "./transContext";
function App() {
    return (
        <>
            <div className="expense">
                <TransactionProvider>
                    <Child />
                </TransactionProvider>
            </div>
        </>
    );
}

export default App;

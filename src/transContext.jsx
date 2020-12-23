import React, { createContext, useContext, useReducer } from "react";
import { TransactionReducer } from "./transReducer";

let initialTransaction = [
    { amount: 500, desc: "cash" },
    { amount: -40, desc: "Book" },
    { amount: -200, desc: "Camera" },
];

export const TransactionContext = createContext(initialTransaction);

export const TransactionProvider = ({ children }) => {
    let [state, dispatch] = useReducer(TransactionReducer, initialTransaction);

    function addTransaction(transObj) {
        dispatch({
            type: "ADD",
            payload: {
                amount: transObj.amount,
                desc: transObj.desc,
            },
        });
    }
    return (
        <TransactionContext.Provider
            value={{
                transaction: state,
                addTransaction,
            }}
        >
            {children}
        </TransactionContext.Provider>
    );
};

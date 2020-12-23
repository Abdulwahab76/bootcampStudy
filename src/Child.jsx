import React, { useContext, useState } from "react";
import { TransactionContext } from "./transContext";

function Child() {
    let { transaction, addTransaction } = useContext(TransactionContext);
    let [newDesc, setDesc] = useState("");
    let [amount, setAmount] = useState(0);
    console.log(transaction);
    let handleAddition = (e) => {
        if (Number(amount) === 0) {
            alert("correct");
            return false;
        }
        e.preventDefault();
        console.log(newDesc);
        console.log(amount);
        addTransaction({
            amount: Number(amount),
            desc: newDesc,
        });
    };

    let getIncome = () => {
        let income = 0;
        for (var i = 0; i < transaction.length; i++) {
            if (transaction[i].amount > 0) income += transaction[i].amount;
        }
        return income;
    };
    let getExpense = () => {
        let expense = 0;
        for (var i = 0; i < transaction.length; i++) {
            if (transaction[i].amount < 0) expense += transaction[i].amount;
        }
        return expense;
    };
    return (
        <>
            <div className="container">
                <h1 className="text-center">Expense Tracker</h1>

                <h3>
                    Your balance <br /> ${getIncome() + getExpense()}
                </h3>
                <div className="expense-container">
                    <h3>
                        INCOME <br /> ${getIncome()}
                    </h3>
                    <h3>
                        EXPENSE <br /> ${getExpense()}
                    </h3>
                </div>
                <h3>History</h3>
                <ul className="transaction-list">
                    {transaction.map((transObj, index) => {
                        return (
                            <li key={index}>
                                <span>{transObj.desc}</span>
                                <span>${transObj.amount}</span>
                            </li>
                        );
                    })}
                </ul>
                <hr />
                <h3>Add new transaction</h3>
                <hr />
                <form onSubmit={handleAddition} className="transaction-form">
                    <label>
                        Enter Decription <br />
                        <input
                            onChange={(ev) => setDesc(ev.target.value)}
                            type="text"
                            name=""
                            required
                        />
                    </label>
                    <br />
                    <label>
                        Enter Amount <br />
                        <input
                            onChange={(ev) => setAmount(ev.target.value)}
                            type="number"
                            name=""
                            required
                        />
                    </label>
                    <br />
                    <input type="submit" name="" id="" />
                </form>
            </div>
        </>
    );
}

export default Child;

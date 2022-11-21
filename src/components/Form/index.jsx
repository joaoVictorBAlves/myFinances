import { useEffect, useState } from 'react';
import Grid from '../Grid';
import './Form.css'

const Form = ({ handleAdd, transactionList, setTransactionList }) => {
    const [desc, setDesc] = useState("")
    const [amount, setAmount] = useState("")
    const [isExpensive, setExpensive] = useState(false)

    const generateID = () => Math.round(Math.random() * 1000);


    const handleSave = () => {
        if (!desc || !amount) {
            alert("Informe a descrição e o valor!")
            return
        } else if (amount < 1) {
            alert("O valor precisa ser positivo")
            return
        }

        const transaction = {
            id: generateID(),
            desc: desc,
            amount: amount,
            isExpensive: isExpensive
        }

        handleAdd(transaction);

        setDesc("");
        setExpensive("");
        setAmount("");
    }

    return (
        <>
            <form>
                <div className="content-input">
                    <label htmlFor="description">Description</label>
                    <input id='description' type="text" value={desc} onChange={(e) => setDesc(e.target.value)} />
                </div>

                <div className="content-input">
                    <label htmlFor="amount">Amount</label>
                    <input id='amount' type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
                </div>

                <div className="radio-group">
                    <input type="radio" name="group1" id="add" defaultChecked onChange={() => setExpensive(!isExpensive)} />
                    Addition
                    <input type="radio" name="group1" id="sub" onChange={() => setExpensive(!isExpensive)} />
                    Subtraction
                </div>
                <input className='button' type="button" value="SEND" onClick={handleSave} />
            </form>
            <Grid items={transactionList} setItems={setTransactionList} />
        </>
    );
}

export default Form
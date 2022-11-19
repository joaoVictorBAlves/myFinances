import { useEffect, useState } from 'react';
import './Form.css'

const Form = () => {
    const [desc, setDesc] = useState("")
    const [amount, setAmount] = useState("")
    const [isExpensive, setExpensive] = useState(false)

    const handleSave = () => {
        
    }

    return (
        <form onSubmit={handleSave()}>
            <div className="content-input">
                <label htmlFor="description">Description</label>
                <input id='description' type="number" value={desc} onChange={(e) => setDesc(e.target.value)} />
            </div>

            <div className="content-input">
                <label htmlFor="amount">Amount</label>
                <input id='amount' type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
            </div>

            <div className="radio-group">
                <input type="radio" name="group1" id="add" defaultChecked onChange={() => setExpensive(!isExpensive)} />
                Addition
                <input type="radio" name="group1" id="sub" onChange={() => setExpensive(!isExpensive)}/>
                Subtraction
            </div>
            <button>SEND</button>
        </form>
    );
}

export default Form
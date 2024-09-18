import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCoin, resetCoins } from '../store';

const Coin = () => {
    const dispatch = useDispatch();
    const [insertedCoins, setInsertedCoins] = useState("");
    const [message, setMessage] = useState('');
    const totalCoins = useSelector(state => state.coins.total)

    let acceptedCoins = [1, 2, 5, 10, 20, 50, 100];

    const handleInsertCoin = (e) => {
        e.preventDefault();

        if (acceptedCoins.includes(insertedCoins)) {
            dispatch(addCoin(insertedCoins));
            setInsertedCoins("");
            setMessage("");
        } else if (!insertedCoins || insertedCoins === "0") {
            setMessage("Please insert a valid coin");
        } 
        else {
            setInsertedCoins("");
            setMessage("The inserted coin is not accepted. Coins accepted ($1, $2, $5, $10, $20, $50 or $100)")
        }
    }

    const handleInputChange = (e) => {
        setInsertedCoins(parseInt(e.target.value));
    }

    const handleReset = (e) => {
        e.preventDefault();
        dispatch(resetCoins());
    };

    return (
        <div className='card'>
            <div className='card-body'>
                <h4 className="fw-bold">Insert coin</h4>
                <form onSubmit={handleInsertCoin}>
                    <div className='pb-3'>
                        <label className='label'>Insert coin</label>
                        <input min={0} type='number' value={insertedCoins} className='form-control' onChange={handleInputChange} />
                    </div>
                    {message && 
                        <div className="alert alert-danger" role="alert">
                            {message}
                        </div>
                    }
                    <div className='pt-2 pb-2'> {totalCoins > 0 ? `Balance: $${totalCoins}` : 'Please insert coin first'}</div>
                    <div className='d-grid gap-2 d-md-flex'>
                        <button className='btn btn-primary' type='button'>Insert</button>
                        <button className='btn btn-light' type='button' onClick={handleReset}>Cancel</button>
                    </div>
                </form>
            </div>
            
        </div>
    )
}

export default Coin;
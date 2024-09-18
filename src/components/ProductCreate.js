import { useDispatch, useSelector } from 'react-redux';
import { changeName, changePrice, addProduct } from '../store';

const ProductCreate = () => {
    const dispatch = useDispatch();
    const { name, price } = useSelector((state) => state.form);

    const handleNameChange = (e) => {
        dispatch(changeName(e.target.value));
    }

    const handlePriceChange = (e) => {
        const productPrice = parseInt(e.target.value) || 0;
        if (productPrice >= 0) {
            dispatch(changePrice(productPrice));
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim() || price <= 0) {
            alert('Please enter a valid name and price');
            return;
        }
        dispatch(addProduct({ name, price }));
    }
    
    return (
        <div className='card'>
            <div className='card-body'>
                <h4 className="fw-bold">Add product</h4>
                <form onSubmit={handleSubmit}>
                    <div className='pb-3'>
                        <label className='label'>Name</label>
                        <input className='form-control' value={name} onChange={handleNameChange} />
                    </div>
                    <div className='pb-3'>
                        <label className='label'>Price</label>
                        <input className='form-control' type='number' min={1} value={price || ""} onChange={handlePriceChange} />
                    </div>
                    <div>
                        <button className='btn btn-primary'>Create</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ProductCreate
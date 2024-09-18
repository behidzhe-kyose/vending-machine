import { useState } from "react";
import { useDispatch } from "react-redux";
import { editProduct } from "../store";

const ProductEdit = ({ product, onSubmit }) => {
    const dispatch = useDispatch();
    const [name, setName] = useState(product.name);
    const [price, setPrice] = useState(product.price);

    const handleSubmit = (e) => {
        e.preventDefault();
       
       if (name.trim() === '' || price <= 0) {
           alert('Please enter a valid name and price.');
           return;
       }

       dispatch(editProduct({ ...product, name, price }));
       onSubmit();
    }
    
    return (
        <div className="pb-4">
            <form onSubmit={handleSubmit}>
                <div className="pb-3">
                    <label className="label">Name</label>
                    <input className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="pb-3">
                    <label className="label">Price</label>
                    <input className="form-control" type="number" min={1} value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div>
                    <button className="btn btn-primary">Save</button>
                </div>
            </form>
        </div>
    )
}

export default ProductEdit
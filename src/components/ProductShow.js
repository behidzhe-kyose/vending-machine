import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../store";
import ProductEdit from './ProductEdit';
import Modal from './Modal';

const ProductShow = ({ product }) => {
    const dispatch = useDispatch();
    const [showEdit, setShowEdit] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const coins = useSelector(state => state.coins.total);
    const [denomination, setDenomination] = useState([]);

    const acceptedCoins = [1, 2, 5, 10, 20, 50, 100];
    let change = coins - product.price;

    const toggleEdit = () => {
        setShowEdit(prev => !prev);
    }

    const handleProductDelete = () => {
        dispatch(removeProduct(product.id));
    }

    const getChangeCoins = () => {
        let reverse = [...acceptedCoins].reverse(); 
        let result = [];
        for (let coin of reverse) {
            while (change >= coin) {
                change -= coin;
                result.push(coin);
            }
        }
        setDenomination(result);
    }

    const handleProductBuy = () => {
        if (coins >= product.price) {
            setOpenModal(true);
            getChangeCoins();
        } else {
            alert(`Please, insert ${product.price - coins} more coins`);
        }
    }

    let content = (
        <div className='text-center pb-4'>
            <h3 className='fs-5 pt-2'>{product.name}</h3>
            <span className='fw-bold fs-4'>${product.price}</span>
        </div>
    );

    if (showEdit) {
        content = <ProductEdit onSubmit={() => setShowEdit(false)} product={product} />;
    }

    return (
        <div className='card p-3'>
            <div className='product-image'>
                <img src={product.imageUrl || `https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/450px-No_image_available.svg.png`} alt='product' />
            </div>
            <div>
                {content}
                {openModal && <Modal purchasedProduct={product} denomination={denomination} closeModalState={() => setOpenModal(false)} />}
                <div className='pb-2 row'>
                    <div className='col-6'>
                        <button className='btn btn-outline-primary w-100' onClick={toggleEdit}>Edit</button>
                    </div>
                    <div className='col-6'>
                        <button className='btn btn-outline-danger w-100' onClick={handleProductDelete}>Delete</button>
                    </div>
                </div>
                <div className=''>
                    <button className='btn btn-success w-100' onClick={handleProductBuy}>Buy</button>
                </div>
            </div>
        </div>
    );
}

export default ProductShow;
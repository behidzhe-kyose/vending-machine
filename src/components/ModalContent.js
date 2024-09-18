import { useDispatch } from "react-redux";
import { resetCoins } from "../store";

function ModalContent({ onClose, purchasedProduct, denomination }) {
    const dispatch = useDispatch();

    const handleGetCoins = () => {
        dispatch(resetCoins());
        onClose();
    }

    return (
        <div className="modal fade show" tabIndex="-1" style={{display: "block"}} aria-modal="true" role="dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <p className="modal-title fw-bold">Purchase info</p>
                    </div>
                    <div className="modal-body">
                        {purchasedProduct && 
                            <div>
                                <div className="fw-bold pb-3">You have successfully purchased: </div>
                                <div className="">
                                    <img src={purchasedProduct.imageUrl} alt={purchasedProduct.name} style={{maxHeight: 90}} />
                                    <span className="fw-bold">{purchasedProduct.name}</span>
                                </div>
                                <div className="fw-bold text-center">
                                    Change: ${denomination.reduce((a, b) => a + b, 0)} ({denomination.map(coin => `$${coin}`).join(', ')})
                                </div>
                            </div>
                        }
                    </div>
                    <div className="modal-footer">
                        <div className="d-grid gap-2 d-md-flex  ">
                            <button className="btn btn-primary" onClick={handleGetCoins}>Get coins</button>
                            <button className="btn btn-light" onClick={onClose}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalContent;
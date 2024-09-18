import { useSelector } from "react-redux";
import ProductShow from './ProductShow';

const ProductList = () => {
    const products = useSelector((state) => state.products.data);

    const renderedProducts = products.map(product => {
        return (
            <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12 pb-4' key={`product-${product.id}`}>
                <ProductShow product={product} />
            </div>
        )
    })
    
    return (
        <>
            {renderedProducts}
        </>
    )
}

export default ProductList
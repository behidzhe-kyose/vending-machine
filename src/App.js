import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';
import ProductList from './components/ProductsList';
import ProductCreate from './components/ProductCreate';
import Coin from './components/Coin';

function App() {
    return (
        <div className='container-lg container-fluid'>
            <div className='row pt-3'>
                <div className='col-xs-12 col-sm-6 pb-4'>
                    <ProductCreate />
                </div>
                <div className='col-xs-12 col-sm-6'>
                    <Coin />
                </div>
            </div>
            <div className='row pt-5'>
                <ProductList/>
            </div>
        </div>
    )
}

export default App;
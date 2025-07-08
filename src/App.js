import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/shopping-cart' element={<ShoppingCart />} />
    </Routes>
  );
}

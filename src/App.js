import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import MealNotes from './pages/MealNotes';
export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/meal-notes/:id' element={<MealNotes />} />
      <Route path='/shopping-cart' element={<ShoppingCart />} />
    </Routes>
  );
}

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import OrderReview from './components/OrderReview/OrderReview';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route exact path="/shop" element={<Shop></Shop>}></Route>
          <Route exact path="/review" element={<OrderReview></OrderReview>}></Route>
          <Route exact path="//inventory" element={<Inventory></Inventory>}></Route>
          <Route exact path="/" element={<Shop></Shop>}></Route>
          <Route exact path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

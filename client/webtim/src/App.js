import './App.css';
import ProductListComponent from './components/ProductListComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddProductComponent from './components/AddProductComponent';
import ErrorPageComponent from './components/ErrorPageComponent';

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent />
          <div className="container">
            <Routes>
              <Route exact path="/"  element={<ProductListComponent />}> </Route>
              <Route path="/products" element={<ProductListComponent />}> </Route>
              <Route path="/add" element={<AddProductComponent />}> </Route>
              <Route path="*" element={<ErrorPageComponent />} />
            </Routes>
          </div>
          <FooterComponent />
      </Router>
    </div>
  );
}

export default App;

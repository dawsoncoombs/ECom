import data from "./data";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeScreen from "./Views/homeScreen";
import ProductScreen from "./Views/productScreen";

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to='/'>Dawson</Link>
        </header>
        <main>
          <Routes>
            <Route path='/product/:slug' element={<ProductScreen />} />
            <Route path='/' element={<HomeScreen/>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;

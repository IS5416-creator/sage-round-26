import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import LayOut from "./pages/LayOut";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayOut/>} >
            <Route path="" element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="products" element={<Products/>}/>
            <Route path="products/:item" element={<Product/>}/>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

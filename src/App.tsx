// React
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components 
import { Layout } from "./components/Layout";

// Pages
import { Home } from "./pages/Home";
import { ProductDetail } from "./pages/ProductDetail";
import { NotFound } from "./pages/NotFound";
import { About } from "./pages/About";

// State and Context
import { AppContext as Ctx } from "./context";
import { reducer, initialState } from "./store/reducer";

// Services
import { ProductService } from "./services/product.service";

// Styles
import "@/styles/global.css";
import { Payment } from "./pages/Payment";


// Env variables
const env = import.meta.env;


function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState());
  const productService = new ProductService(env.VITE_API_URL || 'https://fakestoreapi.com/products');

  React.useEffect(() => {
    productService.getAll()
    .then(products => {
      dispatch({type: "GET_ALL_PRODUCTS", payload: products});
    })
    .catch(err => {
      dispatch({type: "ERROR", payload: err});
    });
    
    productService.getAllCategories()
    .then(categories => {
      dispatch({type: "GET_ALL_CATEGORIES", payload: categories});
    })
    .catch(err => {console.log(err);});

  }, []);

  return (
    <Ctx.Provider value={state}>
      <Router basename="/react-store">
        <Layout dispatch={dispatch}>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Home state={state} dispatch={dispatch} ctx={Ctx} />} />
            <Route path="/about" element={<About/>} />
            <Route path="product/:title" element={<ProductDetail state={state} dispatch={dispatch} />} />
            <Route path="/payment" element={<Payment state={state}/>}/>
          </Routes>
        </Layout>
      </Router>
    </Ctx.Provider>
  )
}

export default App

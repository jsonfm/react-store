// React
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components 
import { Layout } from "./components/Layout";

// Pages
import { ProductDetail } from "./pages/ProductDetail";
import { Home } from "./pages/Home";

// State and Context
import { AppContext as Ctx } from "./context";
import { reducer, initialState } from "./store/reducer";

// Services
import { ProductService } from "./services/product.service";

// Styles
import "./styles/global.css";

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
  }, []);

  return (
    <Ctx.Provider value={state}>
      <Router basename="/react-store">
        <Layout dispatch={dispatch}>
          <Routes>
            <Route path="/" element={<Home state={state} dispatch={dispatch} ctx={Ctx} />} />
            <Route path="/detail/" element={<ProductDetail />} />
          </Routes>
        </Layout>
      </Router>
    </Ctx.Provider>
  )
}

export default App

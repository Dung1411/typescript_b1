import {useEffect ,useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Navigate, NavLink, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import ProductPage from './pages/Products'
import Header from './components/Header'
import WebsiteLayout from './pages/layouts/WebsiteLayout'
import AdminLayout from './pages/layouts/AdminLayout'
import ProductManager from './pages/ProductManager'
import ProductDetail from './pages/ProductDetail'
import {list, remove } from './api/Product'
import {ProductType} from './pages/types/product'


function App() {
  const [products, setProducts] = useState<ProductType[]>([]);
  useEffect(()=>{
    const getProducts = async () =>{
      // const response = await fetch('http://localhost:8000/api/products/');
      // const data = await response.json();
      const {data} = await list();
      setProducts(data);
      // console.log(data);
      
    }
    getProducts();
  }, []);
  const removeItem = (id) => {
    console.log('app.js', id);
    remove(id);

    setProducts(products.filter(item => item.id !== id));


    // setProduct()
  }
  return (

    <div className="container">
        <Routes>
          <Route path="/" element={<WebsiteLayout />}>
              <Route index element={<Homepage />} />
              <Route path="product">
                <Route index element={<h1>Product Page</h1>} />
                <Route path=":id" element={<ProductDetail />} />
              </Route>
              
          </Route>
          <Route path="admin" element={<AdminLayout />}>
              <Route index element={<Navigate to="dashboard" />} />
              <Route path="dashboard" element={<h1>Dashboard page</h1>} />
              <Route path="products" element={<ProductManager products={products} onRemove={removeItem}/>} />
          </Route>
        </Routes>
    </div>
  )
}

export default App
import {useEffect ,useState } from 'react'
import logo from './logo.svg'
// import './App.css'
import { Navigate, NavLink, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import ProductPage from './pages/Products'
import Header from './components/Header'
import WebsiteLayout from './pages/layouts/WebsiteLayout'
import AdminLayout from './pages/layouts/AdminLayout'
import ProductManager from './pages/ProductManager'
import ProductDetail from './pages/ProductDetail'
import {add ,list, remove, update } from './api/Product'
import {ProductType} from './pages/types/product'
import ProductAdd from './pages/ProductAdd'
import ProductEdit from './pages/ProductEdit'
import Singup  from './pages/Singup'
import SignIn from './pages/Singin'

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
  const removeItem = (id : number) => {
    console.log('app.js', id);
    remove(id);

    setProducts(products.filter(item => item.id !== id));


    // setProduct()
  }
  const onHanldeAdd = (data : ProductType) => {
    add(data);
    setProducts([...products, data])
  }
  const onHanldeUpdate = async (product: ProductType) =>{
    const {data} = await update(product);
    setProducts(products.map(item => item.id === data.id ? data:item));
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
              <Route path="/admin/products/add" element={<ProductAdd onAdd={onHanldeAdd}/>} />
              <Route path=":id/edit" element={<ProductEdit onUpdate={onHanldeUpdate} />}/>
          </Route>
          <Route path='/singup' element={<Singup />}/>
          <Route path='/singin' element={<SignIn />}/>
        </Routes>
    </div>
  )
}

export default App
//  state lưu trữ dữ liệu
// props để chuyển dữ liệu 
// {} giá trị bắt buộc 1 hàm chỉ gọi tên khi truyền lên
//  typescript[] mảng có nhiều OBj
// nếu trong thẻ thì props.chrildren, nếu thuộc tính thì props.name 
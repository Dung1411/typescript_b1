import {useEffect ,useState } from 'react'
import logo from './logo.svg'
import { Navigate, NavLink, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import ProductPage from './pages/Products'
import Header from './components/Header'
import WebsiteLayout from './pages/layouts/WebsiteLayout'
import AdminLayout from './pages/layouts/AdminLayout'
import ProductManager from './pages/ProductManager'
import ProductDetail from './pages/ProductDetail'
import {add ,list, remove, update } from './api/Product';
import {ProductType} from './pages/types/product'
import ProductAdd from './pages/ProductAdd'
import ProductEdit from './pages/ProductEdit'
import Singup  from './pages/Singup'
import SignIn from './pages/Singin'
import UserManager from './pages/UserManager'
import Products from './pages/Products'
import Contact from './pages/client/Contact'
import CategoryList from './pages/category/CategoryList'
import { CategoryType } from './pages/types/category'
import {addcate,listCate,updateCate,removeCategory} from './api/Category'
import CategoryAdd from './pages/category/CategoryAdd'
import CategoryEdit from './pages/category/CategoryEdit'
import { getMe } from './api/User'
import { UserType } from './pages/types/user';

function App() {
 
  const [products, setProducts] = useState<ProductType[]>([]);
  const [user,setUser] = useState<UserType | null>(null);


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
    
    remove(id);

    setProducts(products.filter((item : ProductType) => item._id !== id));
  
  }
  
  const onHanldeAdd = async(data : ProductType) => {
    
    const response = await add(data);
    console.log(response.data);
    
    setProducts([...products, response.data])
  }
  const onHanldeUpdate = async (product: ProductType) =>{
    const {data} = await update(product);
    setProducts(products.map(item => item._id === data._id ? data:item));
  }

  // category 
  const [categorys, setCategorys] = useState<CategoryType[]>([]);
  useEffect(()=>{
    const getCategorys = async () =>{
      // const response = await fetch('http://localhost:8000/api/products/');
      // const data = await response.json();
      const {data} = await listCate();
      
      setCategorys(data);
      // console.log(data);
      
    }
    getCategorys();
  }, []);
  const removeCate = (id : number) => {
    
    removeCategory(id);

    setCategorys(categorys.filter((item : CategoryType) => item._id !== id));
  
  }
  const onHanldeAddCate = async(data : CategoryType) => {
    
    const response = await addcate(data);
    console.log(response.data);
    
    setCategorys([...categorys, response.data])
  }
  const onHanldeUpdateCate = async (category: CategoryType) =>{
    const {data} = await updateCate(category);
    setCategorys(categorys.map(item => item._id === data._id ? data:item));
  }

 
  useEffect(() => {
    const onRenderUserByToken = async() => {
      const token = localStorage.getItem('token');
      if(token){
        const { data : user} = await getMe(token);
        setUser(user)
      }
    }
    onRenderUserByToken()
  },[])

  const onLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
  }

  return (

    <div className="container">
        <Routes>
          <Route path="/" element={<WebsiteLayout onLogout={onLogout} user={user} />}>
              <Route index element={<Homepage />} />
              <Route path="product">
                <Route index element={<Products />} />
                <Route path=":id" element={<ProductDetail />} />
              </Route>
              <Route path='contact' element={<Contact />}/>
              
          </Route>
          <Route path="admin" element={<AdminLayout />}>
              <Route index element={<Navigate to="dashboard" />} />
              <Route path="dashboard" element={<h1></h1>} />
        
              <Route path="products" element={<ProductManager products={products} onRemove={removeItem}/>} />
              <Route path="/admin/products/add" element={<ProductAdd c/>} />
              <Route path=":id/edit" element={<ProductEdit onUpdate={onHanldeUpdate} />}/>
              <Route path='/admin/users' element = {<UserManager  />} />
             
              <Route path="categorys" element = {<CategoryList categorys = {categorys} onRemoveCate = {removeCate}/>} />
              <Route path="/admin/categorys/add" element={<CategoryAdd onAddCate={onHanldeAddCate}/>} />
              <Route path=":id/editCate" element={<CategoryEdit onUpdateCate={onHanldeUpdateCate} />} />
          </Route>
          <Route path='/singup' element={<Singup />}/>
          <Route path='/singin' element={<SignIn setUser={setUser} />}/>
        </Routes>
    </div>
  )
}

export default App
// load tài khoản ,in ra dữ liệu 
//  state lưu trữ dữ liệu
// props để chuyển dữ liệu 
// {} giá trị bắt buộc 1 hàm chỉ gọi tên khi truyền lên
//  typescript[] mảng có nhiều OBj
// nếu trong thẻ thì props.chrildren, nếu thuộc tính thì props.name 
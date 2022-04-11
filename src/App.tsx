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
import UserManager from './pages/UserManager'
import Products from './pages/Products'

function App() {
  // để mai có mic tôi nói lại nhé
  // dễ hiểu thôi 
  // ghi nó mỏi tay quá đúng r
  // đó bây h nấm fix css nhé
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
    // ok
    // call api chỗ này nấm hiểu chứ 
    remove(id);

    // cái đoạn này là lọc để render lại sản phẩm
    // đoan này là lọc đúng rồi : filter nó sẽ lọc cái điều kiện và trả về một mảng mới
    // chĩns xác trong đây là loại đi id tìm thấy
    setProducts(products.filter((item : ProductType) => item.id !== id));
    // thêm nhá có page đó chưa nhỉ

    // setProduct()
  }
  //  đẻe tôi giải thích luồng nhé
  // đây là file root
  // có nghĩa là mình phải đặt hàm remove ở đây
  // nếu mà đặt ở dưới kia ấy thì không thể nào có thể xóa sản phẩm ở giao diện được tại vì sản phẩm nó lưu ở component này và được truyền xuống
  // đúng rồi Nấm nhớ cái này : khi một list sản phẩm được đượckhai báo ở compoennt nào thì cái hàm xóá phải ở cùng cấp đó
  // thế nên nhìn này

  // cái hàm này được truyền xuống productAdd
  const onHanldeAdd = async(data : ProductType) => {
    // nấm để í nó không có id ??
    // mình đang xóa thì mình cần cái gì nhỉ ??
    // nó chỉ có name và price
    // vâjy thì làm thế nào nó có id
    // console.log(data);
    // call api
    // tôi call nhé
    const response = await add(data);
    console.log(response.data);
    // load lại sản phẩm ở client
    // khi có id rồi thì sẽ xóa được
    setProducts([...products, response.data])
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
                <Route index element={<Products />} />
                <Route path=":id" element={<ProductDetail />} />
              </Route>
              
          </Route>
          <Route path="admin" element={<AdminLayout />}>
              <Route index element={<Navigate to="dashboard" />} />
              <Route path="dashboard" element={<h1></h1>} />
        
              <Route path="products" element={<ProductManager products={products} onRemove={removeItem}/>} />
              <Route path="/admin/products/add" element={<ProductAdd onAdd={onHanldeAdd}/>} />
              <Route path=":id/edit" element={<ProductEdit onUpdate={onHanldeUpdate} />}/>
              <Route path='/admin/users' element = {<UserManager  />} />
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
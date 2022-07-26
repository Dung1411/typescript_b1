import React from 'react'
import { ProductType } from './types/product'
import { Table,Space } from 'antd';
import { remove } from './../api/Product';
import { Link } from 'react-router-dom';


type ProductManagerProps = {
   products: ProductType[],
   onRemove: (id: number) => void
}


const ProductManager = ({ products, onRemove }: ProductManagerProps) => {


  const headings = [
    { title: "STT", dataIndex: "stt", key: "stt"},
    { title: "Name", dataIndex: "name", key: "name"},
    { title: "Price", dataIndex: "price", key: "price"},
    { title: "Desc", dataIndex: "desc", key: "desc"},
    { title: "Img", dataIndex: "img", key: "img"},
    { title: "Category", dataIndex: "category", key: "category"},
    {
      title: 'Action',
      key: 'action',
      render: (text : any,record : any) => {
        // console.log(record);
        return (
          <Space size="middle">
            <Link to={`/admin/${record.key}/edit`}>Edit</Link>
            <button onClick={() => onRemove(record.key)}>Delete</button>
          </Space>
        )
      },
    },
  ]


  const dataSource = products.map((product, index) => {
    return { 
      key: product._id, 
      stt: index +1,
      name: product.name,
      price: product.price,
      desc: product?.desc,
      color: product?.color?.map((color) => {
        return (
          <button style={{background :color.hex }} className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none" />
        )
      }),
      img: <img className='w-[50px]' src={product.img} alt="" /> ,
      category : product.category?.name
    }
  })

  return (
    <div>
        <Table columns={headings} 
         dataSource={dataSource} className =  "table_manager"  />
        <button className='table_manager'><Link to="/admin/products/add">Thêm sản phẩm</Link></button>  
    </div>

  )
}

export default ProductManager
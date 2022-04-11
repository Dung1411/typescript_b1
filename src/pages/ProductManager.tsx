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
    { title: "Name", dataIndex: "name", key: "name"},
    { title: "Price", dataIndex: "price", key: "price"},
    { title: "Desc", dataIndex: "desc", key: "desc"},
    { title: "Color", dataIndex: "color", key: "color"},
    { title: "Img", dataIndex: "img", key: "img"},
    {
      title: 'Action',
      key: 'action',
      render: (text : any,record : any) => {
        console.log(record);
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
      key: product.id, 
      name: product.name,
      price: product.price,
      desc: product.desc,
      color: product.color.map((color) => {
        return (
          <button style={{background :color.hex }} className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none" />
        )
      }),
      img:  <img src={product.img} alt="" /> 
    }
  })
  return (
    <div>
        <Table columns={headings} 
         dataSource={dataSource} className =  "table_manager"  />
        <button className='table_manager'><a href="/admin/products/add">Thêm sản phẩm</a></button>  
    </div>
 
  )
}

export default ProductManager
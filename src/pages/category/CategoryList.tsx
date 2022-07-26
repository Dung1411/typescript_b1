import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import {CategoryType} from '../types/category'
import { Table,Space } from 'antd';

type CategoryListProps = {
    categorys: CategoryType[],
    onRemoveCate: (id: number) => void
}



const CategoryList = ({ categorys, onRemoveCate}: CategoryListProps) => {


    const headings = [
      { title: "Name", dataIndex: "name", key: "name"},
      { title: "Img", dataIndex: "img", key: "img"},
      {
        title: 'Action',
        key: 'action',
        render: (text : any,record : any) => {
          // console.log(record);
          return (
            <Space size="middle">
              <Link to={`/admin/${record.key}/editCate`}>Edit</Link>
              <button onClick={() => onRemoveCate(record.key)}>Delete</button>
            </Space>
          )
        },
      },
    ]
  
    const dataSource = categorys.map((category, index) => {
      return { 
        key: category._id, 
        name: category.name,

        img: <img className='w-[50px]' src={category.img} alt="" /> 
      }
    })
  
    return (
      <div>
          <Table columns={headings} 
           dataSource={dataSource} className =  "table_manager"  />
          <button className='table_manager'><Link to="/admin/categorys/add">Thêm danh sách sản phẩm</Link></button>  
      </div>
  
    )
  }

export default CategoryList
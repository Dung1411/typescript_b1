import React,{ useEffect, useState } from 'react'
import { UserType } from './types/user'
import { Table,Space } from 'antd';
import { list,changeRole, changeStatus } from './../api/User';

type UserManagerProps = {
   users: UserType[],
  
}

const  UserManager= () => {
    const [users,setUsers] = useState([])

  const headings = [
    { title: "Name", dataIndex: "name", key: "name"},
    { title: "Email", dataIndex: "email", key: "email"},
    { title: "Role", dataIndex: "role", key: "role"},
    { title: "Status", dataIndex: "status", key: "status"},

   
  ]

useEffect(() => {
    async function callData(){
        const data = await list();
        console.log(data);
        setUsers(data.data)
    }
    callData()
},[])

  const onChangeSelectData = (event : any,idUser : number) => {
    console.log(event.target.value);
    // console.log(id);
    changeRole(idUser,{ role : event.target.value})
  }

  const onChangeStatus = async(e : any,userId :any) => {
    // console.log(e.target.value);
    // console.log(userId);
    await changeStatus(userId,{ status : e.target.value})
  }

  const onChangeRole = async(e : any,userId :any) => {
    // console.log(e.target.value);
    // console.log(userId);
    await changeRole(userId,{ role : e.target.value})
  }

  const dataSource = users.map((users : UserType, index) => {
    return { 
      key: index + 1, 
      name: users.name,
      email: users.email,
      // 0,1
      role:  <select onChange={(e) => onChangeRole(e,users._id)} defaultValue={users.role}>
        <option value="0">Admin</option>
        <option value="1">User</option>
      </select>,
      status: <select onChange={(e) => onChangeStatus(e,users._id)} defaultValue={users.status}>
      <option value="active">Active</option>
      <option value="block">Block</option>
    </select>
    }
  })

  return (
    <div>
        <Table columns={headings} 
        dataSource={dataSource} className =  "table_manager"  />

    </div>
 
  )
}

export default UserManager
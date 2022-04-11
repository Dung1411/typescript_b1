import React,{ useEffect, useState } from 'react'
import { UserType } from './types/user'
import { Table,Space } from 'antd';
import { list,changeRole } from './../api/User';

type UserManagerProps = {
   users: UserType[],
  
}

// đây là một page đúng chứ ?
const  UserManager= () => {
    const [users,setUsers] = useState([])
// tôi k hiểu lắm ??? nói lại được k 
  const headings = [
    { title: "Name", dataIndex: "name", key: "name"},
    { title: "Email", dataIndex: "email", key: "email"},
    { title: "Role", dataIndex: "role", key: "role"},
    { title: "Status", dataIndex: "status", key: "status"},

   
  ]
//   mình sẽ call api user trong page này
// nấm để í nhé những cái dữ liệu mà mình k cần truyền lên trên app ấy thì mình sẽ sử lí trong page luôn
// đê đểkhi tô total hoặc ở nhà tôi giair thích rõ hơn nhé
// à yes đúng đúng
// mình sẽ call api trong này nhé
useEffect(() => {
    async function callData(){
        const data = await list();
        console.log(data);
        // mình sẽ setState nhé ^^
        setUsers(data.data)
    }
    callData()
},[])

  const onChangeSelectData = (event : any,idUser : number) => {
    console.log(event.target.value);
    // console.log(id);
    changeRole(idUser,{ role : event.target.value})
  }

  const dataSource = users.map((users : UserType, index) => {
    return { 
      key: index + 1, 
      name: users.name,
      email: users.email,
      // 0,1
      role:  users.role == 0 ? "admin" : "user" ,
      status: users.status
    }
  })
//   mình check ở đay nha nấm nó lỗi do nó phải là number nãy tôi để string thằng typescript nó ngáo z đậy
// bây h Nấm phải call dữ liệu từ sserver đúng k
  return (
    <div>
        <Table columns={headings} 
        dataSource={dataSource} className =  "table_manager"  />

    </div>
 
  )
}

export default UserManager
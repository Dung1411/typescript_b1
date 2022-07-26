import { Slider } from 'antd'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Slidebar from '../../components/Sidebar'

type Props = {}

const AdminLayout = (props: Props) => {
  return (
    <div>
        <header className='header_admin'>
          <Slidebar  />
        </header>
        
        <main>
           <Outlet />
        </main>
    </div>
  )
}

export default AdminLayout
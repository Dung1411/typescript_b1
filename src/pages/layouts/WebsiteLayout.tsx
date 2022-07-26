import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'
import  Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import { UserType } from '../types/user'

type Props = {
  user : UserType | null,
  onLogout : any
}

const WebsiteLayout = (props: Props) => {
  return (
    <div>
        <header>
            <Header onLogout={props.onLogout} user={props.user} />
        </header>
        <header>
        
      </header>
        <main>
            <Outlet />
        </main>
        <footer>
            <Footer />
        </footer>
    </div>
  )
}

export default WebsiteLayout
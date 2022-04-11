import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'
import  Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

type Props = {}

const WebsiteLayout = (props: Props) => {
  return (
    <div>
        <header>
            <Header />
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
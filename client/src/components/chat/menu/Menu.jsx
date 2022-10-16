import React from 'react'
import Conversation from './Conversation'
import Header from './Header'
import Search from './Search'

const Menu = () => {
  return (
    <div className='bg-green-100 p-2' style={{height:"90vh"}}>
        <Header/>
        <Search/>
        <Conversation/>
    </div>
  )
}

export default Menu
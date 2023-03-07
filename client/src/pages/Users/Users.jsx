import React from 'react'
import './Users.css'
import { useLocation } from 'react-router-dom'
import LeftSlidebar from '../../components/LeftSlidebar/LeftSlidebar'
import UsersList from './UsersList'
const Users = () => {
    const location=useLocation()
  return (
    <div className='home-contaner-1'>
    <LeftSlidebar/>
    <div className='home-container-2'>
        {
            location.pathname==='/Users'?
            <UsersList/>:
            <>

            </>
        }
    </div>
     
    </div>
  )
}

export default Users

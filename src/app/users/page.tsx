import { promises } from 'dns'
import { resolve } from 'path'
import React from 'react'

const Users = async() => {
    await new Promise((resolve)=>setTimeout(()=>{
        resolve("")
    },4000))
  return (
    <div>Users</div>
  )
}

export default Users
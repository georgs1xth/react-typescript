import axios from 'axios'
import { FC, useEffect, useState } from 'react'
import { IUser } from '../types/types'
import List from './List'
import UserItem from './UserItem'
import { useNavigate } from 'react-router-dom'

const UsersPage: FC = () => {

    const navigate = useNavigate();
    const [users, setUsers] = useState<IUser[]>([])
  
    useEffect(() => {
      fetchUsers()
    }, [])
  
    async function fetchUsers() {
      try {
        const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
        setUsers(response.data)
      } catch (e) {
        console.log(e)
      }
    }
  
    

    return (
        <List items={users} renderItem={(user: IUser) => <UserItem onClick={(user: IUser) => {navigate('/user/' + user.id)}} user={user} key={user.id}/>}/>

  )
}

export default UsersPage
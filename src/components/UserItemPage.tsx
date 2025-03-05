import { FC, useEffect, useState } from 'react'
import { IUser } from '../types/types'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

type UserItemPageParams = {
    id: string;
}

const UserItemPage: FC = () => {

    const params = useParams<UserItemPageParams>()
    const navigate = useNavigate()
    const [user, setUser] = useState<IUser | null>(null)
  
    useEffect(() => {
      fetchUsers()
    }, [])
  
    async function fetchUsers() {
      try {
        const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id)
        setUser(response.data)
      } catch (e) {
        console.log(e)
      }
    }
  
  

    return (
    <div>
        <button onClick={() => {navigate(-1)}}>
            Back
        </button>
        <h1>
            Страница пользователя {user?.name}
        </h1>
        <div>

        </div>
    </div>
  )
}

export default UserItemPage
import { useEffect, useState } from "react"
import Card, { CardVariant } from "./components/Card"
import UserList from "./components/UserList"
import { IUser } from "./types/types"
import axios from "axios"

function App() {

  const [tortureValue, setTortureValue] = useState(0)
  
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
    <div>
      <Card
        variant={CardVariant.outlined}
        width="200px"
        height="200px"
        onClick={(num) => {console.log(num)}}
      >
        Torture amount: {tortureValue}
        <button onClick={(e) => {
          e.stopPropagation();
          setTortureValue(prev => prev + 1)
          }}>
          Kill mine_sigma_boss
        </button>
      </Card>
      <UserList users={users}
      />
    </div>
  )
}

export default App
import { useState } from "react"
import Card, { CardVariant } from "./components/Card"
import UserList from "./components/UserList"
import { IUser } from "./types/types"

function App() {

  const [tortureValue, setTortureValue] = useState(0)
  const users: IUser[] = [
      {
          id: 1,
          name: "John Doe",
          email: "john.doe@example.com",
          address: {
              street: "123 Main St",
              city: "Atyrau",
              zipcode: "060000"
          }
      },
      {
          id: 2,
          name: "Jane Smith",
          email: "jane.smith@example.com",
          address: {
              street: "456 Oak Ave",
              city: "Atyrau",
              zipcode: "060001"
          }
      },
      {
          id: 3,
          name: "Michael Brown",
          email: "michael.brown@example.com",
          address: {
              street: "789 Pine Rd",
              city: "Atyrau",
              zipcode: "060002"
          }
      },
      {
          id: 4,
          name: "Emily White",
          email: "emily.white@example.com",
          address: {
              street: "321 Maple St",
              city: "Atyrau",
              zipcode: "060003"
          }
      },
      {
          id: 5,
          name: "David Green",
          email: "david.green@example.com",
          address: {
              street: "654 Cedar Blvd",
              city: "Atyrau",
              zipcode: "060004"
        }
      }
    ]


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
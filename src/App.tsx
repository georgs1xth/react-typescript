import {Routes, Route, BrowserRouter, NavLink} from "react-router-dom";
import UsersPage from "./components/UsersPage"
import TodosPage from "./components/TodosPage"
import UserItemPage from "./components/UserItemPage";
import TodoItemPage from "./components/TodoItemPage";

function App() {

  return (
    <BrowserRouter>
      <div>
        <div>
          <NavLink 
            to={'/users'} 
            className={({isActive, isPending}) => 
              isActive ? 'active' : isPending ? 'pending' : ''
            } 
          >
              Users
          </NavLink>
          <NavLink to={'/todos'}>Todos</NavLink>
        </div>
        <Routes>
          <Route path={'/users'} element={<UsersPage/>}/>
          <Route path={'/user/:id'} element={<UserItemPage/>}/>
          <Route path={'/todos'} element={<TodosPage/>}/>
          <Route path={'/todo/:id'} element={<TodoItemPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
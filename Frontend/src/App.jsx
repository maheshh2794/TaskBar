
import { Outlet } from 'react-router-dom'
import Navbar from './features/navbar/Navbar'
import Todos from './features/todos/Todos'
import { useSelector } from 'react-redux';

function App() {

  const token = useSelector((state) => state.user.token);

  return <div>
    <Navbar></Navbar>
    {token?<Todos></Todos>:<Outlet></Outlet>}
  </div>
}

export default App

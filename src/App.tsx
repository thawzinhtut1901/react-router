import './App.css'
import { Route, Routes, useRoutes } from 'react-router-dom'
import UserRouter from './routers/UserRouter'
import AuthRouter from './routers/AuthRouter';

function App() {
  const UserRouting = useRoutes(UserRouter); 
  const AuthRouting = useRoutes(AuthRouter); 
  return (
      <div>
        <Routes>
          <Route path="/*" element={UserRouting}/>
          <Route path="/auth/*" element={AuthRouting}/>
        </Routes>
      </div>
  )
}

export default App

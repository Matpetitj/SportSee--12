import './App.css'

import { Routes, Route} from 'react-router-dom';
import UserDashboard from './pages/userDashboard';

function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<UserDashboard />} />
        </Routes>
      </div>
    </>
  )
}

export default App

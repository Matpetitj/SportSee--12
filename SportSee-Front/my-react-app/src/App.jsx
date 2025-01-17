import './App.css'

import { Routes, Route} from 'react-router-dom';
import UserDashboard from './pages/userDashboard';
import Header from "./components/Header/header";

function App() {

  return (
    <>
      <div className='globalWrapper'>
        <div>
          <Header />
        </div>
        <Routes>
          <Route path='/' element={<UserDashboard />} />
        </Routes>
      </div>
    </>
  )
}

export default App

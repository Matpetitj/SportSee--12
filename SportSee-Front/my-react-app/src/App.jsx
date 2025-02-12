import './App.css'

import { Routes, Route} from 'react-router-dom';
import UserDashboard from './pages/userDashboard';
import Header from "./components/Header/header";

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<UserDashboard />} />
      </Routes>
    </>
  )
}

export default App

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import LandingPage from './components/LandingPage'
import Chat from './components/Chat'

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/chat' element={<Chat />} />
      </Routes>
    </Router>
  )
}

export default App

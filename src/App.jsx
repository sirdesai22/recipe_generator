import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import LandingPage from './components/LandingPage'
import Chat from './components/Chat'
import Saved from './components/Saved'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/saved/' element={<Saved />} />
      </Routes>
    </Router>
  )
}

export default App

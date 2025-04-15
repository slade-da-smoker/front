import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { UserProvider } from './context/UserContext'
import FormPage from './pages/FormPage'
import IDCardPage from './pages/IDCardPage'
import ExamCardPage from './pages/ExamCardPage'
import EformPage from './pages/EformPage'
import Landing from './pages/Landing'
import Login from './pages/Login'
import RegisterPage from './pages/RegisterPage'
import PDFPreview from './components/PDFPreview'



const App = () => {
  return (
    <UserProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/home' element={<Landing />} />
        <Route path='/upload' element={<FormPage />} />
        <Route path='/id-card' element={<IDCardPage />} />
        <Route path='/exam-card' element={<ExamCardPage />} />
        <Route path='/exam-form' element={<EformPage />} />
        <Route path='/documentation' element={<PDFPreview />} />
      </Routes>
    </BrowserRouter>
  </UserProvider>
  )
}

export default App


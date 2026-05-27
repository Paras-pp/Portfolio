import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './app/store'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/"         element={<HomePage />}    />
            <Route path="/about"    element={<AboutPage />}   />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact"  element={<ContactPage />}  />
            <Route path="*"         element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

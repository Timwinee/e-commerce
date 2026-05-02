import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Exam from './exam.js'
// import Index from './utils/Index.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Index/> */}
    {/* <Exam/> */}
  </StrictMode>,
)

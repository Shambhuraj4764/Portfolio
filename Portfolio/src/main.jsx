import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Context from './Components/Context/Context.jsx'

createRoot(document.getElementById('root')).render(
    
    <div className='h-full w-full bg-gray-900'>
        <App />
    </div>  
      
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './routes/routes';
import { HelmetProvider } from 'react-helmet-async';
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <HelmetProvider>
   <div className='max-w-screen-xl mx-auto bg-[#111122] font-Philosopher'>
   <RouterProvider router={router} />
   </div>
    </HelmetProvider>
  </StrictMode>,
)

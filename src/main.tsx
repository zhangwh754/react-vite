import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { Skeleton } from 'antd'
import App from './App.tsx'
import 'normalize.css'
import './assets/base.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<Skeleton />}>
      <App />
    </Suspense>
  </StrictMode>
)

import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { Skeleton } from 'antd'
import App from './App.tsx'
import { store } from '@/store/store'
import 'normalize.css'
import './assets/base.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<Skeleton />}>
      <Provider store={store}>
        <App />
      </Provider>
    </Suspense>
  </StrictMode>
)

import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import { motion } from 'framer-motion'
import App from './App'
import authReducer from './state'

const persistConfig = { key: 'root', storage, version: 1 }
const persistedReducer = persistReducer(persistConfig, authReducer)
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

function Loading() {
  return (
    <div className="suspense">
      <CircularProgress />
    </div>
  )
}

const LazyApp = lazy(() => import('./App'))

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate
        loading={
          <Box className="suspense">
            <CircularProgress />
          </Box>
        }
        persistor={persistStore(store)}
      >
        <Suspense fallback={<Loading />}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="suspense"
          >
            <LazyApp />
          </motion.div>
        </Suspense>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)

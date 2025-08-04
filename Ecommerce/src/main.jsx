import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ClerkProvider } from '@clerk/clerk-react'
import { DataProvider } from './Context/DataContext.jsx'
import { CartProvider } from './Context/CartContext.jsx'
import { ToastContainer } from 'react-toastify'

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider>
      <CartProvider>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/'>
          <App />
          <ToastContainer
            position="bottom-right"
            autoClose={2000}
            hideProgressBar={true}
            closeButton={({ closeToast }) => (
              <button
                className="toast-close-btn"
                onClick={closeToast}
                aria-label="Close"
              >
                ×
              </button>
            )}
            toastStyle={{
              backgroundColor: 'rgba(30, 30, 30, 0.85)',
              color: '#fff',
              fontSize: '15px',
              borderRadius: '12px',
              padding: '10px 10px',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              fontFamily: '"Inter", sans-serif',
              letterSpacing: '0.3px',
            }}
           
          />

        </ClerkProvider>
      </CartProvider>
    </DataProvider>
  </StrictMode>,
)

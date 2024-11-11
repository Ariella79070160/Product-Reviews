import { useState } from 'react'
import './App.css'

import Modal from './components/ui/Modal'
import Reviews from './components/Reviews'
import ProductReviewsContextProvider from './components/Reviews/ReviewsContent'



function App() {
  const isModalOpen = true
  
  return (
    <main>
      <div>
        <Modal isOpen={isModalOpen} onClose={()=>{}}>
          <ProductReviewsContextProvider>
            <Reviews></Reviews>
          </ProductReviewsContextProvider>
        </Modal>
      </div>
    </main>
  )
}

export default App

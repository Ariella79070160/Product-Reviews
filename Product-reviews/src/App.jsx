import clsx from 'clsx'
import './App.css'

import Modal from './components/ui/Modal'
import Reviews from './components/Reviews'
import ProductReviewsContextProvider from './components/Reviews/ReviewsContext'



function App() {
  const isModalOpen = true
  
  return (
    <main className="mx-auto min-h-screen max-w-[1440px] p-4">
      <div
        className={clsx(
          'min-h-[calc(100vh_-_32px)] rounded-md bg-white',
          'shadow-sm md:shadow-md lg:shadow-lg',
        )}>
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

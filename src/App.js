import React from 'react'
import ProductList from './Page/Product'
import Hamburger from './Components/Header'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      
      <div className='mb-10'>

        <Hamburger />
      </div>

      <ProductList />

        <Footer />
    </div>
  )
}

export default App
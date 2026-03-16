import NavBar from './components/NavBar/NavBar'
import DaisyNav from './components/DaisyNav/DaisyNav'
import './App.css'
import { Suspense } from 'react'
import PricingOptions from './components/PricingOptions/PricingOptions'


const pricingPromise = fetch('/public/pricingOptions.json').then(res => res.json())

function App() {

  return (
    <>






      <header>

        {/* <DaisyNav></DaisyNav> */}
        <NavBar></NavBar>
      </header>


      <Suspense fallback = {<div className='h-56 w-dvh mx-auto text-center mt-10 flex justify-center items-center'><span className="loading loading-spinner text-warning text-center h-10 w-10 "></span></div>}>
        <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
      </Suspense>


      
    </>
  )
}

export default App

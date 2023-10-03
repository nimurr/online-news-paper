import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import CetagoryItem from './Components/Header/CetagoryItem'
import Foofer from './Page/Footer/Foofer'

function App() {

  return (
    <div className='bg-gray-50'>

      <Header></Header>
      <CetagoryItem></CetagoryItem>
      <Outlet></Outlet>
      <Foofer></Foofer>
      
    </div>
  )
}

export default App

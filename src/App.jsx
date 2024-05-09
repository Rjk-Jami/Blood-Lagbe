import Background from './component/backgroundDesign/Background'
import Copyright from './component/copyright/Copyright'
import Navbar from './pages/shared/Navbar/Navbar'


import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <div className="overflow-hidden  relative">
        <div className="fixed h-screen w-full -z-50 bg-gradient-to-b md:from-[#FC1C36] from-[#FD1C36] to-[#9B000B] md:to-[#AA0B17]">

        </div>
        {/* background */}
        <Background></Background>
        <Copyright></Copyright>



        {/*  */}

        <Navbar></Navbar>

        <div className="" >
          <Outlet></Outlet>
          
        </div>

      </div>

      {/* <div className="h-screen w-full bg-[url('assets/BG.svg')] bg-no-repeat">
      </div>  */}
      
    </>
  )
}

export default App

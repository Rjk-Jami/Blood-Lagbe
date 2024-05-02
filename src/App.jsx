import Background from './component/backgroundDesign/Background'
import Copyright from './component/copyright/Copyright'
import Navbar from './pages/shared/Navbar/Navbar'


import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <div className="overflow-hidden h-screen  bg-gradient-to-b from-[#FC1C36] to-[#AA0B17] relative">
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

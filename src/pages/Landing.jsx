import Header from "../components/Header.jsx";
import Card from "../components/Card.jsx";
import TodoContainer from '../components/TodoCantainer.jsx';
import {useLocation } from "react-router-dom";





function Landing() {
    const data = useLocation()
    
  return (
    <div className='bg-[#ea21c9b3] p-16 flex items-center justify-center min-h-screen'>
      <div className='bg-[#e6b9e3] p-10 border rounded-md  '>
        <Header username={data.state.user} />

        <div className='flex justify-between gap-7 my-5 flex-wrap'>
          <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Madurai"}/>
          <Card bgcolor={"#FD6663"} title={"March"} subtitle={"14:02:34"}/> 
          <Card bgcolor={"#FCA201"} title={"Built Using"} subtitle={"Vite&React"}/>


        </div>
        <TodoContainer/>


      </div>


    </div >

  )
}

export default Landing
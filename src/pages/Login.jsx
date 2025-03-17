import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function Login(props) {
  const navigate = useNavigate()
  const [eusername, setEusername] = useState()
  const [epassword, setEpassword] = useState()
  const [ruser, setRuser] = useState(true)
  const user = props.users


  function handleUInput(evt) {
    setEusername(evt.target.value)

  }
  function handlePInut(evt) {
    setEpassword(evt.target.value)

  }
  function checkuser() {
    var userfound = false

    user.forEach(function (item) {
      if (item.username === eusername && item.password === epassword) {
        console.log("Login Successfull")
        userfound = true
        navigate("/Landing", { state: { user: eusername } });

      }

    })

    if (userfound === false) {
      console.log("login faild")
      setRuser(false)
    }


  }
  return (
    <div className="bg-[#d37de07f] p-10 flex items-center justify-center min-h-screen  ">
      <div className="bg-[#efefefb5] p-10 border  w-full sm:w-2/3 md:w-1/3 lg:w-1/4 rounded shadow">
        <h1 className="text-5x1 font-bold">HEY Hi</h1>
        {ruser ? <p>I help you manage your activites after you login :) </p> : <p className='text-red-500'>Please Sign Up Before you Login</p>}

        <div className="flex flex-col gap-2 my-2">
          <input
            type="text"
            className="w-52 border-black p-2 bg-transparent border rounded-md"
            placeholder="username"
            onChange={handleUInput}
          />
          <input
            type="text"
            className="w-52 border-black p-2 bg-transparent border rounded-md"
            placeholder="password"
            onChange={handlePInut}
          />

          <button className="bg-[#a109d4] w-24 p-1 rounded-md" onClick={checkuser}>
            Login
          </button>
          <p>Don't have an account? <Link to={"/Signup"} className='underline text-blue-800 '>Sign Up</Link> </p>


        </div>

      </div>

    </div>
  )
}

export default Login
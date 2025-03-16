import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Signup(props) {
    const navigate = useNavigate()
    const users = props.users
    const setusers = props.setusers

    const [eusername, setEusername] = useState()
    const [epassword, setEpassword] = useState()

    function handleUInput(evt) {
        setEusername(evt.target.value)
    
      }
      function handlePInut(evt) {
        setEpassword(evt.target.value)
    
      }
      function addUser()
      {
        setusers([...users,{username:eusername,password:epassword}])
        navigate("/")

      }
    return (
        <div className="bg-black p-10 flex items-center justify-center min-h-screen">
            <div className="bg-[#EFEFEF] p-10 border  w-full sm:w-2/3 md:w-1/3 lg:w-1/4 rounded shadow">
                <h1 className="text-3x1 font-bold">HEY Hi</h1>
                <p>Sign up here :)</p>
                <div className="flex flex-col gap-2 my-2">
                    <input
                        type="text"
                        className="w-52 border-black p-2 bg-transparent border rounded-md"
                        placeholder="username"
                        onChange={handleUInput} />
                    <input
                        type="text"
                        className="w-52 border-black p-2 bg-transparent border rounded-md"
                        placeholder="password"
                        onChange={handlePInut} />
                    <input
                        type="text"
                        className="w-52 border-black p-2 bg-transparent border rounded-md"
                        placeholder="confirm password" />

                    <button className="bg-[#FCA201] w-24 p-1 rounded-md" onClick={addUser}>
                        Sign Up
                    </button>
                    <p>Already have an account? <Link to={"/"} className='underline'>Login</Link> </p>


                </div>

            </div>

        </div>
    )
}

export default Signup
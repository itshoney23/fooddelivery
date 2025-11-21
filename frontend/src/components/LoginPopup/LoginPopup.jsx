import React, { useContext, useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
// import { useNavigate } from "react-router-dom";
import axios from "axios"

const LoginPopup = ({setShowLogin}) => {
    
  const {url,setToken} = useContext(StoreContext)
    
    const[currState,setCurrState] = useState("Login")
    const [data,setData] = useState({
      name:"",
      email:"",
      password:""
    })

    const onChangeHandler = (event) => {
      const name  = event.target.name
      const value = event.target.value
      setData(data=>({...data,[name]:value}))
    }

    const onLogin = async (event) => {
      event.preventDefault()
      let newurl = url
      if (currState==="Login") {
        newurl += "/api/user/login"
      } 
      else{
        newurl += "/api/user/register"
      }

      const response = await axios.post(newurl,data)

      if (response.data.success) {
        setToken(response.data.token)
        localStorage.setItem("token",response.data.token)
        setShowLogin(false)
      }
      else{
        alert(response.data.message)
      }

    }

    // useEffect(()=>{
    //   console.log(data)

    // },[data])

    // const navigate = useNavigate();

    // const handleSubmit = (e) => {
    // e.preventDefault();

    // if (currState === "Login") {
    //     // after successful login
    //     navigate("/dashboard"); 
    // } else {
    //     // after successful signup
    //     navigate("/welcome");
    // }
    // };

    return (
    <div className='login-popup'>
      <form onSubmit={onLogin} className="login-popup-container">
      {/* <form className="login-popup-container" onSubmit={handleSubmit}></form> */}
        <div className="login-pop-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt=''/>
        </div>
        <div className="login-popup-inputs">
            {currState=="Login"?<></>:<input name='name' onChange={onChangeHandler} value={data.name} type='text' placeholder='your name' required/>}
            <input name='email' onChange={onChangeHandler} value={data.email} type='email' placeholder='your email' required/>
            <input name='password' onChange={onChangeHandler} value={data.password} type='password' placeholder='your password' required/>
        </div>
        <button type='submit'>{currState=="Sign Up"?"Create Account":"Login"}</button>
        <div className="login-popup-condition">
            <input type='checkbox' required/>
            <p>By Continuing, i agree to the terms and conditions</p>
        </div>
        {currState=="Login"
        ?<p>Create a new Account ? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
        :<p>Already have a  Account ? <span onClick={()=>setCurrState("Login")}>Login here</span></p>}
      </form>
    </div>
  )
}

export default LoginPopup

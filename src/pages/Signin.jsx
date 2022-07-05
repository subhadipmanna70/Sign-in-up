 import { useNavigate } from 'react-router-dom' 
 import aiwriter from './image/aiwriter.webp'
 import React, { useState } from 'react'
 import { initializeApp } from 'firebase/app'
 import logo from './image/logo.webp'
 import{FcGoogle} from 'react-icons/fc'
 import { firebaseConfig  } from '../firebase-config'
 import { getAuth, signInWithPopup, createUserWithEmailAndPassword, GoogleAuthProvider} from 'firebase/auth'

  const Signin =() => {
  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)
  const provider = new GoogleAuthProvider()
  const [user, setUser] = useState({
    username: "",
    password: "",
 });
 
 const getUserData = (event, key) => {

     setUser({ ...user, [key]: event.target.value });
 };
                      
 const postData = async (event) => {
     event.preventDefault();

     const { username, password } = user;

     if (username && password) {
      createUserWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        alert("Signing successfully done")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error)
        console.log(errorMessage)
        alert("User already exist or Invalid email Id")
        // ..
      });
    }
    else{
      alert("Please enter all the details");
    }
};  

function googleLogin() {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result)
      const credential = GoogleAuthProvider.credentialFromResult(result)
      const token = credential.accessToken
      const user = result.user

    })
    .catch((error) => {
      console.log(error)
      const errorCode = error.code
      const errorMessage = error.message
      const email = error.customData.email
      const credential = GoogleAuthProvider.credentialFromError(error)
    })
}

    return(
    
   
      <div className='bg-gradient-to-b from-blue-700 to-white-300 h-[50vw] w-[100vw] '>
    <div className='p-2 flex flex-auto'>
    <img  className='w-[50px] h-[50px]' src={logo} alt="logo"/>
      <h1 className=' text-4xl text-slate-50 font-bold-weight-80 '>IEMAIWriter</h1>
      </div>
    <div className='h-[100vh] flex items-center justify-center '>
      <div className='grid grid-cols-1 md:grid-cols-2 mb-10px m-auto h-[550px] rounded-xl shadow-[2px_35px_40px_10px] shadow-gray-600 sm:max-w-[900px] items-center justify-center'>
      <div className=' w-full h-[550px] hidden md:block'>
        <img className='rounded-xl rounded-r-none w-full h-full' src={aiwriter} alt="" />
      </div>
      <div >
         <form className='p-4 flex flex-col'>
               <h2 className='text-4xl font-bold text-center text-black mb-16'>Sign In</h2>
              <div className=' flex content-center	'>
                 

                   <button 
                   onClick={() => googleLogin()}
                   className='bg-white   shadow-lg hover:shadow rounded-xl px-2 w-full  py-2 flex flex-row content-center	 items-center' ><FcGoogle className='mr-2 h-10 w-10'/>Sign in  with Google</button>

              </div>
              
              
              
                  <div className='flex flex-col pt-4 space-y-4'>
                   
                    <input 
                    autoComplete='off' 
                    className=' rounded-xl boder p-2 mr-2  ' 
                    value={user.username}
                    type="text" 
                    name="username"
                    placeholder='Enter your Username' 
                    onChange={(e) => getUserData(e, "username")} 
                    required />
                    
                    <input 
                   autoComplete='off' 
                   className='rounded-xl boder p-2 mr-2 ' 
                   type="password" 
                   name="password"
                   placeholder='Please set your password' 
                   value={user.password}
                   onChange={(e) => getUserData(e, "password")} 
                   required  />
                   
                    <p className='justify-start py-2' ><input type='checkbox'/>Remember me</p>
                  
                  </div>
                  <button 
                  // onClick={}
                  type="submit" className='bg-blue-700 hover:bg-blue-800 self-center h-[40px] w-[100px] my-4 rounded-xl text-slate-50' onClick={postData} >Sign In</button>
                  
                  <p className='text-center'>Forgot Username or Password?</p>
                  <p className='flex flex-row justify-left'>Not a member? </p> <a href='/signup'><p className='text-blue-900 px-40 font-bold'>Sign Up</p></a>
         </form>
         

           </div>
         </div>
      
         </div>
      
        </div> 
        
    )
  }

  

export default Signin
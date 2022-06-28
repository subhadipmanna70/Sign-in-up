 import aiwriter from './image/aiwriter.webp'
 import logo from './image/logo.webp'
 import{FcGoogle} from 'react-icons/fc'
 import{AiFillFacebook } from 'react-icons/ai'

export default function Signin() {
    return(
    

      <div className='bg-gradient-to-b from-blue-600 to-white-300 h-[50vw] w-[100vw] '>
    <div className='p-2 flex flex-auto'>
    <img  className='w-[50px] h-[50px]' src={logo} alt="logo"/>
      <h1 className=' text-4xl text-slate-50 font-bold-weight-80 '>IEMAIWriter</h1>
      <ul>
  <li></li>


      </ul>
      </div>
    <div className='h-[100vh] flex items-center justify-center '>
      <div className='grid grid-cols-1 md:grid-cols-2 mb-10px m-auto h-[550px] rounded-xl shadow-[2px_35px_40px_10px] shadow-gray-600 sm:max-w-[900px] items-center justify-center'>
      <div className=' w-full h-[550px] hidden md:block'>
        <img className='rounded-xl w-full h-full' src={aiwriter} alt="" />
      </div>
      <div >
         <form className='p-4 flex flex-col '>
               <h2 className='text-4xl font-bold text-center text-slate-50 mb-16'>Sign In</h2>
              <div className='justify-between'>
                   <p><AiFillFacebook/> </p>

                   <p><FcGoogle/></p>

              </div>
              
              
              
                  <div className='flex flex-col space-y-4'>
                    <input className=' rounded-xl boder p-2 mr-2  ' type="text" placeholder='Username' required />
                    <input className='rounded-xl boder p-2 mr-2 ' type="password" placeholder='password' required  />
                    <p className='justify-start' ><input type='checkbox'/>Remember me</p>
                  </div>
                  <button className='bg-blue-700 hover:bg-blue-800 self-center h-[40px] w-[100px] my-4 rounded-xl text-slate-50'>Sign In</button>
                  
                  <p className='text-center'>Forgot Username or Password?</p>
                  <p>Not a member? Sign Up</p>
         </form>
         

      </div>
      </div>
      
      </div>
      
               </div> 
    )

  
}
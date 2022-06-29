import aiwriter from './image/aiwriter.webp'
import logo from './image/logo.webp'
import{FcGoogle} from 'react-icons/fc'
import{AiFillFacebook } from 'react-icons/ai'

export default function Signup() {
   return(
   

     <div className='bg-gradient-to-b from-blue-700 to-white-300 h-[50vw] w-[100vw] '>
   <div className='p-2 flex flex-auto'>
   <img  className='w-[50px] h-[50px]' src={logo} alt="logo"/>
     <h1 className=' text-4xl text-slate-50 font-bold-weight-80 '>IEMAIWriter</h1>
     </div>
   <div className='h-[100vh] flex items-center justify-center '>
     <div className='grid grid-cols-1 md:grid-cols-2 mb-10px m-auto h-[550px] rounded-xl shadow-[2px_35px_40px_10px] shadow-gray-600 sm:max-w-[900px] items-center justify-center'>
     <div className=' w-full h-[550px] hidden md:block'>
       <img className='rounded-xl rounded-r-none w-full h-full' src={aiwriter} alt="something" />
     </div>
     <div >
        <form className='p-4 flex flex-col'>
              <h2 className='text-4xl font-bold text-center text-black mb-16'>Sign up</h2>
             <div className=' flex justify-between'>
                  <button className='bg-white  shadow-md hover:shadow rounded-xl px-2  py-2 flex flex-col items-center '><AiFillFacebook className='mr-2 h-10 w-10'/>Sign up with Facebook</button>

                  <button className='bg-white   shadow-md hover:shadow rounded-xl px-2  py-2 flex flex-col items-center' ><FcGoogle className='mr-2 h-10 w-10'/>Sign up  with Google</button>

             </div>
             
            
             
                 <div className='flex flex-col pt-4 space-y-4'>
                   <input autoComplete='off' className=' rounded-xl boder p-2 mr-2  ' type="text" placeholder='Username' required />
                   <input autoComplete='off' className='rounded-xl boder p-2 mr-2 ' type="text" placeholder='Email' required  />

                   <input   autoComplete='off' className='rounded-xl boder p-2 mr-2 ' type="password" placeholder='password' required  />

                  
                 </div>
                 <button  type="submit" className='bg-blue-700 hover:bg-blue-800 self-center h-[40px] w-[100px] my-4 rounded-xl text-slate-50'>Sign up</button>
        </form>
        

          </div>
        </div>
     
        </div>
     
       </div> 
   )

 
}
import {React , useState} from 'react';
import image from '../Authen.png';
import Button from '@mui/material/Button';
import swal from 'sweetalert';
import { MdEmail } from "react-icons/md";
import { IoIosLock } from "react-icons/io";


function AuthenticationPortal() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(email === 'abc@gmail.com' &&  password === 'JS123') {
      swal("Login Successful" , "Welcome to the portal" , "success");
    } else {
      swal("Wrong Credentials" , "Please try again" , "error");
    }
  }

  
  return (
    <div className='bg-[#F5EEE6] h-screen'>
      <div className='text-slate-900 decoration-8 text-[50px] subpixel-antialiased font-semibold'>
        <h1>Authentication Portal</h1>
      </div>
      <div className='flex md:flex-row flex-col h-full'>
        <div className='flex justify-center items-center md:w-1/2 w-full p-6'>
          <img src={image} width="500px" className='rounded-lg' alt='Authentication-Portal'/>
        </div>
        <div className='flex justify-center items-center md:w-1/2 w-full mx-auto '>
          <form onSubmit={handleSubmit} className='rounded-2xl p-20 bg-[#e8c7b8]'>
            <div className='flex space-x-3'> 
              <div className=''>
              <MdEmail className='text-4xl space-x-4 '/>
              </div>
              <input type="email" className='rounded-md' placeholder="Enter Email" name={email} onChange={(e) => setEmail(e.target.value)} required/>
            </div>
            <br />
            <div className='flex space-x-3 me-5'>
              <IoIosLock className='text-4xl me-'/>
              <input type="password" className='rounded-md' placeholder='Enter Password' name={password} onChange={(e) => setPassword(e.target.value)} required/>
            </div>
            <br />
            <div className='flex justify-start mt-5'>
            <Button variant="contained" type='submit' className='!bg-white !text-black '>Submit</Button>
            </div>
          </form>
        </div>
      </div>
      
    </div>
  )
}

export default AuthenticationPortal
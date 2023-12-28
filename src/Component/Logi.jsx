import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";

const Login = () => {

    const [show,setShow]=useState(false)
    const {login}=useAuth()
    const navigate=useNavigate()


    const Handlelogin=(e)=>{
        e.preventDefault()
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        // console.log(email,password);
        login(email,password)
        .then(res=>{
         if(res.user){
               toast.success('Logged in')
               navigate('/')
            }
        })
        .catch(err=>{
             toast.error(err.message)
        })
    }



    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
   
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div>
             <img className="w-24 mx-auto animate-bounce rounded-full  p-4" src={'https://i.ibb.co/9ntv32s/images.png'} alt="" />
          </div>
      <form onSubmit={Handlelogin} className="card-body">

      
     

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email"  name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <div className="relative ">
          <input type={show?"text":"password"} name="password" placeholder="password" className="input input-bordered w-full" required />
           <span onClick={()=>setShow(!show)} className="absolute top-4 right-1">{ show? <AiFillEye/>:<AiFillEyeInvisible/>}</span>
          </div>
          <label className="label">
            <p>  Have no Account? please <Link className=" text-red-700" to='/register'>Register</Link></p>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-red-700 text-white ">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>  

        </div>
    );
};

export default Login;
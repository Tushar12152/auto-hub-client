import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { imageUpload } from "../Api/ImageUpload";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";
import useAxiosSecure from "../Hooks/useAxiosSecure";



const Register = () => {

    const [show,setShow]=useState(false)
    const {createUser}=useAuth()
    const axiosSecure=useAxiosSecure()
  


const handleRegister=async(e)=>{
       e.preventDefault()
       const form=e.target;

      


        const name= form.name.value;
        const photo= form.photo.files[0]
        const img= await imageUpload(photo)
        const image=img?.data?.display_url
        const email=form.email.value;
        const password=form.password.value;

        const usersInfo={
           image,name,userMail:email,
        }
     


        createUser(email,password)
        .then(res=>{
              if(res.user){
               
                axiosSecure.post('/users',usersInfo)
                .then(res=>{
                    if(res.data.insertedId){
                        toast.success('Registration complete')
                    }
                })
                 
              }
        })
        .catch(err=>{
             toast.error(err.message);
        })
        
        // console.log(name,image,email,password);
}




    return (
        <div>
           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
   
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div>
             <img className="w-24 mx-auto animate-bounce rounded-full  p-4" src={'https://i.ibb.co/9ntv32s/images.png'} alt="" />
          </div>
      <form onSubmit={handleRegister} className="card-body">

      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Upload Photo</span>
          </label>
          <input
                required
                type='file'
                id='image'
                name='photo'
                accept='image/*'
              />
         
        </div>

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
            <p> Already have an Account? please <Link className=" text-red-700" to='/login'>Log In</Link></p>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-red-700 text-white ">Register</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;
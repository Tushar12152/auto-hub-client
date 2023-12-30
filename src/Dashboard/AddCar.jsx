import toast from "react-hot-toast";
import { imageUpload } from "../Api/ImageUpload";
import Title from "../Container/Title";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";

const AddCar = () => {
   const axiosSecure=useAxiosSecure()
   const {user}=useAuth()
   const navigate=useNavigate()

const HandleSubmit=async e=>{
    e.preventDefault()

    const form=e.target;

    const photo= form.photo.files[0]
    const img= await imageUpload(photo)
    const image=img?.data?.display_url

    const carName=form.carName.value;
    const model=form.model.value;
     const price=form.Price.value;
     const registration=form.Registration.value;
     const brand=form.Brand.value;

     console.log(image,carName,model,price,registration,brand);

    const car={
        image,
        carName,
        model,
        price,
        registration,
        brand,
        Added:user.email,

    }


     const sellCar=await axiosSecure.post('/cars',car)
     if(sellCar.data.insertedId){
            toast.success('Your Car is added')
            navigate('/dashboard/my-adds')

     }


}


    return (
        <div>
             <Title heading={'Add My Car'}></Title>


             <form onSubmit={HandleSubmit} className="card-body">

<div className="flex  gap-6">
<div className="form-control w-[50%]">
  <label className="label">
    <span className="label-text">Car Name</span>
  </label>
  <input type="text"   name="carName" placeholder="Car Name" className="input border-red-700 input-bordered" required />
</div>
<div className="form-control w-[50%]">
  <label className="label">
    <span className="label-text">car Model</span>
  </label>

  <input type="text" name="model" placeholder="car Model" className="input border-red-700  input-bordered w-full" required />
  
  <label className="label">
    
  </label>
</div>
</div>


<div className="flex  gap-6">
<div className="form-control w-[50%]">
          <label className="label">
            <span className="label-text">Upload Photo</span>
          </label>
          <input
            className="input border-red-700  input-bordered w-full"
                required
                type='file'
                id='image'
                name='photo'
                accept='image/*'
              />
         
        </div>
<div className="form-control w-[50%]">
  <label className="label">
    <span className="label-text">Price</span>
  </label>

  <input type="text" name="Price" placeholder="Price" className="input border-red-700  input-bordered w-full" required />
  
  <label className="label">
    
  </label>
</div>
</div>

<div className="flex  gap-6">
<div className="form-control w-[50%]">
  <label className="label">
    <span className="label-text">Registration</span>
  </label>
  <input type="text"   name="Registration" placeholder="Registration" className="input border-red-700 input-bordered" required />
</div>
<div className="form-control w-[50%]">
  <label className="label">
    <span className="label-text">Brand</span>
  </label>

  <input type="text" name="Brand" placeholder="Brand" className="input border-red-700  input-bordered w-full" required />
  
  <label className="label">
    
  </label>
</div>
</div>


<div className="form-control mt-6">
  <button className="btn bg-red-700 text-white ">Ready For sale</button>
</div>
</form>



        </div>
    );
};

export default AddCar;
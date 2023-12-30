import { useLoaderData, useNavigate } from "react-router-dom";
import Title from "../Container/Title";
import toast from "react-hot-toast";
import useAxiosSecure from "../Hooks/useAxiosSecure";


const CArUpdate = () => {
    const data=useLoaderData()
    const axiosSecure=useAxiosSecure()
    const navigate=useNavigate()

    const HandleSubmit=async e=>{
        e.preventDefault()
    
        const form=e.target;
    
       
    
        const carName=form.carName.value;
        const model=form.model.value;
         const price=form.Price.value;
         const registration=form.Registration.value;
         const brand=form.Brand.value;
    
        //  console.log(image,carName,model,price,registration,brand);
    
        const updatecar={
      
            carName,
            model,
            price,
            registration,
            brand,
           
    
        }
    
     
        // console.log(updatecar);



         const updateCar=await axiosSecure.patch(`/cars/${data._id}`,updatecar)
         if(updateCar.data.modifiedCount){
                toast.success('Your Car is updated')
                navigate(-1)
    
         }
    
    
    }

    return (
        <div>
             <Title heading={`Update ${data.carName}`}></Title>

             <form onSubmit={HandleSubmit} className="card-body">

<div className="flex  gap-6">
<div className="form-control w-[50%]">
  <label className="label">
    <span className="label-text">Car Name</span>
  </label>
  <input type="text"  defaultValue={data.carName}  name="carName" placeholder="Car Name" className="input border-red-700 input-bordered" required />
</div>
<div className="form-control w-[50%]">
  <label className="label">
    <span className="label-text">car Model</span>
  </label>

  <input type="text" defaultValue={data.model} name="model" placeholder="car Model" className="input border-red-700  input-bordered w-full" required />
  
  <label className="label">
    
  </label>
</div>
</div>




<div className="flex  gap-6">
<div className="form-control w-[50%]">
  <label className="label">
    <span className="label-text">Registration</span>
  </label>
  <input type="text"  defaultValue={data.registration}  name="Registration" placeholder="Registration" className="input border-red-700 input-bordered" required />
</div>
<div className="form-control w-[50%]">
  <label className="label">
    <span className="label-text">Brand</span>
  </label>

  <input type="text" defaultValue={data.brand} name="Brand" placeholder="Brand" className="input border-red-700  input-bordered w-full" required />
  
  <label className="label">
    
  </label>
</div>
</div>


<div className="flex  gap-6">

<div className="form-control w-[50%]">
  <label className="label">
    <span className="label-text">Price</span>
  </label>

  <input type="text" defaultValue={data.price} name="Price" placeholder="Price" className="input border-red-700  input-bordered w-full" required />
  
  <label className="label">
    
  </label>
</div>

<div className="form-control  mt-8 w-[50%]">
  <button className="btn bg-red-700 text-white ">Update {data.carName}</button>
</div>


</div>




             </form>
        </div>
    );
};

export default CArUpdate;
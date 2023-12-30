import { useQuery } from "@tanstack/react-query";
import Title from "../Container/Title";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useAuth from "../Hooks/useAuth";
import { FaEdit, FaTrash } from "react-icons/fa";
import toast from "react-hot-toast";
import swal from "sweetalert";

const MyAddedCAr = () => {
    const {user}=useAuth()
    const userMail=user?.email; 
    const axiosSecure=useAxiosSecure()

    const {  data=[],refetch } = useQuery({
        queryKey: ['car'],
        queryFn: async() =>{
            const res=await axiosSecure.get('/cars')

            return res.data
        }
      })

// console.log(data);
 
   const usersItem=data.filter(item=>item.Added===userMail)
//    console.log(usersItem);

const handleDelete=(id,name)=>{
   

    swal({
        title: "Are you sure?",
        text: `${name} will be Deleted, do not  Recovery this file`,
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            axiosSecure.delete(`/cars/${id}`)
            .then(res=>{
                 if(res.data.deletedCount>0){
                      toast.success('Your  Added car is deleted')
                      refetch()
                 }
            })


        } else {
          swal("Your Added car is safe!");
        }
      })



    
  
}


    return (
        <div>
             <Title heading={'My Posts'}></Title>



             <div className="overflow-x-auto mt-12">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Car Name</th>
        <th>Car Price</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        usersItem.map((item,idx)=> <tr key={item._id}>
            <th>{idx+1}</th>
            <td>{item.carName}</td>
            <td>P{item.price}</td>
            <td><button className="text-xl text-red-700"><FaEdit/></button></td>
            <td><button onClick={()=>handleDelete(item._id,item.carName)} className="text-xl text-red-700"><FaTrash/></button></td>
          </tr>)
      }
     
     
    </tbody>
  </table>
</div>


      

        </div>
    );
};

export default MyAddedCAr;
import { useQuery } from "@tanstack/react-query";
import Title from "../Container/Title";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useAuth from "../Hooks/useAuth";

const Profile = () => {
    const {user}=useAuth()
    const axiosSecure=useAxiosSecure()

    const {  data=[] } = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const res=await axiosSecure.get(`/users/${user.email}`)

            return res.data
        }
      })


    return (
        <div>
             <Title heading={`Welcome ${data?.name} to Profile`}></Title>

             <div >
              <div className="avatar ">
  <div className="w-24 rounded-full ring ml-4 ring-red-700 ring-offset-base-100 ring-offset-2">
    <img src={data?.image} />
   
  </div>
</div>


<h1 className="text-xl  mt-2">Email: {data?.userMail}</h1>
        </div>


        </div>
    );
};

export default Profile;
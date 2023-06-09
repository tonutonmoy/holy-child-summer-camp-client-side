import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import useAxiosSecure from './useAxiosSecure';

const useAllClassesData = () => {

    const {user,loading}=useContext(AuthContext);

    const [axiosSecure]=useAxiosSecure()
   

    const { refetch,  data: allClassesData=[] } = useQuery({
        queryKey: ['allClasses',user?.email],
        enabled: ! loading,
        queryFn: async ()=>{
        
            const res= await axiosSecure.get(`/allClasses/${user && user?.email}`)

              
            return res.data
        } ,
    })


   return[allClassesData,refetch]

};

export default useAllClassesData;
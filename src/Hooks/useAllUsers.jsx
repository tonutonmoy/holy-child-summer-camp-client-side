
import useAxiosSecure from './useAxiosSecure';
import { AuthContext } from '../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';

const useAllUsers = () => {

    
    const { user, loading } = useContext(AuthContext);

    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: allUsers = [] } = useQuery({
        queryKey: ['allUsers', user?.email],
        enabled: !loading,
        queryFn: async () => {

            const res = await axiosSecure.get(`/allUsers/${user && user?.email}`)


            return res.data;
        },
    })
    return[allUsers,refetch]
};

export default useAllUsers;
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useSelectedClassesAll = () => {

    const { user, loading } = useContext(AuthContext);

    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: allSelectedClasses = [] } = useQuery({
        queryKey: ['allSelectedClasses', user?.email],
        enabled: !loading,
        queryFn: async () => {

            const res = await axiosSecure.get(`/allSelectedClasses/${user && user?.email}`)


            return res.data;
        },
    })
    return[allSelectedClasses,refetch]
};

export default useSelectedClassesAll;
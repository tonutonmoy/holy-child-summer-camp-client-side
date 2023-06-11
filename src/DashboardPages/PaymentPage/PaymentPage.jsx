import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import PaymentCheckOutForm from "../PaymentCheckOutForm/PaymentCheckOutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";



const stripePromise = loadStripe(import.meta.env.VITE_stripe_payment_key);


const PaymentPage = () => {

    const [selectedClass,setSelectedClass]=useState({})

    const { user } = useContext(AuthContext);

    const { id } = useParams();

    const token = localStorage.getItem('jwt-token')

    useEffect(() => {


        fetch(`http://localhost:5000/SelectedSingleClass?userEmail=${user && user?.email}&id=${id}`, {
            method: "GET",
            headers: {

                authorization: `bearer ${token}`,

                'content-type': 'application/json'
            }

        })
        .then(res=> res.json())
        .then(res=>{

            setSelectedClass(res)

           
        } )
        .catch(res=> console.log(res))


    }, [user,id])


   

    return (
        <Elements stripe={stripePromise}>
       <PaymentCheckOutForm selectedClass={selectedClass} ></PaymentCheckOutForm>
    </Elements>
    );
};

export default PaymentPage;